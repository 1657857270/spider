import re
import requests
import time
#抓取数据
def main():
    url = 'http://www.netbian.com/mei/index.htm'
    res = requests.get(url=url,headers=headers)
    res.encoding = "GBK"
    format(res.text)

#解析函数
def format_detail(text):
    div_html = '<div class="pic">'
    page_html = '<div class="pic-down">'
    start = text.find(div_html) + len(div_html)
    end = text.find(page_html)
    origin_rext = text[start:end]
    pattern = re.compile('src="(.*?)"')
    image_src = pattern.search(origin_rext).group(1)
    save_image(image_src)


def format(text):
    #处理字符串
    div_html = '<div class="list">'
    page_html = '<div class="page">'
    start = text.find(div_html)+len(div_html)
    end = text.find(page_html)
    origin_text = text[start:end]

    pattern = re.compile('href="(.*?)"')
    hrefs = pattern.findall(origin_text)
    hrefs = [i for i in hrefs if i.find("desk") > 0]
    print(hrefs)
    for href in hrefs:
        url = f"http://www.netbian.com{href}"
        res = requests.get(url=url, headers=headers)
        res.encoding = "GBK"
        print(f"正在下载：{url}")
        format_detail(res.text)

        break

#存储函数
def save_image(image_src):
    res = requests.get(url=image_src,headers=headers)
    content = res.content
    with open(f"imag/{str(time.time())}.jpg","wb") as f:
        f.write(content)
        print("保存成功")

if __name__ == '__main__':
    headers = {
        # "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        # "Accept-Encoding": "gzip, deflate",
        # "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        # "Cache-Control": "max-age=0",
        # "Cookie": "yjs_js_security_passport=e77b0582e84684e2b459202cc737cccc527f4ffc_1675429233_js; trenvecookieclassrecord=%2C4%2C",
        # "Host": "www.netbian.com",
        # "Proxy-Connection": "keep-alive",
        # "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.70"
    }
    main()