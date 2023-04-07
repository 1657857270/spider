
import sys

import json
import time

import redis
import requests
import random

import multiprocessing
import redis


pool = redis.ConnectionPool(host='123.60.105.39', port=6379, db=0, password='aSJap6D14A')
redis = redis.StrictRedis(connection_pool=pool)



class DouYinEncrypt:

    def __init__(self, url):
        self.timestamp = int(time.time())
        self.href = url
        self.href_hash = ""
        self.ua_hash = ""
        self.params_hash = ""
        self.x_bogus = ""
        self.fix_hash = 65599
        self.fix_bin = 8240
        self.fix_seq = 65521
        self.canvas_hash = random.randint(1000000000, 9999999999)

    @staticmethod
    def move_char_calc(nor):
        if 0 <= nor < 26:
            char_at = nor + 65
        elif 26 <= nor < 52:
            char_at = nor + 71
        elif nor == 62 or nor == 63:
            char_at = nor - 17
        else:
            char_at = nor - 4
        return chr(char_at)

    @staticmethod
    def unsigned_right_shift(signed, i=0):
        shift = signed % 0x100000000
        return shift >> i

    def sdb_hash(self, string=None, sdb_value=0):
        for index, char in enumerate(string):
            if string.startswith("_02B4Z6wo00"):
                sdb_value = self.unsigned_right_shift((sdb_value * self.fix_hash) + ord(char))
            elif string.startswith("{"):
                if index == 0 or index == 1:
                    sdb_value = self.unsigned_right_shift((sdb_value * self.fix_hash) ^ ord(char))
                else:
                    sdb_value = self.unsigned_right_shift((sdb_value * self.fix_hash) + ord(char))
            else:
                sdb_value = self.unsigned_right_shift((sdb_value ^ ord(char)) * self.fix_hash)
        return sdb_value

    def char_to_signature(self, sequence_num):
        offsets = [24, 18, 12, 6, 0]
        string = ""
        for offset in offsets:
            nor = sequence_num >> offset & 63
            string += self.move_char_calc(nor)
        return string

    def href_sequence(self):
        timestamp_hash = self.sdb_hash(str(self.timestamp))
        self.href_hash = self.sdb_hash(self.href, sdb_value=timestamp_hash)
        sequence = self.timestamp ^ (self.href_hash % self.fix_seq * self.fix_seq)
        sequence = self.unsigned_right_shift(sequence)
        str_bin_sequence = str(bin(sequence)).replace("0b", "")
        fix_zero = "0" * (32 - len(str_bin_sequence))
        binary = f"{bin(self.fix_bin)}{fix_zero}{str_bin_sequence}".replace("0b", "")
        sequence_number = int(binary, 2)
        return sequence_number

    def char_to_signature1(self, sequence):
        sequence_first = sequence >> 2
        signature_one = self.char_to_signature(sequence_first)
        return signature_one

    def char_to_signature2(self, sequence):
        sequence_second = (sequence << 28) ^ 515
        signature_two = self.char_to_signature(sequence_second)
        return signature_two

    def char_to_signature3(self, sequence):
        timestamp_sequence = sequence ^ self.canvas_hash
        sequence_three = -1073741824 ^ self.unsigned_right_shift(timestamp_sequence, i=6)
        signature_three = self.char_to_signature(sequence_three)
        return signature_three

    def char_to_signature4(self, sequence):
        timestamp_sequence = sequence ^ self.canvas_hash
        signature_four = self.move_char_calc(timestamp_sequence & 63)
        return signature_four

    def char_to_signature5(self, sequence, params, user_agent, body=None):
        if body:
            body_str = json.dumps(body).replace(" ", "")
            body_hash = self.sdb_hash(body_str)
            params = f"body_hash={body_hash}&{params}"
        sdb_sequence = self.sdb_hash(str(sequence))
        self.ua_hash = self.sdb_hash(user_agent, sdb_sequence)
        self.params_hash = self.sdb_hash(params, sdb_sequence)
        sequence_five = (((self.ua_hash % self.fix_seq) << 16) ^ (self.params_hash % self.fix_seq)) >> 2
        signature_five = self.char_to_signature(sequence_five)
        return signature_five

    def char_to_signature6(self, sequence):
        ua_remainder = self.ua_hash % self.fix_seq
        data_remainder = self.params_hash % self.fix_seq
        ua_data_number = ((int(ua_remainder) << 16) ^ int(data_remainder)) << 28
        sequence_six = ua_data_number ^ (self.unsigned_right_shift((262432 ^ sequence), 4))
        signature_six = self.char_to_signature(sequence_six)
        return signature_six

    def char_to_signature7(self):
        sequence_seven = self.href_hash % self.fix_seq
        signature_seven = self.char_to_signature(int(sequence_seven))
        return signature_seven

    def char_to_signature_hex(self, signature):
        sdb_signature = self.sdb_hash(signature)
        hex_signature = hex(sdb_signature).replace("0x", "")
        return hex_signature[-2:]

    def cookie_signature(self, ac_nonce, user_agent, prefix="_02B4Z6wo00f01"):
        sequence = self.href_sequence()
        sign1 = self.char_to_signature1(sequence)
        sign2 = self.char_to_signature2(sequence)
        sign3 = self.char_to_signature3(sequence)
        sign4 = self.char_to_signature4(sequence)
        sign5 = self.char_to_signature5(sequence, ac_nonce, user_agent)
        sign6 = self.char_to_signature6(sequence)
        sign7 = self.char_to_signature7()
        signature = f"{prefix}{sign1}{sign2}{sign3}{sign4}{sign5}{sign6}{sign7}"
        sign8 = self.char_to_signature_hex(signature)
        _signature = f"{signature}{sign8}"
        return _signature
