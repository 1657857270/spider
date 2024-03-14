import requests


headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "none",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36 Edg/117.0.2045.60",
    "sec-ch-ua": "\"Microsoft Edge\";v=\"117\", \"Not;A=Brand\";v=\"8\", \"Chromium\";v=\"117\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
cookies = {
    "acw_tc": "0bca293a16970037880105080e3d510ed42f8af7a4f63315d67765e18a0b53",
    "PHPSESSID": "38744df456c4b84cf2273630f531a48e",
    "uniqid": "6526390c05c39",
    "from_data": "YTo4OntzOjQ6Imhvc3QiO3M6MTE6ImNuLmJpbmcuY29tIjtzOjM6InNlbSI7YjowO3M6MTA6InNvdXJjZWZyb20iO2k6MDtzOjQ6IndvcmQiO047czozOiJraWQiO2k6MDtzOjg6InNlbV90eXBlIjtpOjA7czo0OiJmcm9tIjtpOjA7czo2OiJjcmVhdGUiO3M6MTk6IjIwMjMtMTAtMTEgMTM6NTY6MjgiO30%3D",
    "channel_info_reg": "Y24uYmluZy5jb20%3D",
    "channel_info": "Y24uYmluZy5jb20%3D",
    "act_layer_1": "B",
    "act_layer_2": "A",
    "act_layer_3": "B",
    "act_layer_4": "A",
    "act_layer_5": "A",
    "act_layer_6": "B",
    "act_layer_7": "B",
    "act_layer_9": "B",
    "act_layer_10": "A",
    "act_layer_11": "C",
    "slotMachine1083": "1",
    "user_uniqid": "B986FCBA2EA9F57A",
    "s_token": "af9cda1f8d6d64543a9bfe936e1ff8bf",
    "FIRSTVISITED": "1697003792.271",
    "Hm_lvt_e37e21a48e66c7bbb5d74ea6f717a49c": "1697003792",
    "Hm_lpvt_e37e21a48e66c7bbb5d74ea6f717a49c": "1697003792",
    "Hm_lvt_ddcd8445645e86f06e172516cac60b6a": "1697003792",
    "Hm_lvt_1154154465e0978ab181e2fd9a9b9057": "1697003792",
    "index-collectHInt": "1",
    "login_view": "1",
    "enterDetailDown": "0",
    "redirect": "https%3A%2F%2F699pic.com%2Fphoto%2F",
    "visited_times": "5",
    "referer_page": "channel:index",
    "Hm_lpvt_ddcd8445645e86f06e172516cac60b6a": "1697004094",
    "Hm_lpvt_1154154465e0978ab181e2fd9a9b9057": "1697004094",
    "loginboxClose": "4"
}
url = "https://699pic.com/photo/"
response = requests.get(url, headers=headers)

print(response.text)
print(response)