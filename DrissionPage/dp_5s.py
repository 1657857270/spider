import time

from DrissionPage import ChromiumPage, ChromiumOptions
from DrissionPage._functions.by import By

# page = ChromiumPage()
# page.get('http://www.baidu.com',retry=3,interval=2,timeout=16)
# print(f">>>>>>>>>>>>>>>>>>>>>>>>\n当前对象控制的页面地址和端口: {page.address}\n浏览器进程id: {page.process_id}\n标签页id: {page.tab_id}")
# print(">>>>>>>>>>>>>>>>>>>>>>>>\n当前版本信息text", page.ele('x://p[contains(text(),"最新版本")]').text)
# print(">>>>>>>>>>>>>>>>>>>>>>>>\ngit链接属性值", page.ele('x://p[contains(text(),"项目地址")]/a').attr('href'))


# page = ChromiumPage()
#
# page.get('https://faucet.evmos.dev/')


# if page.ele('#user_login'):
#     login = page.ele('#user_login')
#     login.input("15534217839")
#
#     page.ele('#user_password').input("a15534217839")
#
#     page.ele("@value=登 录").click()
# print(page.cookies(as_dict=True))


if __name__ == '__main__':
    page = ChromiumPage()

    page.get('https://faucet.evmos.dev/',retry=3, interval=2, timeout=15)
    page.wait(20)
    iframe = page.get_frame(0)
    # print(iframe.html)
    # print(page.ele("xpath=//div[@class='main-content']//h1").text)

    # page.ele("@type=checkbox").click()
    iframe.ele("@text()=确认您是真人").click()
    # loc2 = ("xpath=//div[@id='content']//input[@type='checkbox']")
    page.wait.load_start()
    # print(page.ele("xpath=//div[@class='main-content']//h2").text)
    # print(page.html)
    # loc2 = ("xpath=//div[@id='content']//input[@type='checkbox']")
    # page.ele(loc2).click()
    # print(page.ele('xpath=//*[@id="challenge-stage"]/'))

    time.sleep(5)
