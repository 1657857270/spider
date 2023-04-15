import scrapy


class YkSpider(scrapy.Spider):
    name = 'yk'
    allowed_domains = ['youku.com']
    start_urls = ['https://acs.youku.com/h5/mtop.youku.columbus.ycp.query/1.0/?jsv=2.7.0&appKey=24679788&t=1681460816795&sign=bff0156e80c106e97bbc145f45220caa&api=mtop.youku.columbus.ycp.query&type=originaljson&v=1.0&ecode=1&dataType=json&data=%7B%22ms_codes%22%3A%222019061000%22%2C%22system_info%22%3A%22%7B%7D%22%2C%22params%22%3A%22%7B%5C%22bizKey%5C%22%3A%5C%22ycp%5C%22%2C%5C%22pageSize%5C%22%3A10%2C%5C%22time%5C%22%3A1681460816408%2C%5C%22app%5C%22%3A%5C%225200-C2cNqy93%5C%22%2C%5C%22objectType%5C%22%3A1%2C%5C%22nodeKey%5C%22%3A%5C%22MAINPAGE_SUBPAGE%5C%22%2C%5C%22page%5C%22%3A1%2C%5C%22objectCode%5C%22%3A%5C%22XNTkxOTk0NDI2NA%3D%3D%5C%22%2C%5C%22utdid%5C%22%3A%5C%22OmQlHE4t%2Bw8CAbe9Sb1SfDRg%5C%22%7D%22%2C%22debug%22%3A0%7D']
    def parse(self, response):
        print(response.text)
