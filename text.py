import requests
url = "https://api.bilibili.com/x/relation/followers?vmid=11253297&pn=2&ps=20&order=desc&jsonp=jsonp&callback=__jp2"
header = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.54",
        "cookie": "buvid3=157D8302-7D73-E759-DC18-1F46E69AD2FF37518infoc; b_nut=1671329337; i-wanna-go-back=-1; _uuid=DD4BD814-B789-E279-67A5-F3F52C37314C38389infoc; buvid4=0BD2B1E3-7B12-B37B-7973-1EA3CED11C8639673-022121810-hXMXXkDLv4CuO0WGSdLAWw%3D%3D; nostalgia_conf=-1; rpdid=|(J|)kYJl~|m0J'uY~uJJY)lJ; b_ut=5; buvid_fp_plain=undefined; CURRENT_BLACKGAP=0; header_theme_version=CLOSE; LIVE_BUVID=AUTO5616772052739074; CURRENT_FNVAL=4048; hit-dyn-v2=1; hit-new-style-dyn=1; CURRENT_QUALITY=112; DedeUserID=259806362; DedeUserID__ckMd5=41aae8df9dcb943d; CURRENT_PID=3b3b0520-cd43-11ed-ad55-8fa84d6ff036; home_feed_column=5; fingerprint=b83da15a0bc97cd2ec0e4f438c807cd8; buvid_fp=b83da15a0bc97cd2ec0e4f438c807cd8; SESSDATA=6628d7ef%2C1696229168%2C32a28%2A42; bili_jct=80eb2b63150c679bff50f8d783ddc2ec; sid=60iig8i3; bp_video_offset_259806362=781072504891375700; PVID=2; b_lsid=8557A419_18751BE9373; bsource=search_bing; innersign=1",
        "referer": "https://space.bilibili.com/11253297/fans/fans"
}

res = requests.get(url=url,headers=header)
print(res.text)