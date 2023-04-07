# -*- coding:utf-8 -*-
import string
import logging
import json
import random
from scrapy import signals
import redis
import scrapy.http
LOGGER = logging.getLogger(__name__)


from scrapy import signals


class ProxyDownloaderMiddleware:
    _proxy = ('j674.kdltps.com', '15818')

    def process_request(self, request, spider):
        # 用户名密码认证
        username = "username"
        password = "password"
        request.meta['proxy'] = "http://%(user)s:%(pwd)s@%(proxy)s/" % {"user": username, "pwd": password,
                                                                        "proxy": ':'.join(
                                                                            ProxyDownloaderMiddleware._proxy)}

        # 白名单认证
        request.meta['proxy'] = "http://%(proxy)s/" % {"proxy":  ':'.join(ProxyDownloaderMiddleware._proxy)}
        request.headers["Connection"] = "close"
        return None

    def process_exception(self, request, exception, spider):
        """捕获407异常"""
        if "'status': 407" in exception.__str__():  # 不同版本的exception的写法可能不一样，可以debug出当前版本的exception再修改条件
            from scrapy.resolver import dnscache
            dnscache.__delitem__(ProxyDownloaderMiddleware._proxy[0])  # 删除proxy host的dns缓存
        return exception