import time
import ddddocr
from selenium.webdriver.common.action_chains import ActionChains
import re
import requests
from selenium.webdriver.common.by import By
from selenium import webdriver
import string, random
from loguru import logger


import math
def download_img(url):
    if url[-4:] == 'jpeg':
        resp = requests.get(url)
        with open('background.jpeg', 'wb') as f:

            f.write(resp.content)

    else:
        resp = requests.get(url)
        with open('target.png', 'wb') as f:
            f.write(resp.content)


def simulate_human_track(distance):
    # 随机生成滑动轨迹
    track = []
    current = 0
    mid = distance * 3 / 5
    t = 0
    v = 80
    while current < distance:
        if current < mid:
            a = 2
        else:
            a = -3

        v0 = v
        v = v0 + a * t
        move = v0 * t + 1 / 2 * a * t * t
        current += move
        track.append(round(move))
    # 修正轨迹
    offset = sum(track) - distance
    if offset != 0:
        index = random.randint(0, len(track) - 1)
        track[index] -= offset
    return track

def get_offset():
    det = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)

    with open('target.png', 'rb') as f:
        target_bytes = f.read()

    with open('background.jpeg', 'rb') as f:
        background_bytes = f.read()

    res = det.slide_match(target_bytes, background_bytes, simple_target=True)
    return res.get('target')[0]

def generate_email():
    letters = string.ascii_lowercase

    result = ''.join(random.choice(letters) for i in range(7))
    email = result + '@mailto.plus'
    logger.info(f'邮箱: {email}')
    return email


def get_mail(email):
    headers = {
        "authority": "tempmail.plus",
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "referer": "https://tempmail.plus/zh/",
        "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest"
    }
    cookies = {
        "email": email
    }
    url = "https://tempmail.plus/api/mails"
    params = {
        "email": email,
        "first_id": "0",
        "epin": ""
    }

    response = requests.get(url, headers=headers, cookies=cookies, params=params).json()
    first_id = response['first_id']
    if first_id == 0:
        pass
    else:
        logger.info(f'请求ID:{first_id}')
        return first_id



def get_code(email,id):
    headers = {
        "authority": "tempmail.plus",
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "referer": "https://tempmail.plus/zh/",
        "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest"
    }
    cookies = {
        "email": email
    }
    url = f"https://tempmail.plus/api/mails/{id}"
    params = {
        "email": email,
        "epin": ""
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)

    auth_code = re.findall(r'验证码(.*?)。',response.text)[0]
    logger.success(f'验证码:{auth_code}')
    return auth_code


def login():
    option = webdriver.ChromeOptions()

    option.add_argument("disable-blink-features=AutomationControlled")

    option.add_argument(
        'user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36')
    # 开无痕模式
    option.add_argument("--incognito")


    browser = webdriver.Chrome(options=option,executable_path='./venv/bin/chromedriver')

    browser.implicitly_wait(5)
    browser.get('https://developer.open-douyin.com/')
    browser.find_element(By.XPATH, '//*[@id="btn-login"]/span/span[1]').click()
    browser.implicitly_wait(5)

    browser.find_element(By.XPATH, '//*[@id="semi-dy-open-modal-body"]/div/span[2]').click()
    browser.implicitly_wait(5)

    email = generate_email()

    browser.find_element(By.XPATH, '//*[@id="email"]').send_keys(email)
    time.sleep(1)
    browser.find_element(By.XPATH, '//*[@id="semi-dy-open-modal-body"]/form/div[2]/div/div[1]/div').click()
    time.sleep(1)


    while True:
        background = browser.find_element(By.XPATH, '//*[@id="captcha-verify-image"]').get_attribute('src')
        target = browser.find_element(By.XPATH, '//*[@id="captcha_container"]/div/div[2]/img[2]').get_attribute('src')

        download_img(background)
        download_img(target)
        time.sleep(1)
        offset = get_offset() * 340 / 550
        tracks = simulate_human_track(offset)
        logger.info(f'滑动轨迹：{tracks}')

        # 开始滑动验证
        slider_element = browser.find_element(By.XPATH,'//*[@id="secsdk-captcha-drag-wrapper"]/div[2]')
        ActionChains(browser).click_and_hold(slider_element).perform()

        for x in tracks:
            ActionChains(browser).move_by_offset(xoffset=x, yoffset=0).perform()

        ActionChains(browser).release().perform()

        try:
            browser.find_element(By.XPATH, '//*[@id="captcha_container"]/div/div[2]')
            time.sleep(5)
            continue
        except:
            break

    first_id = get_mail(email)
    time.sleep(10)
    code = get_code(first_id)
    browser.find_element(By.XPATH,'//*[@id="code"]').send_keys(code)
    browser.find_element(By.XPATH,'//*[@id="password"]').send_keys(code)
    browser.find_element(By.XPATH,'//*[@id="passwordConfirm"]').send_keys(code)

    browser.find_element(By.XPATH,'//*[@id="approve"]/span[1]/span').click()
    browser.find_element(By.XPATH,'//*[@id="semi-dy-open-modal-body"]/form/button').click()
    time.sleep(30)

login()