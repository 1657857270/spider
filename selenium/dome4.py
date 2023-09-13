from selenium import webdriver
from selenium.webdriver import ChromeOptions
import time
import os

option_b = webdriver.ChromeOptions()
# 加载用户配置 绕过登录
option_b.add_argument(f"--user-data-dir={os.path.expanduser('~')}\\AppData\\Local\\Google\\Chrome\\User Data")
option_b.add_argument(" --profile-directory=Profile 1")
driver_b = webdriver.Chrome(chrome_options=option_b,)
driver_b.maximize_window()
driver_b.get("https://www.qcc.com/")
time.sleep(2)