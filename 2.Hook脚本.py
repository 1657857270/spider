import frida
import sys

# 连接手机设备
rdev = frida.get_remote_device()
# pid = rdev.spawn(['com.che168.autotradercloud'])
# rdev.resum(pid)
# session = rdev.attach(pid)
# Hook手机上的那个APP（app的包名字）
# 注意事项：在运行这个代码之前，一定要先在手机上启动app
session = rdev.attach("车智赢+")  # 车智赢+

scr = """
Java.perform(function () {

    // 包.类
    //hook谁导入谁
    var AHAPIHelper = Java.use("com.autohome.ahkit.AHAPIHelper");


    // Hook，替换
    AHAPIHelper.appendPublicParam.implementation = function(context,map){
        console.log(123);
        
        // 执行原来的方法
        this.appendPublicParam(context,map);
        
        console.log(666);

    }
    
});
"""

script = session.create_script(scr)


def on_message(message, data):
    print(message, data)

#回调函数
script.on("message", on_message)
#加载
script.load()
#等待
sys.stdin.read()
