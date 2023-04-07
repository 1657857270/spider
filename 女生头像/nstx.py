import requests
import time
import threading
import re
from lxml import etree

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.78"
}

# 详情页面的url

detail_urls = []

mutex = threading.Lock()


# 循环获取url
def get_detail_urls(url):
    res = requests.get(url=url, headers=headers)
    res.encoding = 'gb2312'
    if res is not None:

        html = res.text
        # 对html经行裁剪
        html = html[html.find('<ul class="g-gxlist-imgbox">'):html.find('<div class="pagelist">')]
        # 设置正则表达式
        pattern = re.compile('<a href="(.*?)" target="_blank" title=".*?">')
        find_urls = pattern.findall(html)
        if find_urls:
            # 上锁
            mutex.acquire()
            # 添加搭配全局变量
            detail_urls.extend(find_urls)
            # 释放锁
            mutex.release()
def save_image():
    global detail_urls

    while True:
        mutex.acquire()
        if len(detail_urls) > 0:
            img_url = detail_urls[0]
            del detail_urls[0]
            mutex.release()
            res = requests.get(url=img_url, headers=headers)

            if res is not None:
                html = res.text

                html = html[html.find('<div class="img-list3">'):html.find('<div class="m_ssxx">')]
                pattern = re.compile('img alt=".*?" src="(.*?)" />')
                img_list = pattern.findall(html)
                if img_list:
                    for img in img_list:
                        print(f"线程{threading.currentThread().name}","抓取图片中：",img)

                        try:
                            res=requests.get(img)
                            with open(f"imags/{time.time()}.png","wb+") as f:
                                f.write(res.content)
                        except Exception as e:
                            print(e)
                else:
                    print("等待中，长时间等待，可以直接关闭")


if __name__ == '__main__':
    origin_url = ['http://www.imeitou.com/nvsheng/']
    for i in range(2, 11):
        origin_url.append(f'http://www.imeitou.com/nvsheng/index_{i}.html')

    for d_url in origin_url:
        get_detail_urls(d_url)
    print(len(detail_urls))
    save1 = threading.Thread(target=save_image)
    save1.start()

    save2 = threading.Thread(target=save_image)
    save2.start()

