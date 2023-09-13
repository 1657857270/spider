import frida
import sys

# 连接手机设备
rdev = frida.get_remote_device()

# Hook手机上的那个APP（app的包名字）
# 注意事项：在运行这个代码之前，一定要先在手机上启动app
rdev = frida.get_remote_device()
pid = rdev.spawn(['com.che168.autotradercloud'])
rdev.resume(pid)
session = rdev.attach(pid)
# session = rdev.attach(26422)  # "车智赢+"

scr = """
Java.perform(function () {

    // 包.类
    var UserModel = Java.use("com.che168.autotradercloud.user.model.UserModel");


    // Hook，替换
    UserModel.loginByPassword.implementation = function(str,str2,str3,callback){
        console.log(str,str2,str3);
        
        // 执行原来的方法
        this.loginByPassword(str,str2,str3,callback);
    }
    
});
"""

script = session.create_script(scr)


def on_message(message, data):
    print(message, data)


script.on("message", on_message)

script.load()
sys.stdin.read()
