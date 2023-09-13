from selenium import webdriver
import time
from selenium.webdriver.common.by import By

from selenium.webdriver import ActionChains, Keys


class TestCase:
    def __init__(self):
        self.driver = webdriver.Chrome()


    def js_test(self):
        self.driver.get('http://www.baidu.com')
        self.driver.find_element(By.ID,"kw").send_keys('selenium',Keys.ENTER)
        self.driver.save_screenshot('baudu.png')
        time.sleep(2)
        js = 'window.scrollTo(0,document.body.scrollHeight)'
        self.driver.execute_script(js)
        time.sleep(2)
if __name__ == '__main__':
    text = TestCase()
    text.js_test()
