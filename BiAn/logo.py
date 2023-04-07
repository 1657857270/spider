import time

import requests
from lxml import etree

url = "https://www.amz123.com/"

header = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.54",
    "cookie": "Hm_lvt_b276b2f97e0eb35a0347f6faeec9c1db=1680011292,1680014187; Hm_lpvt_b276b2f97e0eb35a0347f6faeec9c1db=1680014423"
}
scou = requests.get(url=url, headers=header)
scou = scou.content.decode('utf-8')
et = etree.HTML(scou)
url_lists = et.xpath("//img/@data-raw-src")
print(url_lists)
for url in url_lists:
    url_list = url.split("/")
    if url_list[-1].find(".") == -1:
        name = url_list[-2]
    else:
        name = url_list[-1]
    name = "".join(name)
    imag = requests.get(url, headers=header).content
    f = open(f"imag/{str(name)}", "wb")
    f.write(imag)
    print(f"下载完成{url}")