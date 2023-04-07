import requests


headers = {
    "authority": "www.pixiv.net",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "referer": "https://www.google.com/",
    "sec-ch-ua": "^\\^Not?A_Brand^^;v=^\\^8^^, ^\\^Chromium^^;v=^\\^108^^, ^\\^Google",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
}
cookies = {
    "first_visit_datetime_pc": "2023-01-27+16^%^3A47^%^3A39",
    "p_ab_id": "9",
    "p_ab_id_2": "9",
    "p_ab_d_id": "639079968",
    "yuid_b": "N3RmZFg",
    "_gcl_au": "1.1.1474620530.1674805662",
    "_fbp": "fb.1.1674805662441.1662889287",
    "privacy_policy_agreement": "5",
    "_ga_MZ1NL4PHH0": "GS1.1.1674808317.1.1.1674808732.0.0.0",
    "c_type": "22",
    "privacy_policy_notification": "0",
    "a_type": "0",
    "b_type": "1",
    "adr_id": "aTBoFx080oCCb6BiDDbaMWcUCXoloHJ4UW0ifHkDTm4QNj45",
    "login_ever": "yes",
    "__utmv": "235335808.^|2=login^%^20ever=yes=1^^3=plan=normal=1^^5=gender=male=1^^6=user_id=86743757=1^^9=p_ab_id=9=1^^10=p_ab_id_2=9=1^^11=lang=zh=1",
    "pt_60er4xix": "uid=7y6DP/w-VyBVdqXa7NID1g&nid=0&vid=cGEmpVCeR8raDafO6PdE9Q&vn=2&pvn=2&sact=1676984854686&to_flag=0&pl=IZoRf4OCSv6aouL5bhDEAg*pt*1676984840230",
    "tag_view_ranking": "_EOd7bsGyl~ziiAzr_h04~9Gbahmahac~5oPIfUbtd6~TqiZfKmSCg~Y1xsKC1Dhb~Lt-oEicbBr~b_rY80S-DW~bfM8xJ-4gy~azESOjmQSV~Ie2c51_4Sp~gpglyfLkWs~CkDjyRo6Vc~MnGbHeuS94~tgP8r-gOe_~YXsA4N8tVW~uW5495Nhg-~xQBQg7AwXl~aPdvNeJ_XM~RTJMXD26Ak~0Sds1vVNKR~KOnmT1ndWG~gCB7z_XWkp~CiSfl_AE0h~iAHff6Sx6z~faHcYIP1U0~pzZvureUki~pzzjRSV6ZO~CrFcrMFJzz~4gzX-RNalt~IhC8AmH1Ti~3wP3hyIuuu~pSe9Wk4VM-~eOID0W1FsP~zyKU3Q5L4C~HffPWSkEm-~JBAoiHMCc1~txZ9z5ByU7~r01unnQL0a~yREQ8PVGHN~hQnmcwWnXH~cuLB4S02iF~FE9s9RlCMY~EhqvooMrEX~lYhLUjLqAd~FPCeANM2Bm~3W4zqr4Xlx~DuCdp8i1kQ~Oa9b6mEc1T~tWcphaHR4J~bU7wQqTdzI~HBYFbIUAS8~Lgzqaw4BWc~OCvRKdT9WZ~gB7nxsLSGV~EUwzYuPRbU~juMG_eV2xF~QniSV1XRdS~bqRR7rH23v~otWaj1bQDp~EWR7JDW6jH~d8fHMcEG3R~XDEWeW9f9i~e2yEFDVXjZ~WbBWp_OUQ1~grDd-1P4dB~X4sPgKUWBs~spPqEvHEF2~RzYpMGbEl9~0sVgHoAwbd~gqKsadmiG0~kidJbMRqnU~8TfoJcOl_U~qIDsnltE2o~XDmxjXfV8p~qmix1djJUJ~frj7JFPUbI~v3nOtgG77A~BC84tpS1K_~eYfNGKUJaM~mSqaVc-t5U~rOnsP2Q5UN~KN7uxuR89w~pnCQRVigpy~vzTU7cI86f~tAZXG3M0z-~7fCik7KLYi~o_xZzp6HMB~kOe05XkXBp~HY55MqmzzQ~g5QWNKvqWG~GNcgbuT3T-~VJOg86zi9x~XpQ4ZH7dmM~cPA_1hGrte~-StjcwdYwv~EEUtbD_K_n~alQb7gJxOf~QLciZmmNOw~bRA1dBP_6A",
    "PHPSESSID": "63o69786fpsasonjt7m58c8a968jumef",
    "__utma": "235335808.1447086133.1674805662.1676982015.1680859022.5",
    "__utmc": "235335808",
    "__utmz": "235335808.1680859022.5.5.utmcsr=google^|utmccn=(organic)^|utmcmd=organic^|utmctr=(not^%^20provided)",
    "_ga": "GA1.1.1447086133.1674805662",
    "_ga_75BBYNYN9J": "GS1.1.1680859023.6.0.1680859023.0.0.0",
    "__utmt": "1",
    "__utmb": "235335808.1.10.1680859022",
    "__cf_bm": "liMG18lzdvxdd5NuGfxKJ6PQig.3ShJJyNXpSVuNUQ8-1680859023-0-AZaq4GcxxDW5e/gGG++TkIcaQwpKWXb8eAKfsbT/8ps1lhDGI4pzpQz12/LMMJPISqN2ApnpSoRFv2CDT3Fesodl9lSV3igR6TFWcO8cl8uPC7Enza6/Nkl2E3wn3DFP8azwGuXnFWh+xTUS8zq8CBQOo6odEHNWzYz1AZ95m8HsATtgrWi7q6xNqeXnNhT27w==",
    "_im_vid": "01GXDG2MQ7WNJBJ3DVPX5K3F0X",
    "cto_bundle": "yv5e-V93RnpVMTU1Y1RHOVpRMDAxbmRKcXE2QTR5ak1FQ3VyWFV2MDlaSDRRMXc0WGZSZ2RCQUdlNnc3cmh1bjZnJTJGM2RTJTJGMTFjcGh0Nm5zWlhWZWFaTG5nWUlpODdMbnMwOEZzOWE3WkR0WmhabDZUd0RRdm1DUmdNemZ5JTJGd3JpdWwybnZhUkE0aXZKTnpEVGg4VzJuZHU2UkElM0QlM0Q"
}
url = "https://www.pixiv.net/users/33558705"
response = requests.get(url, headers=headers, cookies=cookies)

print(response.text)
print(response)
