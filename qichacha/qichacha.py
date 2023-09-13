import time
import random

from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver import Chrome, Keys
from selenium.webdriver.chrome.options import Options


def search(key):
    time.sleep(2)
    web.find_element(By.XPATH, '//*[@name="key"]').send_keys(key, Keys.ENTER)
    time.sleep(0.3)
    web.find_element(By.XPATH, '//*[@class="copy-title"]/a').click()
    web.switch_to.window(web.window_handles[-1])
    time.sleep(random.uniform(1, 2))
    a = web.find_element(By.XPATH,'/html/body/div[1]/div[2]/div[4]/div/div/div[2]/div[1]/div[5]/div/div[1]/a/span')
    print(a)
    web.find_element(By.XPATH, '/html/body/div/div[2]/div[3]/div/div[2]/div[2]/div/div/div/div[2]/div/div/div/div[3]/span[2]').click()
    time.sleep(0.5)
    web.find_element(By.XPATH, '/html/body/div/div[2]/div[4]/div[1]/div/div[2]/div[1]/div[7]/div/div[3]/a').click()
    time.sleep(5)



def zhaotoubiao():
    pass


if __name__ == '__main__':
    # while True:
    option = Options()
    # option.add_argument('--disable-blink-features=AutomationControlled')
    option.add_experimental_option('excludeSwitches', ['enable-automation'])  # webdriver防检测
    # option.add_argument(
    #     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36')

    # option.add_argument("--disable-blink-features=AutomationControlled")
    # option.add_argument("--no-sandbox")
    # option.add_argument("--disable-dev-usage")

    web = Chrome(options=option)
    web.get(f'https://www.qcc.com')
    search("91110108717743469K")
    
