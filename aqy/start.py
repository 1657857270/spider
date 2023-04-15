from scrapy import cmdline
#scrapy crawl iqy -o comments.json -s CLOSESPIDER_ITEMCOUNT=10
cmds = ['scrapy','crawl','iqy']
cmdline.execute(cmds)