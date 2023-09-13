from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class TestCase(object):
    def __init__(self):
        self.driver = Chrome()
    def test_switch(self):
        self.driver.get('https://www.baidu.com/')
        self.driver.find_element(By.LINK_TEXT,'新闻').click()
        wait = WebDriverWait(self.driver,timeout=2,poll_frequency=0.5)
        wait.until(EC.presence_of_element((By.XPATH,'')))
        windows = self.driver.window_handles
        self.driver.switch_to.window(windows)



if __name__ == '__main__':
    case = TestCase()
    case.test_switch()
