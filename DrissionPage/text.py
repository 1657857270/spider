from DrissionPage import ChromiumPage,ChromiumOptions


# page = ChromiumPage()
# page.get('http://www.baidu.com',retry=3,interval=2,timeout=16)
# print(f">>>>>>>>>>>>>>>>>>>>>>>>\n当前对象控制的页面地址和端口: {page.address}\n浏览器进程id: {page.process_id}\n标签页id: {page.tab_id}")
# print(">>>>>>>>>>>>>>>>>>>>>>>>\n当前版本信息text", page.ele('x://p[contains(text(),"最新版本")]').text)
# print(">>>>>>>>>>>>>>>>>>>>>>>>\ngit链接属性值", page.ele('x://p[contains(text(),"项目地址")]/a').attr('href'))



page = ChromiumPage()

page.get('https://gitee.com/login')
if page.ele('#user_login'):
    login = page.ele('#user_login')
    login.input("15534217839")

    page.ele('#user_password').input("a15534217839")

    page.ele("@value=登 录").click()
print(page.cookies(as_dict=True))