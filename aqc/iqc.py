from cha import search_sql, insert_sql, write_patent_data
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import Options
from tujian import base64_api
import math
import time
import random
import requests


def get_distance():
    """
    图片旋转识别
    :return:
    """
    result = int(base64_api(uname='167857270', pwd='A15534217839', img="img.png", typeid=29))
    print(result)
    if result > 0:
        distance = abs(235 * result / 360)
        return distance
    elif result < 0:
        distance = abs(235 * (360 + result) / 360)
        return distance


def get_tracks(distance):
    """
    生成移动轨迹
    :return:
    """
    v = 0
    t = 0.3
    tracks = []
    current = 0
    mid = distance * 6 / 7
    while current < distance:
        if current < mid:
            a = 2
        else:
            a = -3
        v0 = v
        s = v0 * t + 0.5 * a * (t ** 2)
        current += 5
        tracks.append(round(s))
        v = v0 + a * t
        return tracks


def search(company_id):
    """
    根据税号进入到详情页获取数据及保存
    :return:
    """

    web.get(f'https://twitter.com/s1ckb017/media')
    web.implicitly_wait(10)
    time.sleep(random.uniform(2, 4))
    if web.title == '百度安全验证':  # 判断是否为验证码
        image_src = web.find_element(By.XPATH, '//*[@class="vcode-spin-faceboder"]/img')
        image = image_src.get_attribute("src")
        resp = requests.get(image)
        with open('img.png', 'wb') as f:
            f.write(resp.content)
        distance = get_distance()
        print('移动距离:', distance)
        partHead = math.ceil(distance * 0.9)
        partTail = distance - partHead
        slider_element = web.find_element(By.XPATH, '//*[@class="vcode-spin-button"]/p')
        ActionChains(web).click_and_hold(on_element=slider_element).perform()
        ActionChains(web).move_by_offset(xoffset=partHead, yoffset=0).perform()
        tracks = get_tracks(partTail)
        for s in tracks:
            ActionChains(web).move_by_offset(xoffset=s, yoffset=0).perform()
            time.sleep(0.3)
        ActionChains(web).release().perform()
        time.sleep(random.uniform(3, 5))
    web.find_element(By.XPATH, '//*[@class="title"]/a').click()  # 进入到详情页
    time.sleep(1)
    web.switch_to.window(web.window_handles[-1])
    web.find_element(By.XPATH, '//*[@id="tab-wrapper"]/div[1]/a[3]').click()
    time.sleep(1)
    # 获取数据
    company = web.find_element(By.XPATH, '//div[@class="header-top"]//h1').text
    try:
        tender_count = web.find_element(By.XPATH,
                                        '//div[@class="item"][2]//span[2]').text
    except:
        tender_count = 0
    try:
        trademark_count = web.find_element(By.XPATH,
                                           '//div[@id="certRecord-mark"]//span[@class="aqc-detail-title-number"]').text
    except:
        trademark_count = 0
    try:
        rjzzq_count = web.find_element(By.XPATH,
                                       '//div[@id="certRecord-copyright"]//span[@class="aqc-detail-title-number"]').text
    except:
        rjzzq_count = 0

    try:
        zl_count = web.find_element(By.XPATH,
                                    '//div[@id="certRecord-patent"]//span[@class="aqc-detail-title-number"]').text
    except:
        zl_count = 0

    data = {
        'company': company,
        'company_id': company_id,
        'trademark_count': trademark_count,
        'tender_count': tender_count,
        'rjzzq_count': rjzzq_count,
        'zl_count': zl_count
    }
    insert_sql(data)

    # 专利解析入库
    try:
        patent_info = web.find_elements(By.XPATH, '//table[@class="aqc-detail-table certRecord-patent-table"]/tbody/tr')
        for info in patent_info:  # 获取专利信息
            patent_num = info.find_element(By.XPATH, './td[1]').text
            patent_name = info.find_element(By.XPATH, './td[2]').text
            pub_num = info.find_element(By.XPATH, './td[3]').text
            patent_type = info.find_element(By.XPATH, './td[4]').text
            pub_time = info.find_element(By.XPATH, './td[5]').text
            patent_data = {
                'company': company,
                'company_id': company_id,
                'patent_num': patent_num,
                'patent_name': patent_name,
                'pub_num': pub_num,
                'patent_type': patent_type,
                'pub_time': pub_time
            }
            write_patent_data(patent_data)
    except:
        print(F'{company}无专利信息')
    time.sleep(1)
    web.close()
    web.switch_to.window(web.window_handles[0])


if __name__ == '__main__':
    # id_list = search_sql()
    # company_id = '92360821MA38JQGL8F'
    # search(company_id)
    option = Options()
    # option.add_argument('--disable-blink-features=AutomationControlled')
    web = Chrome(options=option)
    search(25515645)
    # for company_id in id_list:
    #     search(company_id)
