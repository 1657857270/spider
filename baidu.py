import time

from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import Options
option = Options()
option.add_argument('--disable-blink-features=AutomationControlled')
web = Chrome(options=option)
web.get('https://www.baidu.com/')
a = web.find_element(By.XPATH,'//input[@id="kw"]').send_keys("淘宝")
web.find_element(By.XPATH,'//input[@class="bg s_btn"]').click()
time.sleep(3)
web.quit()