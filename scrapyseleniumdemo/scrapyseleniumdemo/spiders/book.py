import re

import scrapy
from scrapy import Request, Spider

from scrapyseleniumdemo.scrapyseleniumdemo.items import BookItem


class BookSpider(scrapy.Spider):
    name = 'book'
    allowed_domains = ['spa5.scrape.center']
    base_urls = 'http://spa5.scrape.center/'

    def start_requests(self):
        start_url = f'{self.base_urls}/page/1'
        yield Request(start_url, callback=self.parse_index)

    def parse_index(self, response):
        items = response.css('.item')
        for item in items:
            href = item.css('.top a::attr(href)').extract_first()
            detail_url = response.urljoin(href)
            yield Request(detail_url, callback=self.parse_detail, priority=2)

        match = re.search(r'pagr/(/d+)', response.url)
        if not match: return
        page = int(match.group(1))+1
        next_url = f'{self.base_urls}/page/{page}'
        yield Request(
            next_url,
            callback=self.parse_index
        )

    def parse_detail(self,resp):
        name = resp.css('.name::text').extract_frist()
        tags = resp.css('.tags button span::text').extract()
        score = resp.css('.score::text').extract_frist()
        price = resp.css('.price span::text').extract_frist()
        cover = resp.css('.cover::attr(src)').extract_frist()
        tags = [tags.strip() for tag in tags] if tags else []
        score = score.strip() if score else None

        item = BookItem(name=name,tags=tags,score=score,price =price,cover=cover)

        yield item
