# def oute(logo):
#     def inner(msg):
#         print(f'{logo}>{msg}>{logo}')
#     return inner
#
# f1=oute("111")
# f1("222")
# f1("333")

def accout_create(initial_amount=0):
    def atm(num,deposit=True):
        nonlocal initial_amount
        if deposit:
            initial_amount += num
            print(f"存款：+{num},账户余额：{initial_amount}")
        else:
            initial_amount-=num
            print(f"取款：-{num},账户余额：{initial_amount}")
    return atm
atm = accout_create()

atm(100)
atm(200)
atm(100,deposit=False)

