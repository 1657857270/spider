import os
import shutil
import time

from DrissionPage import ChromiumPage, ChromiumOptions

import ddddocr


# page = ChromiumPage()
# page.get("https://castatic.fengkongcloud.cn/pr/v1.0.4/demo.html")

class SlideCaptchaSolver:
    def __init__(self):
        self.page = ChromiumPage()




    @staticmethod
    def delete_img_forder():
        """删除文件夹"""
        folder_name = 'img'
        #获取当前工作目录
        curreent_driectory = os.getcwd()
        #构造删除的夹的完整路径
        forder_path = os.path.join(curreent_driectory,folder_name)
        try:
            shutil.rmtree(forder_path)
        except FileExistsError:
            pass
        except Exception as e:
            print(f"发生错误：{e}")

    @staticmethod
    def get_distance_by_ddddocr():
        det = ddddocr.DdddOcr(dataclasses=False,ocr=False,show_ad=False)
        with open('./img/target.png', 'rb') as f:
            target_bytes = f.read()
        with open('./img/background.png', 'rb') as f:
            background_bytes = f.read()
            res = det.slide_match(target_bytes,background_bytes)
            x_distance = res["target"][0]
            return x_distance


    def solve_captchal(self):
        self.delete_img_forder()
        self.page.get("https://castatic.fengkongcloud.cn/pr/v1.0.4/demo.html")
        self.page.ele("@text()=嵌入式(embed)").click()
        self.page.ele('@name=account').input("test")
        self.page.ele('@name=password').input("test")
        self.page.ele(('.shumei_captcha_loaded_img_bg')).save(path="./img/",name='background.pag')
        self.page.ele(('.shumei_captcha_loaded_img_fg')).save(path="./img/",name='target.pag')
        x_distance = self.get_distance_by_ddddocr()
        # 该网址缺口的计算得除2，因为下载的图片为600 × 300 px ，而在网页上的图片大小为300 × 150 px
        x_distance = x_distance / 2
        # 计算出的轨迹
        trajectory = self.get_tracks(x_distance)
        # 进行移动
        self.move_to_gap(slide_ele=".shumei_captcha_slide_btn_icon sm-iconfont", tracks=trajectory)
        time.sleep(0.2)
        # 对验证码页面进行截图。
        captcha1 = self.page.ele('#shumei_form_captcha_wrapper')
        if captcha1:
            captcha1.get_screenshot(path="./img/captcha1.png")