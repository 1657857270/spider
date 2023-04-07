import requests
from lxml import etree

url = "http://www.netbian.com/fengjing"

header = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.54"
}
scou = requests.get(url=url, headers=header)
scou = scou.content.decode('gbk')
et = etree.HTML(scou)
lists = et.xpath("//div[@class='list']/ul/li/a/@href")
url1 = 'http://www.netbian.com'
i = url1 + lists[0].split('.')[0] + '-1920x1080.htm'

tupian = requests.get(i)
tu = etree.HTML(tupian.content.decode('gbk'))
title = tu.xpath('//title/text()')
tup_url = tu.xpath("//td[@align='left']/a/@href")
imag = requests.get(tup_url[0]).content
print(imag)
f = open('imag/'+title[0]+'.jpg', 'wb')
f.write(imag)

