import os
import openpyxl
workbook = openpyxl.load_workbook('firm.xlsx')
sheet = workbook['Sheet1']  # 获取指定sheet表
cell = sheet['A2:A3']
for i in cell:
    for j in i:
        print(j.value)