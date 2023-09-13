import scrapy
from xjb.items import XjbItem

class ExampleSpider(scrapy.Spider):
    name = 'example'
    # allowed_domains = ['example.com']
    start_urls = ['https://book.douban.com/tag/%E5%B0%8F%E8%AF%B4?start=20&type=T']

    def parse(self, response):
        item = XjbItem()
        trs = response.xpath("//ul[@class='subject-list']//li")
        for tr in trs:
            title = tr.xpath(".//div[@class='info']/h2/a/text()").get()
            item['title']=title.strip()
            yield item

