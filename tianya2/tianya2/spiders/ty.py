import scrapy
from scrapy_redis.spiders import RedisSpider,RedisCrawlSpider
from tianya2.items import TianyaItem
class TySpider(RedisSpider):
    name = 'ty'
    allowed_domains = ['tianya.cn']
    # start_urls = ['http://tianya.cn/']
    redis_key = "ty_start_url"

    def parse(self, response, **kwargs):
        tbodys = response.xpath("//*[@id='main']/div[7]/table/tbody")[1:]
        for tbody in tbodys:
            hrefs = tbody.xpath("./tr/td[1]/a/@href").getall()
            for href in hrefs:
                detail_url = response.urljoin(href)
                yield scrapy.Request(
                    url=detail_url,
                    callback=self.parse_detail,
                )
        next_herf = response.xpath("//*[@id='main']/div[8]/div/a[last()]/@href").get()
        yield scrapy.Request(
            url=response.urljoin(next_herf),
            callback=self.parse
        )

    def parse_detail(self, resp, **kwargs):

        t = TianyaItem()
        title = resp.xpath("//*[@id='post_head']/h1/span[1]/span/text()").extract_first()
        content = resp.xpath("//*[@id='bd']/div[4]/div[1]/div/div[2]/div/text()").get()
        t['title'] = title
        t['content'] = content.strip()
        yield t
