# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class ZhItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    name = scrapy.Field()
    city = scrapy.Field()
    industry = scrapy.Field()
    price = scrapy.Field()
    chat_nums = scrapy.Field()
    score = scrapy.Field()
