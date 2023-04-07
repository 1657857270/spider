from selenium.webdriver import Chrome
import time
import json
import requests
from lxml import etree
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC




def get_page_source(url):
    web.get(url)

    # 显示等待
    el = WebDriverWait(web, 10, 0.5).until(  # until 结束等待的条件
        EC.presence_of_element_located(By.XPATH, '//*[@id="wrap"]/div[2]/div[2]/div/div[1]/div[2]/ul/li[1]/div[1]/a')
    )

    page_source = web.page_source
    web.quit()
    return web.page_source


def get_job_name(page_source):
    tree = etree.HTML(page_source)
    job_names = tree.xpath('//*[@class="job-name"]')
    print(job_names)
if __name__ == '__main__':
    web = Chrome()
    source = get_page_source("https://www.zhipin.com/web/geek/job?query=python&city=100010000https://www.zhipin.com/web/geek/job?query=python&city=100010000")
    get_job_name(source)