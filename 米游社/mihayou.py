import time

import requests
global total


def request_get(url, ret_type="text", timeout=5, encoding="utf-8", host="bbs-api.miyoushe.com"):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.54",
        "Origin": "https://bbs.mihoyo.com",
        "Referer": "https://bbs.mihoyo.com/",
        "Host": host
    }
    res = requests.get(url=url, headers=headers, timeout=timeout)
    res.encoding = encoding
    if ret_type == "text":
        return res.rext

    elif ret_type == "image":
        return res.content

    elif ret_type == "json":
        return res.json()


def save_image(img_url):
    content = request_get(img_url, ret_type="image", host="upload-bbs.miyoushe.com")
    with open(f"imags/{str(time.time())}.jpg", "wb") as f:
        f.write(content)
        global total
        total += 1
        print(f"保存第{total}张图片")


def detail(post_id):
    url = f"https://bbs-api.mihoyo.com/post/wapi/getPostFull?gids=5&post_id={post_id}&read=1"
    res_json = request_get(url,ret_type="json", timeout=5)
    if res_json["retcode"] == 0:
        image_list = res_json["data"]["post"]["image_list"]
        for img in image_list:
            img_url = img["url"]
            if (img_url.find("weigui")) < 0:
                save_image(img_url)


# 抓取函数
def main(last_id):
    # 起始页面
    url = f"https://bbs-api.mihoyo.com/post/wapi/getForumPostList?forum_id=47&gids=5&is_good=false&last_id={last_id}&is_hot=false&page_size=20&sort_type=2"
    res_json = request_get(url, ret_type="json", timeout=5)
    if res_json["retcode"] == 0:
        for item in res_json["data"]["list"]:
            # 抓取内页数据
            detail(item["post"]["post_id"])

    if res_json["data"]["last_id"] != "":
        return main(res_json["data"]["last_id"])

if __name__ == '__main__':
    global total
    total = 0
    main(35257255)
