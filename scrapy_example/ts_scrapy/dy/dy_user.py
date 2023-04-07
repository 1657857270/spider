
import random
import time
# import sys
# sys.path.append('/root/scrapy_example')
from base.utils.ua_list import User_Agent_list
from base.utils.dy_xbogus import get_x_bogus
from scrapy import cmdline, Request
from base.utils.common import TsCrawler
import json
import logging
from urllib.parse import urlencode
import redis


pool = redis.ConnectionPool(host='123.60.105.39', port=6379, db=0, password='aSJap6D14A')
redis = redis.StrictRedis(connection_pool=pool)


LOGGER = logging.getLogger(__name__)

class Dy_Get_Sec_Id_Spider(TsCrawler):

    logger = LOGGER
    name = 'dy_user'
    redis_key = "dyCodeSet"
    redis_batch_size = '5'

    custom_settings = {
        'CONCURRENT_REQUESTS': 5,

        'REDIS_START_URLS_AS_SET':True,
        "COOKIES_ENABLED": False,
        'LOG_LEVEL': 'INFO',
        "HTTPERROR_ALLOWED_CODES": [444],
        'RETRY_ENABLED' : True,
        'ITEM_PIPELINES' : {
            'ts_scrapy.pipelines.MysqlPipeline': 300,
        },
        "DOWNLOADER_MIDDLEWARES": {
            'ts_scrapy.middlewares.ProxyDownloaderMiddleware': 100,
        }
    }



    def make_request_from_data(self, user_id):
        user_id = user_id.decode()


        meta = {'user_id':user_id}
        logging.info(f'获取id {user_id}')
        cookie = redis.srandmember('dy_cookie_new')

        headers = {
            'accept-language': 'zh-CN,zh;q=0.9',
            'cookie': cookie,
            'referer': 'https://www.douyin.com/search/%E5%88%98%E5%B8%88%E5%B8%88?source=search_history&aid=89c0b0ee-9905-422a-adad-6262771a99c1&enter_from=recommend&gid=7075376490342305038',
            'user-agent': random.choice(User_Agent_list)
        }

        base_url = "https://www.douyin.com/aweme/v1/web/general/search/single?"
        params = {
            "device_platform": "webapp",
            "aid": "6383",
            "channel": "channel_pc_web",
            "search_channel": "aweme_general",
            "sort_type": "0",
            "publish_time": "0",
            "keyword": user_id,
            "search_source": "search_history",
            "query_correct_type": "1",
            "is_filter_search": "0",
            "from_group_id": "7075376490342305038",
            "offset": "0",
            "count": "10",
            "version_code": "170400",
            "version_name": "17.4.0",
            "cookie_enabled": "true",
            "screen_width": "1920",
            "screen_height": "1080",
            "browser_language": "zh-CN",
            "browser_platform": "Win32",
            "browser_name": "Edge",
            "browser_version": "100.0.1185.29",
            "browser_online": "true",
            "engine_name": "Blink",
            "engine_version": "100.0.4896.60",
            "os_name": "Windows",
            "os_version": "10",
            "cpu_core_num": "8",
            "device_memory": "8",
            "platform": "PC",
            "downlink": "10",
            "effective_type": "4g",
            "round_trip_time": "50",
            "webid": "7079002627996157440",
            "msToken": "mN3AP6NNssl_SxKLG6Tl30-ns7vuVjuVfu4gcQZbYYb87W3uohReUh31Zl1kKBFHNYlm-mqguVrVKCvCxqRJ1FtZMquGY9ihliRXZwTn-1R3zX4m9IOk0r7dvV5CpgA=",
            "X-Bogus": "DFSzswSOsdUAN9szSlxj3RXAIQR6",
            "_signature": "_02B4Z6wo00001ZcY6sgAAIDA9BIqoSsiGW2XGO5AAAeQPG8dden-CrmangUDQSgXK2be8jgqDjM2ZmSYTwyJHeRV-BeCkHWI4.T.x5yaCoZJn4Q3zXQxR6Nmh.IrhUHvmsIoURG7l7qpp9IJ61'"
        }

        url = base_url + urlencode(params)

        return Request(url=url, headers=headers, callback=self.parse, dont_filter=True,meta=meta)

    def parse(self, response, **kwargs):
        meta = response.meta
        resp = json.loads(response.body)
        # print(resp)
        if resp['status_code'] == 0:
            data = resp['data']
            try:
                if data[0]['type'] == 4:
                    user_info = data[0]['user_list'][0]
                    meta['uid'] = user_info['user_info']['short_id']
                    meta['sec_uid'] = user_info['user_info']['sec_uid']
                    logging.info('获取到secid,请求主页')
                    # 获取主页信息
                    base_url = 'https://www.douyin.com/aweme/v1/web/user/profile/other/'
                    cookie = redis.srandmember('dy_cookie_new')
                    headers = {
                        'accept-language': 'zh-CN,zh;q=0.9',
                        'cookie': cookie,
                        'referer': base_url,
                        'user-agent': random.choice(User_Agent_list)
                    }
                    params = {
                        "device_platform": "webapp",
                        "aid": "6383",
                        "channel": "channel_pc_web",
                        "publish_video_strategy_type": "2",
                        "source": "channel_pc_web",
                        "sec_user_id": meta['sec_uid'],
                        "pc_client_type": "1",
                        "version_code": "170400",
                        "version_name": "17.4.0",
                        "cookie_enabled": "true",
                        "screen_width": "1512",
                        "screen_height": "982",
                        "browser_language": "zh-CN",
                        "browser_platform": "MacIntel",
                        "browser_name": "Chrome",
                        "browser_version": "110.0.0.0",
                        "browser_online": "true",
                        "engine_name": "Blink",
                        "engine_version": "110.0.0.0",
                        "os_name": "Mac OS",
                        "os_version": "10.15.7",
                        "cpu_core_num": "8",
                        "device_memory": "8",
                        "platform": "PC",
                        "downlink": "10",
                        "effective_type": "4g",
                        "round_trip_time": "50",
                        "webid": "7209935424273810956",

                    }
                    bogus_result = get_x_bogus(urlencode(params), '', headers['user-agent'])
                    params['X-Bogus'] = bogus_result
                    url = base_url + "?" + urlencode(params)
                    yield Request(url=url, headers=headers, callback=self.get_info, meta=meta, dont_filter=True)

                elif data[0]['type'] == 1:
                    logging.info('无此账号！')
            except IndexError:
                logging.info('blocked！')
                return
        else:
            logging.info('Error')
            # redis.sadd('dyCodeSet', meta['user_id'])


    def get_info(self,response):
        meta = response.meta
        try:
            resp = json.loads(response.body)

            # print(resp)
            data = resp['user']
            # 用户名称
            nickname = data['nickname']
            # 粉丝数
            follower_count = data['follower_count']
            # 关注数
            following_count = data['following_count']
            # 获赞
            total_favorited = data['total_favorited']
            # 年龄
            user_age = data['user_age']
            # 简介
            signature = data['signature'].replace('\n', '')
            # 作品数
            aweme_count = data['aweme_count']
            # ip
            try:
                ip_location = data['ip_location'].replace('IP属地：', '')
            except KeyError:
                ip_location = '无'

            ctime = int(time.time())
            detail = {
                'user_id': meta['user_id'],
                'uid': meta['uid'],
                'nickname': str(nickname),
                'follower_count': follower_count,
                'following_count': following_count,
                'total_favorited': total_favorited,
                'user_age': user_age,
                'signature': str(signature),
                'aweme_count': aweme_count,
                'ip_location': str(ip_location),
                'ctime': ctime,
            }
            # print(detail)
            logging.info(f'主页信息获取成功====={detail}')
            yield detail
        #
        except json.decoder.JSONDecodeError:
            logging.info('error2')
            # redis.sadd('dyCodeSet', meta['user_id'])

if __name__ == "__main__":
    cmdline.execute("scrapy crawl dy_user".split())



