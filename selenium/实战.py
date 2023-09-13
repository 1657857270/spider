import json

from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from os import makedirs
from os.path import exists

INDEX_URL = 'https://spa2.scrape.center/page/{page}'
TIME_OUT = 10
TOTAL_PAGE = 10
driver = webdriver.Chrome()
wait = WebDriverWait(driver, TIME_OUT)

RESULTS_DIR = 'results'

exists(RESULTS_DIR) or makedirs(RESULTS_DIR)


def scrape_page(url, condition, locator):
    driver.get(url)
    wait.until(condition(locator))


def scrape_index(page):
    url = INDEX_URL.format(page=page)
    scrape_page(url, condition=EC.visibility_of_element_located, locator=(By.CSS_SELECTOR, '#index .item'))


from urllib.parse import urljoin


def parse_index():
    elements = driver.find_elements(By.CSS_SELECTOR, '#index .item .name')
    for element in elements:
        href = element.get_attribute("href")
        yield urljoin(INDEX_URL, href)


def scrape_detail(url):
    scrape_page(url, condition=EC.visibility_of_element_located,
                locator=(By.TAG_NAME, 'h2'))


def parse_detail():
    url = driver.current_url
    name = driver.find_element(By.TAG_NAME, 'h2').text
    cover = driver.find_element(By.CSS_SELECTOR, '.cover').get_attribute('src')
    score = driver.find_element(By.CLASS_NAME, 'score').text
    drama = driver.find_element(By.CSS_SELECTOR, '.drama p').text
    return {
        'url': url,
        'name': name,
        'cover': cover,
        'score': score,
        'drama': drama
    }

def save_data(data):
    name = data.get('name')
    data_path = f'{RESULTS_DIR}/{name}.json'
    json.dump(data,open(data_path,'w',encoding='utf-8'),ensure_ascii=False,indent=2)

def main():
    for page in range(1, TOTAL_PAGE + 1):
        scrape_index(page)
        detail_urls = parse_index()
        for detail_url in list(detail_urls):
            scrape_detail(detail_url)
            detail_data = parse_detail()
            save_data(detail_data)
    driver.close()


if __name__ == '__main__':
    main()
