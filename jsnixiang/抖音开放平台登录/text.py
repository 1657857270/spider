import execjs

f=open("text.js",mode="r",encoding='utf-8')
js = execjs.compile(f.read())

ret = js.call('E','1657857270@qq.com')
print(ret)