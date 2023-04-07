import scrapy
from tianya.items import TianyaItem
from redis import Redis

class TySpider(scrapy.Spider):
    name = 'ty'
    allowed_domains = ['tianya.cn']
    start_urls = ['http://bbs.tianya.cn/list-hn-1.shtml']

    def __init__(self,name=None,**kwargs):
        self.red = Redis(host="127.0.0.1", port=6379,db=9)
        #让父类能初始化
        super(TySpider,self).__init__(name,**kwargs)


    def parse(self, response, **kwargs):
        tbodys = response.xpath("//*[@id='main']/div[7]/table/tbody")[1:]
        for tbody in tbodys:
            hrefs = tbody.xpath("./tr/td[1]/a/@href").getall()
            for href in hrefs:
                detail_url = response.urljoin(href)
                #1.直接往redis中的set集合怼
                #进入到详情页的条件是：在redis中没有储存过该url
                #2.判断是否存在该元素
                result = self.red.sismember("tianya:ty:detail:url",detail_url)
                if result:
                    print(f"该url已经被抓取过{detail_url}")
                else:
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
        self.red.sadd("tianya:ty:detail:url",resp.url)
        yield t
