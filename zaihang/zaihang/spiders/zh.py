import scrapy


class ZhSpider(scrapy.Spider):
    name = 'zh'
    allowed_domains = ['www.zaih.com']
    start_urls = ['http://www.zaih.com/']

    def parse(self, response):
        pass
