/*
 Navicat Premium Data Transfer

 Source Server         : xiao
 Source Server Type    : MySQL
 Source Server Version : 80013
 Source Host           : localhost:3306
 Source Schema         : iqc

 Target Server Type    : MySQL
 Target Server Version : 80013
 File Encoding         : 65001

 Date: 14/06/2023 08:49:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for company_info
-- ----------------------------
DROP TABLE IF EXISTS `company_info`;
CREATE TABLE `company_info`  (
  `company` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `company_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `trademark_count` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '商标数量',
  `tender_count` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `rjzzq_count` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `zl_count` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `create_time` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `updata_time` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`company_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of company_info
-- ----------------------------
INSERT INTO `company_info` VALUES ('北京百度网讯科技有限公司', '91110000802100433B', '1205', '696', '734', '5000+', '2023-06-13 21:14:51.760036', '2023-06-13 21:14:51.760036');
INSERT INTO `company_info` VALUES ('小米科技有限责任公司', '91110108551385082Q', '5000+', '51', '25', '5000+', '2023-06-13 21:15:05.212310', '2023-06-13 21:15:05.212310');
INSERT INTO `company_info` VALUES ('中创新航科技集团股份有限公司', '91320413MA1MCGA52K', '37', '87', '10', '1927', '2023-06-13 21:18:58.138253', '2023-06-13 21:18:58.138253');
INSERT INTO `company_info` VALUES ('企查查科技有限公司', '91320594088140947F', '189', '51', '66', '168', '2023-06-13 21:19:12.370288', '2023-06-13 21:19:12.370288');
INSERT INTO `company_info` VALUES ('阿里巴巴（中国）网络技术有限公司', '91330100716105852F', '17', '18', '170', '10', '2023-06-13 21:19:26.137896', '2023-06-13 21:19:26.137896');
INSERT INTO `company_info` VALUES ('远大医药（中国）有限公司', '91420100707162257C', '368', '1214', '0', '96', '2023-06-13 21:19:49.401509', '2023-06-13 21:19:49.401509');
INSERT INTO `company_info` VALUES ('比亚迪股份有限公司', '91440300192317458F', '0', '249812', '0', '0', '2023-06-13 21:20:35.380377', '2023-06-13 21:20:35.380377');

-- ----------------------------
-- Table structure for company_information
-- ----------------------------
DROP TABLE IF EXISTS `company_information`;
CREATE TABLE `company_information`  (
  `company` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`company`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of company_information
-- ----------------------------
INSERT INTO `company_information` VALUES ('91110000802100433B');
INSERT INTO `company_information` VALUES ('91110108551385082Q');
INSERT INTO `company_information` VALUES ('91320413MA1MCGA52K');
INSERT INTO `company_information` VALUES ('91320594088140947F');
INSERT INTO `company_information` VALUES ('91330100716105852F');
INSERT INTO `company_information` VALUES ('91420100707162257C');
INSERT INTO `company_information` VALUES ('91440300192317458F');

-- ----------------------------
-- Table structure for patent_info
-- ----------------------------
DROP TABLE IF EXISTS `patent_info`;
CREATE TABLE `patent_info`  (
  `company` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `company_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `patent_num` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `patent_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pub_num` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '主键',
  `patent_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pub_time` date NULL DEFAULT NULL,
  PRIMARY KEY (`pub_num`) USING BTREE,
  INDEX `company_id`(`company_id`) USING BTREE,
  INDEX `company`(`company`) USING BTREE,
  CONSTRAINT `patent_info_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company_info` (`company_id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of patent_info
-- ----------------------------
INSERT INTO `patent_info` VALUES ('阿里巴巴（中国）网络技术有限公司', '91330100716105852F', '8', '视频指纹快速检索方法', 'CN101807208B', '发明专利', '2015-05-20');
INSERT INTO `patent_info` VALUES ('阿里巴巴（中国）网络技术有限公司', '91330100716105852F', '9', '互联网内容发布网络防盗链方法', 'CN101815060B', '发明专利', '2015-01-07');
INSERT INTO `patent_info` VALUES ('阿里巴巴（中国）网络技术有限公司', '91330100716105852F', '10', '互联网内容发布网络防盗链系统', 'CN101815061B', '发明专利', '2015-01-07');
INSERT INTO `patent_info` VALUES ('阿里巴巴（中国）网络技术有限公司', '91330100716105852F', '7', '可视化网页收录检测方法', 'CN103092937B', '发明专利', '2016-04-27');
INSERT INTO `patent_info` VALUES ('阿里巴巴（中国）网络技术有限公司', '91330100716105852F', '6', '函数调用的资源配置方法和装置', 'CN103927191B', '发明专利', '2017-05-24');
INSERT INTO `patent_info` VALUES ('小米科技有限责任公司', '91110108551385082Q', '2', '人脸识别方法、装置及终端', 'CN105095881B', '发明专利', '2023-04-07');
INSERT INTO `patent_info` VALUES ('小米科技有限责任公司', '91110108551385082Q', '9', '信息识别方法、装置、终端及服务器', 'CN105447750B', '发明专利', '2022-06-03');
INSERT INTO `patent_info` VALUES ('小米科技有限责任公司', '91110108551385082Q', '5', '终端显示控制方法、装置及终端', 'CN106325712B', '发明专利', '2022-09-27');
INSERT INTO `patent_info` VALUES ('小米科技有限责任公司', '91110108551385082Q', '3', '对象处理方法及装置', 'CN106919852B', '发明专利', '2023-02-21');
INSERT INTO `patent_info` VALUES ('阿里巴巴（中国）网络技术有限公司', '91330100716105852F', '5', '声波传输方法及装置', 'CN107240403B', '发明专利', '2021-08-27');
INSERT INTO `patent_info` VALUES ('阿里巴巴（中国）网络技术有限公司', '91330100716105852F', '1', '基于区块链的数据处理方法、装置、系统以及电子设备', 'CN110633252B', '发明专利', '2022-12-16');
INSERT INTO `patent_info` VALUES ('远大医药（中国）有限公司', '91420100707162257C', '6', '吲达帕胺原料药中DCU的检测方法', 'CN110849995B', '发明专利', '2022-12-06');
INSERT INTO `patent_info` VALUES ('企查查科技有限公司', '91320594088140947F', '4', '基于大数据的潜在客户智能推荐方法、设备和存储介质', 'CN110968790B', '发明专利', '2023-05-16');
INSERT INTO `patent_info` VALUES ('远大医药（中国）有限公司', '91420100707162257C', '7', '吲达帕胺原料药中DCC含量的测定方法', 'CN111175388B', '发明专利', '2022-12-06');
INSERT INTO `patent_info` VALUES ('小米科技有限责任公司', '91110108551385082Q', '7', '一种显示消息的方法、装置及终端设备', 'CN111984165B', '发明专利', '2022-07-08');
INSERT INTO `patent_info` VALUES ('阿里巴巴（中国）网络技术有限公司', '91330100716105852F', '2', '载体对象处理和水印嵌入方法、装置及电子设备', 'CN112750065B', '发明专利', '2022-12-09');
INSERT INTO `patent_info` VALUES ('阿里巴巴（中国）网络技术有限公司', '91330100716105852F', '3', '一种安全多方计算方法、设备、系统及存储介质', 'CN112751665B', '发明专利', '2022-12-09');
INSERT INTO `patent_info` VALUES ('小米科技有限责任公司', '91110108551385082Q', '1', '智能手表', 'CN113946120B', '发明专利', '2023-05-09');
INSERT INTO `patent_info` VALUES ('阿里巴巴（中国）网络技术有限公司', '91330100716105852F', '4', '一种实现端侧窗口移动的方法及装置', 'CN114385046A', '发明专利', '2022-04-22');
INSERT INTO `patent_info` VALUES ('小米科技有限责任公司', '91110108551385082Q', '8', '液晶显示组件及电子设备', 'CN114578606A', '发明专利', '2022-06-03');
INSERT INTO `patent_info` VALUES ('远大医药（中国）有限公司', '91420100707162257C', '3', '用于治疗近视的方法和药物组合物', 'CN114796205B', '发明专利', '2023-05-05');
INSERT INTO `patent_info` VALUES ('小米科技有限责任公司', '91110108551385082Q', '6', '液晶显示屏模组和移动设备', 'CN114911090A', '发明专利', '2022-08-16');
INSERT INTO `patent_info` VALUES ('小米科技有限责任公司', '91110108551385082Q', '4', '移动设备及其屏幕模组、指纹采集方法、装置及电子设备', 'CN115131834A', '发明专利', '2022-09-30');
INSERT INTO `patent_info` VALUES ('远大医药（中国）有限公司', '91420100707162257C', '10', '包含PEDF衍生的短肽的组合物及其制备方法和用途', 'CN115364199A', '发明专利', '2022-11-22');
INSERT INTO `patent_info` VALUES ('远大医药（中国）有限公司', '91420100707162257C', '5', '一种盐酸多巴胺中基因毒性杂质胡椒基氯检测方法及盐酸多巴胺质控方法', 'CN115524420A', '发明专利', '2022-12-27');
INSERT INTO `patent_info` VALUES ('远大医药（中国）有限公司', '91420100707162257C', '4', '一种卡谷氨酸冻干固体制剂及其制备方法', 'CN115770225A', '发明专利', '2023-03-10');
INSERT INTO `patent_info` VALUES ('中创新航科技集团股份有限公司', '91320413MA1MCGA52K', '7', '电极片及包含它的电池', 'CN115939315B', '发明专利', '2023-06-02');
INSERT INTO `patent_info` VALUES ('企查查科技有限公司', '91320594088140947F', '10', '异常企业甄别方法及装置', 'CN115983691A', '发明专利', '2023-04-18');
INSERT INTO `patent_info` VALUES ('中创新航科技集团股份有限公司', '91320413MA1MCGA52K', '8', '一种电池包中辅助结构的控制方法及电池包', 'CN115986272B', '发明专利', '2023-06-02');
INSERT INTO `patent_info` VALUES ('企查查科技有限公司', '91320594088140947F', '9', '接口调用方法、装置、计算机设备和存储介质', 'CN116009985A', '发明专利', '2023-04-25');
INSERT INTO `patent_info` VALUES ('企查查科技有限公司', '91320594088140947F', '8', '文本的分类方法、装置、计算机设备和存储介质', 'CN116010596A', '发明专利', '2023-04-25');
INSERT INTO `patent_info` VALUES ('企查查科技有限公司', '91320594088140947F', '7', '数据访问请求的处理方法和装置', 'CN116016668A', '发明专利', '2023-04-25');
INSERT INTO `patent_info` VALUES ('企查查科技有限公司', '91320594088140947F', '6', '网络页面的字段关系识别方法和装置', 'CN116032785A', '发明专利', '2023-04-28');
INSERT INTO `patent_info` VALUES ('远大医药（中国）有限公司', '91420100707162257C', '2', '一种预充式硫酸阿托品注射液及其生产工艺', 'CN116098859A', '发明专利', '2023-05-12');
INSERT INTO `patent_info` VALUES ('企查查科技有限公司', '91320594088140947F', '5', '文本关键词的提取方法和装置', 'CN116108842A', '发明专利', '2023-05-12');
INSERT INTO `patent_info` VALUES ('企查查科技有限公司', '91320594088140947F', '3', '访问请求的处理方法、装置及计算机设备', 'CN116155597A', '发明专利', '2023-05-23');
INSERT INTO `patent_info` VALUES ('企查查科技有限公司', '91320594088140947F', '1', '数据同步方法及装置', 'CN116186154A', '发明专利', '2023-05-30');
INSERT INTO `patent_info` VALUES ('企查查科技有限公司', '91320594088140947F', '2', '样本处理方法、装置、计算机设备和存储介质', 'CN116188819A', '发明专利', '2023-05-30');
INSERT INTO `patent_info` VALUES ('北京百度网讯科技有限公司', '91110000802100433B', '7', '杂质挑拣机构及杂质挑拣装置', 'CN116213307A', '发明专利', '2023-06-06');
INSERT INTO `patent_info` VALUES ('北京百度网讯科技有限公司', '91110000802100433B', '1', '避让决策方法、装置、设备、存储介质和自动驾驶车辆', 'CN116215572A', '发明专利', '2023-06-06');
INSERT INTO `patent_info` VALUES ('北京百度网讯科技有限公司', '91110000802100433B', '3', '换热数据的确定方法、深度学习模型的训练方法和装置', 'CN116227331A', '发明专利', '2023-06-06');
INSERT INTO `patent_info` VALUES ('北京百度网讯科技有限公司', '91110000802100433B', '8', '对抗网络的训练、图像去水印方法、装置及电子设备', 'CN116227559A', '发明专利', '2023-06-06');
INSERT INTO `patent_info` VALUES ('北京百度网讯科技有限公司', '91110000802100433B', '9', '负荷预测方法、装置、设备及介质', 'CN116227731A', '发明专利', '2023-06-06');
INSERT INTO `patent_info` VALUES ('北京百度网讯科技有限公司', '91110000802100433B', '2', '一种模型训练方法、视觉任务处理方法、装置及设备', 'CN116229095A', '发明专利', '2023-06-06');
INSERT INTO `patent_info` VALUES ('北京百度网讯科技有限公司', '91110000802100433B', '6', '基于模型对抗的坏例识别方法、装置、设备以及存储介质', 'CN116229200A', '发明专利', '2023-06-06');
INSERT INTO `patent_info` VALUES ('北京百度网讯科技有限公司', '91110000802100433B', '10', '目标模型的训练方法、目标检测方法及装置', 'CN116229209A', '发明专利', '2023-06-06');
INSERT INTO `patent_info` VALUES ('北京百度网讯科技有限公司', '91110000802100433B', '5', '模型训练方法、装置及电子设备', 'CN116229214A', '发明专利', '2023-06-06');
INSERT INTO `patent_info` VALUES ('北京百度网讯科技有限公司', '91110000802100433B', '4', '医疗变量数据的处理方法、装置、电子设备和存储介质', 'CN116230149A', '发明专利', '2023-06-06');
INSERT INTO `patent_info` VALUES ('中创新航科技集团股份有限公司', '91320413MA1MCGA52K', '10', '一种热复合装置', 'CN219123284U', '实用新型', '2023-06-02');
INSERT INTO `patent_info` VALUES ('中创新航科技集团股份有限公司', '91320413MA1MCGA52K', '9', '一种电池包', 'CN219123313U', '实用新型', '2023-06-02');
INSERT INTO `patent_info` VALUES ('中创新航科技集团股份有限公司', '91320413MA1MCGA52K', '6', '电池组及电池装置', 'CN219123410U', '实用新型', '2023-06-02');
INSERT INTO `patent_info` VALUES ('中创新航科技集团股份有限公司', '91320413MA1MCGA52K', '3', '电池包', 'CN219144262U', '实用新型', '2023-06-06');
INSERT INTO `patent_info` VALUES ('中创新航科技集团股份有限公司', '91320413MA1MCGA52K', '1', '电池装置', 'CN219144278U', '实用新型', '2023-06-06');
INSERT INTO `patent_info` VALUES ('中创新航科技集团股份有限公司', '91320413MA1MCGA52K', '2', '一种电池组', 'CN219144292U', '实用新型', '2023-06-06');
INSERT INTO `patent_info` VALUES ('中创新航科技集团股份有限公司', '91320413MA1MCGA52K', '5', '电池包', 'CN219144329U', '实用新型', '2023-06-06');
INSERT INTO `patent_info` VALUES ('中创新航科技集团股份有限公司', '91320413MA1MCGA52K', '4', '一种电池系统', 'CN219145054U', '实用新型', '2023-06-06');
INSERT INTO `patent_info` VALUES ('小米科技有限责任公司', '91110108551385082Q', '10', '手机壳', 'CN307354851S', '外观设计', '2022-05-24');
INSERT INTO `patent_info` VALUES ('远大医药（中国）有限公司', '91420100707162257C', '8', '食品包装盒', 'CN307696384S', '外观设计', '2022-11-29');
INSERT INTO `patent_info` VALUES ('远大医药（中国）有限公司', '91420100707162257C', '9', '药品包装盒', 'CN307696385S', '外观设计', '2022-11-29');
INSERT INTO `patent_info` VALUES ('远大医药（中国）有限公司', '91420100707162257C', '1', '药品包装盒', 'CN308057799S', '外观设计', '2023-05-30');

SET FOREIGN_KEY_CHECKS = 1;
