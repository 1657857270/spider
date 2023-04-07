# -*- coding:utf-8 -*-
from scrapy_redis.spiders import RedisCrawlSpider
from collections.abc import Iterable
from scrapy_redis import defaults, connection
from scrapy import signals



class TsCrawler(RedisCrawlSpider):
    def setup_redis(self, crawler=None):
        """Setup redis connection and idle signal.
        This should be called after the spider has set its crawler object.
        """
        if self.server is not None:
            return

        if crawler is None:
            # We allow optional crawler argument to keep backwards
            # compatibility.
            # XXX: Raise a deprecation warning.
            crawler = getattr(self, 'crawler', None)

        if crawler is None:
            raise ValueError("crawler is required")

        settings = crawler.settings

        if self.redis_key is None:
            self.redis_key = settings.get(
                'REDIS_START_URLS_KEY', defaults.START_URLS_KEY,
            )

        self.redis_key = self.redis_key % {'name': self.name}

        if not self.redis_key.strip():
            raise ValueError("redis_key must not be empty")

        if self.redis_batch_size is None:
            self.redis_batch_size = settings.getint(
                'REDIS_START_URLS_BATCH_SIZE',
                settings.getint('CONCURRENT_REQUESTS'),
            )

        try:
            self.redis_batch_size = int(self.redis_batch_size)
        except (TypeError, ValueError):
            raise ValueError("redis_batch_size must be an integer")

        if self.redis_encoding is None:
            self.redis_encoding = settings.get('REDIS_ENCODING', defaults.REDIS_ENCODING)

        self.logger.info("Reading start URLs from redis key '%(redis_key)s' "
                         "(batch size: %(redis_batch_size)s, encoding: %(redis_encoding)s)",
                         self.__dict__)
        self.redis_url = settings.get('REDIS_URL')
        if not self.redis_url:
            raise ValueError('redis_url must not be empty')
        if "cluster" in self.redis_url:
            self.server = RedisCluster.from_url(self.redis_url)
        else:
            self.server = connection.from_settings(crawler.settings)

        if settings.getbool('REDIS_START_URLS_AS_SET', False):
            # set
            self.fetch_data = self.pop_set_queue
        elif settings.getbool('REDIS_START_URLS_AS_ZSET', False):
            # zset
            self.fetch_data = self.pop_priority_queue
        else:
            # 列表
            self.fetch_data = self.pop_list_queue


        # The idle signal is called when the spider has no requests left,
        # that's when we will schedule new requests from redis queue

        crawler.signals.connect(self.spider_idle, signal=signals.spider_idle)

    def pop_list_queue(self, redis_key, batch_size):
        datas = []
        for _ in range(int(batch_size)):
            data = self.server.lpop(redis_key)
            if not data:
                break
            # elif data == None:
            #     break
            datas.append(data)
        return datas, len(datas)

    def pop_priority_queue(self, redis_key, batch_size):
        data_list = self.server.zpopmin(redis_key, batch_size)
        datas = [data[0] for data in data_list]
        return datas, len(datas)

    def pop_set_queue(self, redis_key, batch_size):
        datas = []
        for i in range(int(batch_size)):
            data = self.server.spop(redis_key)
            if not data:
                break
            datas.append(data)
        return datas, len(datas)

    def pop_set_queue_redis(self, redis_key, batch_size):
        ori_data = self.server.spop(redis_key,count=batch_size)
        data = list(filter(lambda x: x != None, ori_data))
        return data, len(data)

    def next_requests(self):
        """Returns a request to be scheduled or none."""
        # XXX: Do we need to use a timeout here?
        datas, length = self.fetch_data(self.redis_key, self.redis_batch_size)
        for data in datas:
            reqs = self.make_request_from_data(data)
            if isinstance(reqs, Iterable):
                for req in reqs:
                    yield req
            elif reqs:
                yield reqs
            else:
                self.logger.debug(f"Request not made from data: {data}")
        if length:
            self.logger.warning(f"Read {length} requests from '{self.redis_key}'")