from concurrent.futures import ThreadPoolExecutor
import time
is_stop = False

# readme
"""
1.单个接口获取ttwid成功率较低，频繁访问接口负载过大，会导致nonce或ttwid无法获取，经过调研nonce是头条系共用的。
2.因此采用算法(随机源获取__ac__nonce生成__ac__signature)和效验(用生成的__ac__signature请求抖音的页面(不是接口，因为接口需要加密参数)效验__ac__signature来获取headers中set-cookie里面的ttwid，分摊同一接口的获取和效验压力。
3.经过多轮测试发现，能够效验生成的__ac__signature的页面有check_list种所示，能够获取__ac__nonce的页面有public_list中所示。
4.实际上，抖音的用户主页和视频详情页，也可以效验，但是经过测试发现，视频详情页和用户主16个线程本地已经达到最大速度，目前为止未发现有限制访问频率封禁ip的情况。（考虑到线上的不确定因素，可以考虑更换ip生产）
6.如想让ttwid生产者的效率更高可以起多个进程，并更换ip。
7.影响成功率和时间的主要原因是host为https://toutiao.com的url，会偶尔出现443的情况，如果想让生产速度最大化可以考虑减少timeout的时间并过滤掉443的请求重新发起或者继续获取。
8.经测试，ttwid的生命周期和使用频率有关，使用频率低或者新的ttwid，生命周期在一周左右，使用频率高则ttwid的生命周期无法预测，需及时更换或者维护一个活性比较好的ttwid池。
"""
def asiyun_dali():
    proxy = {'http':'http://proxy:orderId=O21072616193919678168&sign=3014798228629a3c2ee159b7a0bd35c7&time=1627290066&pid=-1&cid=@proxy-service2.vpsnb.net:14223'}
    return proxy
# ua要写死 这里面不能随机
headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'zh-CN,zh;q=0.9',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36'
}

