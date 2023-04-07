import requests
from lxml import etree

def request_post(url, ret_type="text", timeout=5, encoding="utf-8", origin="https://hotels.ctrip.com"):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.54",
        "origin" : "https://hotels.ctrip.com",
        "p": "19704187124",
        "referer": "https://hotels.ctrip.com/",
        "cookie":"ibulanguage=CN; ibulocale=zh_cn; cookiePricesDisplayed=CNY; MKT_CKID=1675675300226.wjvdd.mrf2; MKT_CKID_LMT=1675675300227; _RF1=118.72.100.224; _RSG=voKFoXjbgU58YniCuQxbaA; _RDG=2838ea230d86f8269c39590d191554d6af; _RGUID=57aa96d8-723d-4cb9-a925-edae0cb31888; _bfaStatusPVSend=1; _bfi=p1%3D102001%26p2%3D102001%26v1%3D2%26v2%3D1; _bfaStatus=success; __zpspc=9.1.1675675300.1675675331.3%234%7C%7C%7C%7C%7C%23; _jzqco=%7C%7C%7C%7C1675675300390%7C1.1223762698.1675675300204.1675675310123.1675675331383.1675675310123.1675675331383.0.0.0.3.3; _bfa=1.1675675300188.2jgfls.1.1675675300188.1675675300188.1.3.1; _bfs=1.3; _ubtstatus=%7B%22vid%22%3A%221675675300188.2jgfls%22%2C%22sid%22%3A1%2C%22pvid%22%3A3%2C%22pid%22%3A102001%7D"

    }
    res = requests.post(url=url, headers=headers, timeout=timeout)
    res.encoding = encoding
    if ret_type == "text":
        return res.rext

    elif ret_type == "image":
        return res.content

    elif ret_type == "json":
        return res.json()

def main():
    url = "https://m.ctrip.com/restapi/soa2/21881/json/getBrowseRecord"
    res = request_post(url,ret_type="json")
    print(res)


if __name__ == '__main__':
    main()

