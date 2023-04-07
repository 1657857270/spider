import redis


pool = redis.ConnectionPool(host='123.60.105.39', port=6379, db=0, password='aSJap6D14A')
redis = redis.StrictRedis(connection_pool=pool)

redis.lpush('dyCode','1312241326')