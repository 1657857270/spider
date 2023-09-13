from selenium import webdriver
from selenium.webdriver import ChromeOptions

option = ChromeOptions()
# 隐藏浏览器界面
# option.add_argument('--headless')
# option.add_argument('--disable-gpu')
# 防止检测
option.add_experimental_option('excludeSwitches', ['enable-automation'])
option.add_experimental_option('useAutomationExtension',False)
driver = webdriver.Chrome(options=option)
driver = driver.get('https://www.baidu.com')

