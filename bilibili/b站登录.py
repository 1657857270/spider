import math
import time

from selenium.webdriver.common.by import By

from selenium import webdriver
from selenium.webdriver import ChromeOptions
from chaojiying import Chaojiying_Client
from selenium.webdriver import ActionChains

from tujian import base64_api

option = ChromeOptions()
option.add_experimental_option('excludeSwitches', ['enable-automation'])
option.add_experimental_option('useAutomationExtension', False)
driver = webdriver.Chrome(options=option)
driver.get('https://www.bilibili.com/')
driver.find_element(By.XPATH, "//div[@class='header-login-entry']").click()
time.sleep(2)
driver.find_element(By.XPATH, "//div[@class='form__item']/input[@type='text']").send_keys("15534217839")
driver.find_element(By.XPATH, "//input[@type='password']").send_keys("a15534217839")
driver.find_element(By.XPATH, "//div[@class='btn_primary ']").click()
time.sleep(2)
img_label = driver.find_element(By.CSS_SELECTOR, '.geetest_widget')

img_label.screenshot('yzm.png')
time.sleep(4)

results = base64_api(uname='167857270', pwd='A15534217839', img="yzm.png", typeid=27)
print(results)
time.sleep(2)
indexs = results.split('|')
# 由于selenium4.3.3新特性move_to_element_with_offset元素中心的偏移，需要后俩个参数减去一半的长度、宽度再进行偏移就好了
code_tag_half_width = int(img_label.rect['width']) / 2
code_tag_half_height = int(img_label.rect['height']) / 2
for index in indexs:
    x = int(index.split(',')[0])
    y = int(index.split(',')[1])
    print(type(x))
    ActionChains(driver).move_to_element_with_offset(img_label, int(x - code_tag_half_width),
                                                     int(y - code_tag_half_height)).click().perform()
    time.sleep(0.1)
time.sleep(4)
