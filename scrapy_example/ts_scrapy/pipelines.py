# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
# 保存数据至指定的位置
import logging

LOGGER = logging.getLogger(__name__)

import pymysql


class MysqlPipeline():
    def __init__(self, host, database, user, password, port):
        self.host = host
        self.database = database
        self.user = user
        self.password = password
        self.port = port

    @classmethod
    def from_crawler(cls, crawler):
        return cls(host=crawler.settings.get('MYSQL_HOST'),
                   database=crawler.settings.get('MYSQL_DATABASE'),
                   user=crawler.settings.get('MYSQL_USER'),
                   password=crawler.settings.get('MYSQL_PASSWORD'),
                   port=crawler.settings.get('MYSQL_PORT'),
                   )

    def open_spider(self, spider):
        self.db = pymysql.connect(database="dy_nosese_cn", user="dy_nosese_cn", password="4x5PK6ST4aYeFbjz", host="123.60.105.39",port=3306)
        self.cursor = self.db.cursor()

    def close_spider(self, spider):
        self.db.close()

    def process_item(self, item, spider):
        sql = "insert into dy_nosese_cn.dyCode (nick,dycode,starch,give,works_count,des,follow,age,addres,number,ctime) values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        try:
            self.cursor.execute(sql, (item['nickname'], item['uid'], item['follower_count'], item['total_favorited'], item['aweme_count'],item["signature"], item['following_count'], item['user_age'], item['ip_location'], item['user_id'], item['ctime']))
            self.db.commit()
            logging.info('入库成功！')
        except:
            update_sql = "UPDATE dy_nosese_cn.dyCode SET nick=%s,dycode=%s,starch=%s,give=%s,works_count=%s,des=%s,follow=%s,age=%s,addres=%s,ctime=%s WHERE number=%s"
            self.cursor.execute(update_sql, (item['nickname'], item['uid'], item['follower_count'], item['total_favorited'], item['aweme_count'],item["signature"], item['following_count'], item['user_age'], item['ip_location'], item['ctime'],item['user_id'],))
            self.db.commit()
            logging.info('更新成功！')
        return item
