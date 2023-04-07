import json

import scrapy
from scrapy.linkextractors import LinkExtractor
from wangxiao.items import QuestionItem


class KaoshiSpider(scrapy.Spider):
    name = 'kaoshi'
    allowed_domains = ['wangxiao.cn']
    start_urls = ['http://ks.wangxiao.cn/']

    def parse(self, resp, **kwargs):
        le = LinkExtractor(restrict_xpaths="//ul[@class='first-title']/li/div/a[3]")
        a_list = le.extract_links(resp)
        for a in a_list:
            first_title = a.text
            exampoint_url = a.url.replace("TestPaper", "exampoint")

            yield scrapy.Request(
                url=exampoint_url,
                callback=self.parse_second_level,
                meta={"first_title": first_title}
            )
            break


    def parse_second_level(self, resp):
        first_title = resp.meta['first_title']
        le = LinkExtractor(restrict_xpaths="//div[@class='filter-content']/div[2]/a")
        a_list = le.extract_links(resp)
        for a in a_list:
            # print(a.text,a.url)
            second_title = a.text
            yield scrapy.Request(
                url=a.url,
                callback=self.parse_third_level,
                meta={"first_title": first_title, "second_title": second_title}
            )


    # """chapter-item
    #         section-item
    #             .....
    #                 section-point-item
    #         树形结构
    #         用栈或队列或者递归
    # """

    def parse_third_level(self, resp):
        # print(resp.url)
        # print(resp.text)
        first_title = resp.meta['first_title']
        second_title = resp.meta['second_title']
        points = resp.xpath("//ul[@class='section-point-item']")#!!!!!!页面有些直接在chapter-item
        for point in points:
            parents = point.xpath(
                "./ancestor-or-self::ul[@class='chapter-item' or @class='section-item']")  # 找到当前节点的父级节点，到::后结束
            # point.xpath("./*/div")#找他儿子
            p_list = [first_title, second_title]
            for p in parents:
                fu_name = "".join(p.xpath("./li[1]/text()").extract()).strip().replace(" ", "")
                p_list.append(fu_name)

            # 当前节点本身＋父级目录结构
            # 一级建造师
            # 工程师建设
            # Z103000建设工程估价
            #     Z103050工程量清单编制
            #         1Z103052工程量清单编制的方法
            #           经济XXX.md

            point_name = "".join(p.xpath("./li[1]/text()").extract()).strip().replace(" ", "")
            # print(p_list, point_name)
            # 提取下个页面需要的参数
            point_count = point.xpath("./li[2]/text()").extract_first().split("/")[1]
            sign = point.xpath("./li[3]/span/@data_sign").extract_first()
            subsign = point.xpath("./li[3]/span/@data_subsign").extract_first()
            url = "https://ks.wangxiao.cn/practice/listQuestions"
            data = {
                "examPointType": "",
                "practiceType": "2",
                "questionType": "",
                "sign": sign,
                "subsign": subsign,
                "top": point_count,
                "Host": "ks.wangxiao.cn",
                "Origin": "https://ks.wangxiao.cn"

            }

            yield scrapy.Request(
                url=url,
                method="POST",
                body=json.dumps(data),
                headers={
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/json; charset=UTF-8"
                },
                callback=self.parse_point,
                meta={"p_list": p_list, "point_name": point_name}

            )
            break

    def parse_point(self, resp):
        p_list = resp.meta["p_list"]
        point_name = resp.meta["point_name"]

        all_data = resp.json()
        data = all_data.get("Data")
        all_questions = []
        # 循环data
        for ds in data:
            # 两种情况
            questions = ds.get("questions")
            # 字典[key] key为空会报错，字典.get(key)key为空返回none

            if questions:
                # 把所有题放在一个列表里。后面统一处理
                all_questions.extend(questions)  # 迭代新增
            else:  # 材料题
                materials = ds.get("materials")
                for m in materials:
                    qs = m.get("questions")
                    all_questions.extend(qs)
        for q in questions:
            content = q.get("content")
            text_analysis = q.get("textAnalysis")

            opts = q.get("options")

            options = []  # 每一个选项
            right_options = []  # 正确选项
            for opt in opts:
                name = opt.get("name")
                content = opt.get("content")
                xuanxiang = f"{name}.{content}"
                options.append(xuanxiang)
                is_rignt = opt.get("isRignt")
                if is_rignt:
                    right_options.append(name)
            content += f"""
                <p>
                    {"<br/>".join(options)}
                </p>
            """.replace(" ", "").replace("/n", "")
            text_analysis = f"""                <p>
                    {",".json(options)}
                </p>
                """.replace(" ", "").replace("/n", "") + text_analysis

            item = QuestionItem()
            item['text_analysis'] = text_analysis.replace("<p>","\n").replace("</p>","\n").replace("<br/>","\n").replace("<br />","\n")
            item['content'] = content.replace("<p>","\n").replace("</p>","\n").replace("<br/>","\n").replace("<br />","\n") 
            item['p_list'] = p_list
            item['point_name'] = point_name
            yield item