# 抖音，头条公共nonce 用于分摊获取nonce接口的压力
public_list = ['https://www.toutiao.com/', 'https://www.douyin.com/', 'https://www.douyin.com/hot',
               'https://www.douyin.com/discover',
               'https://www.toutiao.com/?channel=finance&source=tuwen_detail',
               'https://www.toutiao.com/?channel=tech&source=tuwen_detail',
               'https://www.toutiao.com/?channel=entertainment&source=tuwen_detail',
               'https://www.toutiao.com/?channel=sports&source=tuwen_detail',
               'https://www.toutiao.com/?channel=wenda&source=tuwen_detail',
               'https://www.toutiao.com/?channel=fashion&source=tuwen_detail',
               'https://www.toutiao.com/?channel=food&source=tuwen_detail',
               'https://www.toutiao.com/?channel=world&source=tuwen_detail',
               'https://www.toutiao.com/?channel=regimen&source=tuwen_detail',
               'https://www.toutiao.com/?channel=travel&source=tuwen_detail',
               'https://www.toutiao.com/?channel=military&source=tuwen_detail',
               'https://www.toutiao.com/?channel=gallery&source=tuwen_detail',
               'https://www.toutiao.com/?channel=baby&source=tuwen_detail',
               'https://www.toutiao.com/?channel=history&source=tuwen_detail',
               'https://www.toutiao.com/?channel=game&source=tuwen_detail',
               'https://www.toutiao.com/?channel=digital&source=tuwen_detail',
               'https://www.toutiao.com/?channel=finance&source=weitoutiao_detail',
               'https://www.toutiao.com/?channel=tech&source=weitoutiao_detail',
               'https://www.toutiao.com/?channel=entertainment&source=weitoutiao_detail',
               'https://www.toutiao.com/?channel=sports&source=weitoutiao_detail',
               'https://www.toutiao.com/?channel=wenda&source=weitoutiao_detail',
               'https://www.toutiao.com/?channel=fashion&source=weitoutiao_detail',
               'https://www.toutiao.com/?channel=food&source=weitoutiao_detail',
               'https://www.toutiao.com/?channel=world&source=weitoutiao_detail',
               'https://www.toutiao.com/?channel=regimen&source=weitoutiao_detail',
               'https://www.toutiao.com/?channel=travel&source=weitoutiao_detail',
               'https://www.toutiao.com/?channel=military&source=weitoutiao_detail',
               'https://www.toutiao.com/?channel=gallery&source=weitoutiao_detail',
               'https://www.toutiao.com/?channel=baby&source=weitoutiao_detail',
               'https://www.toutiao.com/?channel=history&source=weitoutiao_detail',
               'https://www.toutiao.com/?channel=game&source=weitoutiao_detail',
               'https://www.toutiao.com/?channel=digital&source=weitoutiao_detail',
               ]

# 用于分摊校验获取ttwid接口的压力
check_list = ['https://www.douyin.com/discover', 'https://www.douyin.com/channel/300201',
              'https://www.douyin.com/channel/300203', 'https://www.douyin.com/channel/300206',
              'https://www.douyin.com/channel/300205', 'https://www.douyin.com/channel/300204',
              'https://www.douyin.com/channel/300207', 'https://www.douyin.com/channel/300208',
              'https://www.douyin.com/channel/300209', 'https://www.douyin.com/vs',
              'https://www.douyin.com/discover', 'https://www.douyin.com/hot', 'https://www.douyin.com/',
              ]




# nonce 抖音，头条，西瓜公用
def get_nonce():
    url = random.choice(list(set(public_list)))
    res = requests.get(url, headers=headers, timeout=5,proxies=asiyun_dali())
    if res.status_code == 200:
        ac_nonce = str(res.headers['Set-Cookie'])
        ac_nonce = ac_nonce.split("=")[1].split(";")[0]
        return ac_nonce


# 通过douyin_encrypt的算法生成__ac__signature
def get_sign():
    ua = headers['user-agent']
    ac_nonce = get_nonce()

    if ac_nonce:
        url = random.choice(list(set(public_list)))
        sign = DouYinEncrypt(url)
        sign = sign.cookie_signature(ac_nonce=ac_nonce, user_agent=ua)
        return sign, ac_nonce





import datetime
def get_ttwid():
    key_name = 'dy_cookie'+'-'+str(datetime.date.today())
    for i in range(0,300):
    # while True:
        try:
            sign, ac_nonce = get_sign()
            url = random.choice(list(set(check_list)))
            headers = {
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'zh-CN,zh;q=0.9',
                'cache-control': 'no-cache',
                'cookie': f'__ac_nonce={ac_nonce}; __ac_signature={sign}; __ac_referer=__ac_blank',
                'pragma': 'no-cache',
                'referer': 'https://www.douyin.com/',
                'upgrade-insecure-requests': '1',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36'
            }
            res = requests.get(url, headers=headers, timeout=5, proxies=asiyun_dali())

            if res.status_code == 200:
                if res.headers['Set-Cookie'].split(';')[0].split('=')[0] == 'ttwid':
                    print(res.headers['Set-Cookie'].split(';')[0] + ';' + '__ac_nonce=' + ac_nonce + ';' + '__ac_signature=' + sign)
                    redis.sadd('dy_cookie_new',res.headers['Set-Cookie'].split(';')[0] + ';' + '__ac_nonce=' + ac_nonce + ';' + '__ac_signature=' + sign)
                else:
                    print('ttwid get failed!')
            else:
                print('status is not 200')
        except:continue





def main():
    redis.delete('dy_cookie_new')
    # pool = multiprocessing.Pool(processes=16)
    # for _ in range(1,16):
    #     pool.apply_async(get_ttwid)
    # pool.close()
    # pool.join()
    get_ttwid()

if __name__ == '__main__':
    main()

