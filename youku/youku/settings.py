# Scrapy settings for youku project
#
# For simplicity, this file contains only settings considered important or
# commonly used. You can find more settings consulting the documentation:
#
#     https://docs.scrapy.org/en/latest/topics/settings.html
#     https://docs.scrapy.org/en/latest/topics/downloader-middleware.html
#     https://docs.scrapy.org/en/latest/topics/spider-middleware.html

BOT_NAME = 'youku'

SPIDER_MODULES = ['youku.spiders']
NEWSPIDER_MODULE = 'youku.spiders'

DEFAULT_REQUEST_HEADERS = {
    'Referer': 'https://v.youku.com/v_show/id_XNTkxOTk0NDI2NA==.html?spm=a2hja.14919748_WEBHOME_NEW.drawer2.d_zj1_1&s=daafdde1e4e94539bc64&scm=20140719.rcmd.35027.show_daafdde1e4e94539bc64&s=daafdde1e4e94539bc64',
    'Host': 'acs.youku.com',
    'Origin': 'https://v.youku.com',
    'Cookie': 'cna=OmQlHE4t+w8CAbe9Sb1SfDRg; __ysuid=1671329339177DtS; __ayft=1681445171147; __aysid=16814451711474EA; __ayscnt=1; xlly_s=1; __arycid=dd-3-00; __arcms=dd-3-00; _m_h5_tk=ed3358d1de705b5408300304ccedd6d6_1681465104285; _m_h5_tk_enc=676f081de4f8768eeb5cb4d5099f09f2; __arpvid=1681460815694yKTtyS-1681460815700; __aypstp=8; __ayspstp=8; __ayvstp=76; __aysvstp=76; isg=BN7ecaWbNjBrUWVzzu5D73IIL3Qgn6IZqNEmqYhmKSEcq3qF8CwWKfYDo7enk5ox; tfstk=cUHhBmYfvXPInRp-52wB3cL_Wk4laaf7o2gxQh3fAIZEeQG_Ysbd_szNPIUBle55.; l=fBjemT3qT2ljH0-QBO5a-urza7795IOfGsPzaNbMiIEGa6_VCF9BOOCs54lHAdtjgTfDXetyc-f0qdHM7YULRnDDBeYQFbuMSxv9-bpU-L5..'
}

# Crawl responsibly by identifying yourself (and your website) on the user-agent
#USER_AGENT = 'youku (+http://www.yourdomain.com)'

# Obey robots.txt rules
ROBOTSTXT_OBEY = True

# Configure maximum concurrent requests performed by Scrapy (default: 16)
#CONCURRENT_REQUESTS = 32

# Configure a delay for requests for the same website (default: 0)
# See https://docs.scrapy.org/en/latest/topics/settings.html#download-delay
# See also autothrottle settings and docs
#DOWNLOAD_DELAY = 3
# The download delay setting will honor only one of:
#CONCURRENT_REQUESTS_PER_DOMAIN = 16
#CONCURRENT_REQUESTS_PER_IP = 16

# Disable cookies (enabled by default)
COOKIES_ENABLED = False

# Disable Telnet Console (enabled by default)
#TELNETCONSOLE_ENABLED = False

# Override the default request headers:
#DEFAULT_REQUEST_HEADERS = {
#   'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
#   'Accept-Language': 'en',
#}

# Enable or disable spider middlewares
# See https://docs.scrapy.org/en/latest/topics/spider-middleware.html
#SPIDER_MIDDLEWARES = {
#    'youku.middlewares.YoukuSpiderMiddleware': 543,
#}

# Enable or disable downloader middlewares
# See https://docs.scrapy.org/en/latest/topics/downloader-middleware.html
#DOWNLOADER_MIDDLEWARES = {
#    'youku.middlewares.YoukuDownloaderMiddleware': 543,
#}

# Enable or disable extensions
# See https://docs.scrapy.org/en/latest/topics/extensions.html
#EXTENSIONS = {
#    'scrapy.extensions.telnet.TelnetConsole': None,
#}

# Configure item pipelines
# See https://docs.scrapy.org/en/latest/topics/item-pipeline.html
#ITEM_PIPELINES = {
#    'youku.pipelines.YoukuPipeline': 300,
#}

# Enable and configure the AutoThrottle extension (disabled by default)
# See https://docs.scrapy.org/en/latest/topics/autothrottle.html
#AUTOTHROTTLE_ENABLED = True
# The initial download delay
#AUTOTHROTTLE_START_DELAY = 5
# The maximum download delay to be set in case of high latencies
#AUTOTHROTTLE_MAX_DELAY = 60
# The average number of requests Scrapy should be sending in parallel to
# each remote server
#AUTOTHROTTLE_TARGET_CONCURRENCY = 1.0
# Enable showing throttling stats for every response received:
#AUTOTHROTTLE_DEBUG = False

# Enable and configure HTTP caching (disabled by default)
# See https://docs.scrapy.org/en/latest/topics/downloader-middleware.html#httpcache-middleware-settings
#HTTPCACHE_ENABLED = True
#HTTPCACHE_EXPIRATION_SECS = 0
#HTTPCACHE_DIR = 'httpcache'
#HTTPCACHE_IGNORE_HTTP_CODES = []
#HTTPCACHE_STORAGE = 'scrapy.extensions.httpcache.FilesystemCacheStorage'

# Set settings whose default value is deprecated to a future-proof value
REQUEST_FINGERPRINTER_IMPLEMENTATION = '2.7'
TWISTED_REACTOR = 'twisted.internet.asyncioreactor.AsyncioSelectorReactor'
