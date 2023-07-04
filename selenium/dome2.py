from selenium import webdriver
import time
from selenium.webdriver.common.by import By

from selenium.webdriver import ActionChains, Keys


class TestCase:
    def __init__(self):
        self.driver = webdriver.Chrome()

    def mouse(self):
        self.driver.get('http://sahitest.com/demo/clicks.htm')
        btn = self.driver.find_element(By.XPATH, "//input[@value='dbl click me']")
        ActionChains(driver=self.driver).double_click(btn).perform()

    def key(self):
        self.driver.get('http://www.baidu.com')
        # kw = self.driver.find_element(By.ID, "kw")
        # kw.send_keys('selenium')
        # kw.send_keys(Keys.CONTROL, 'a')
        # time.sleep(2)
        # kw.send_keys(Keys.CONTROL, 'x')
        # time.sleep(2)
        # kw.send_keys(Keys.CONTROL, 'v')
        # time.sleep(2)
        deng = self.driver.find_element(By.LINK_TEXT, "新闻")
        ActionChains(self.driver).move_to_element(deng).click().perform()
        self.driver.switch_to.window(self.driver.window_handles[-1])
        self.driver.close()
        self.driver.switch_to.window(self.driver.window_handles[0])
        time.sleep(2)

if __name__ == '__main__':
    text = TestCase()
    text.key()
