import re
import requests
from fontTools.ttLib import TTFont
import io
url = 'https://www.qidian.com/rank/yuepiao/'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 '
                  'Safari/537.36 Edg/114.0.1823.43',
    'Host': 'www.qidian.com'
}
res = requests.get(url, headers=headers)
font_url = re.findall(r"\); src: url\('(.*?)'\) format\('woff'\)", res.text)[0]
print(font_url)
res_front = requests.get(font_url)

font = TTFont(io.BytesIO(res_front.content))
print(font)
#编码对应关系
font_cmp = font.getBestCmap()
print(font_cmp)