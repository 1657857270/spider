# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html
import pymysql
import pymongo
# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
from caipiao.settings import MYSQL_CONFIG as mysql
from caipiao.settings import MONGO_CONFIG as mongo


class CaipiaoPipeline:
    def open_spider(self, spider):
        self.f = open("./双色球.csv", mode="a", encoding="utf-8")

    def close_spider(self, spider):
        if self.f:
            self.f.close()

    def process_item(self, item, spider):
        self.f.write(f"{item['qihao']},{'_'.join(item['red_ball'])},{item['blue_ball']}")
        return item


class CaipiaoMySQLPipeline:
    def open_spider(self, spider):
        self.conn = pymysql.connect(host=mysql["host"], port=mysql["port"], user=mysql["user"],
                                    password=mysql["password"], database=mysql["database"])

    def close_spider(self, spider):
        self.conn.close()

    def process_item(self, item, spider):

        try:
            cursor = self.conn.cursor()
            sql = "insert into caipiao(qihao, red, blue) values(%s, %s, %s)"
            red = ",".join(item['red_ball'])
            blue = "".join(item['blue_ball'])
            print(blue)
            cursor.execute(sql, (item['qihao'], red, blue))
            self.conn.commit()
            spider.logger.info(f"保存数据{item}")
        except Exception as e:
            self.conn.rollback()
            spider.logger.error(f"保存数据库失败!", e, f"数据是: {item}")  # 记录错误日志
        return item


class CaipiaoMongoPipeline:
    def open_spider(self, spider):
        clint = pymongo.MongoClient(host=mongo['host'], port=mongo['port'])
        db = clint['python']
        self.client = clint
        self.collection = db['caipiao']

    def close_spider(self, spider):
        self.client.close()

    def process_item(self, item, spider):
        self.collection.insert_one({"qihao": item['qihao'], 'red': item["red_ball"], 'blue': item['blue_ball']})
        return item
