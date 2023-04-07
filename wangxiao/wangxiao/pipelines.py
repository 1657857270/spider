# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
from scrapy.pipelines.images import ImagesPipeline
from lxml import etree
from scrapy import Request
import os

class WangxiaoPipeline:
    def process_item(self, item, spider):
        # print("pipeline=>",item)
        content = item['content']
        text_analysis = item['text_analysis']
        p_list = item["p_list"]
        point_name = item["point_name"]

        paths = os.path.join(*p_list)
        if not os.path.exists(paths):
            os.makedirs(paths)
        full_md_file_path = os.path.join(paths,f"{point_name}.md")
        with open(full_md_file_path,mode="a",encoding="utf-8") as f:
            f.write(content)
            f.write("\n")
            f.write(text_analysis)
            f.write("\n")

            f.write("------")#md语法，可以生成一个长长的横线

            f.write("\n")
            print("一道题完毕")


        return item
class WangxiaoImagesPipeline(ImagesPipeline):
    def get_media_requests(self, item, info):#发送请求
        content = item['content']
        text_analysis = item['text_analysis']
        ct = etree.HTML(content)
        ta = etree.HTML(text_analysis)
        srcs = ct.xpath("//img/@src")
        srcs.extend(ta.xpath("//img/@src"))

        for src in srcs:
            yield Request(
                url=src,
                meta = {"p_list": item['p_list'], "point_name": item['point_name']}
            )



    def file_path(self, request, response=None, info=None, item=None):
        #获取图片的存储路径
        #接受目录结构，文件名称
        p_list = request.meta["p_list"]
        point_name = request.meta["point_name"]
        img_path = os.path.join(*p_list,f"{point_name}_img")
        img_name = request.url.split("/")[-1]
        return os.path.join(img_path,img_name)

    def item_completed(self, results, item, info):
        #item_completed是在所有图片
        for status, r in results:
            if status:
                img_url = r.get("url")
                img_path = r.get("path")
                img_my_path = os.path.join(*img_path.split("/")[-2:])

                item['content'] = item['content'].replace(img_url,img_my_path)
                item['text_analysis'] = item['text_analysis'].repalce(img_url,img_my_path)


        return item

