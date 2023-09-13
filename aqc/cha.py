import pymysql


# 链接数据库
def get_conn():
    conn = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        password='root',
        database='iqc'
    )
    return conn


def search_sql():
    conn = get_conn()
    id_list = []
    cursor = conn.cursor()
    sql = """
        SELECT Company FROM `company_information`
    """
    cursor.execute(sql)
    result = cursor.fetchall()
    for i in result:
        for j in i:
            id_list.append(j)
    cursor.close()
    return id_list


def insert_sql(data):
    conn = get_conn()
    cursor = conn.cursor()
    try:
        sql = f"""insert into company_info(company,company_id,trademark_count,tender_count,rjzzq_count,zl_count) values ('{data['company']}','{data['company_id']}','{data['trademark_count']}','{data['tender_count']}','{data['rjzzq_count']}','{data['zl_count']}')"""
        # print(sql)
        cursor.execute(sql)
        conn.commit()  # 提交

    except:
        conn.rollback()
        # print('插入失败')
        sql = f"update company_info set trademark_count = '{data['trademark_count']}',tender_count = '{data['tender_count']}',rjzzq_count = '{data['rjzzq_count']}',zl_count = '{data['zl_count']}'where company_id = '{data['company_id']}'"
        cursor.execute(sql)
        print('更新成功')
        conn.commit()
    finally:
        conn.close()


def write_patent_data(patent_data):
    conn = get_conn()
    try:
        cursor = conn.cursor()
        sql = f"""insert into patent_info(company,company_id,patent_num,patent_name,pub_num,patent_type,pub_time) values ('{patent_data['company']}','{patent_data['company_id']}','{patent_data['patent_num']}','{patent_data['patent_name']}','{patent_data['pub_num']}','{patent_data['patent_type']}','{patent_data['pub_time']}')"""
        # print(sql)
        cursor.execute(sql)
        print("保存成功")
        conn.commit()  # 提交
    except:
        conn.rollback()
    finally:
        conn.close()
