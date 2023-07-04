def E(e):
    n = []
    if e is None:
        return ""
     
    def t(e):
        r = []
        for o in range(len(str(e))):
            t = ord(str(e)[o])
            if 0 <= t <= 127:
                r.append(t)
            elif 128 <= t <= 2047:
                r.append(192 | (31 & t >> 6))
                r.append(128 | (63 & t))
            elif (2048 <= t <= 55295) or (57344 <= t <= 65535):
                r.append(224 | (15 & t >> 12))
                r.append(128 | (63 & t >> 6))
                r.append(128 | (63 & t))
        for i in range(len(r)):
            r[i] &= 255
        return r
    t = t(e)
    for r in range(len(t)):
        n.append(hex(5 ^ t[r])[2:])
    print(''.join(n))
    
if __name__ == '__main__':
    E('1657857270@qq.com')
