import scrapy
from game.items import GameItem

class XiaoSpider(scrapy.Spider):
    name = 'xiao'
    allowed_domains = ['4399.com']
    start_urls = ['http://4399.com/flash']

    def parse(self, response):
        item = GameItem()
        li_list = response.xpath("//ul[@class='n-game cf']/li")

        for li in li_list:
            name = li.xpath(".//b/text()").extract_first()
            categroy = li.xpath("./em/a/text()").extract_first()
            dataclasses = li.xpath("./em/text()").extract_first()
            item['name'] = name
            item['categroy'] = categroy
            item['dataclasses'] = dataclasses
            yield item

