import requests
import re
import threading
import time

header = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.54"
}
# 详情页图片地址
detail_urls = []

mutex = threading.Lock()


# 循环获取url
def get_detail_urls(url):
    res = requests.get(url=url, headers=header)
    res.encoding = 'gb2312'
    if res is not None:

        html = res.text
        html = html[html.find('<ul class="g-gxlist-imgbox"'):html.find('<div class="pagelist>"')]

        pattem = re.compile('<a href="(.*?)" target="_blank" title=".*?">')
        find_urls = pattem.findall(html)

        if find_urls:
            # 上锁
            mutex.acquire()
            # 添加到全局变量中
            detail_urls.extend(find_urls)
            # 释放锁
            mutex.release()


def save_image():
    global detail_urls
    while True:
        mutex.acquire()
        print(len(detail_urls))
        if len(detail_urls) > 0:
            # 获取列表第一页
            img_url = detail_urls[0]
            # 删除列表第一页
            del detail_urls[0]
            mutex.release()
            res = requests.get(url=img_url, headers=header)

            if res is not None:
                html = res.text
                print(html)
                html = html[html.find('<div class="img-list3">'):html.find('<div class="m_ssxx">')]
                pattern = re.compile('<img alt=".*?" src="(.*?)" />')
                img_list = pattern.findall(html)
                print(img_list)

                if img_list:
                    for img in img_list:
                        print(f"线程{threading.currentThread().name}", "抓取图片中：", img)

                        try:
                            res = requests.get(img)
                            with open(f"images/{time.time()}.jpg", "wb+") as f:
                                f.write(res.content)
                        except Exception as e:
                            print(e)

        else:
            print("等待中，，，")


if __name__ == '__main__':
    # 分页地址
    origin_url = ['http://www.imeitou.com/nvsheng/']
    for i in range(2, 11):
        origin_url.append(f"http://www.imeitou.com/nvsheng/index_{i}.html")
    # 图片地址
    for d_url in origin_url:
        get_detail_urls(d_url)
    print(detail_urls)

    save1 = threading.Thread(target=save_image)
    save1.start()
    save2 = threading.Thread(target=save_image)
    save2.start()
