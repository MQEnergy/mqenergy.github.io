## 下载与安装
### 线上服务器要求
- PHP >= 7.2
- Swoole PHP 扩展 >= 4.4，并关闭了 `Short Name`
- OpenSSL PHP 扩展
- JSON PHP 扩展
- PDO PHP 扩展 （如需要使用到 MySQL 客户端）
- Redis PHP 扩展 （如需要使用到 Redis 客户端）
- Protobuf PHP 扩展 （如需要使用到 gRPC 服务端或客户端）

### docker下本地开发
在docker环境下开发，window10环境安装`docker desktop for window`,
window10以下环境安装`docker toolbox`。

#### 下载hyperf框架docker镜像
```
docker pull hyperf/hyperf
```
#### 下载mqcms系统到本地
```
# 例如：将项目放在本地e:/web/MQCMS
git clone https://github.com/MQEnergy/MQCMS
```

#### 运行docker命令：
```
docker run -it -v /e/web/MQCMS:/mqcms -p 9501:9501 --name mqserver --entrypoint /bin/sh hyperf/hyperf
```

#### 将Composer镜像设置为阿里云镜像，加速国内下载速度
```
php mqcms/bin/composer.phar config -g repo.packagist composer https://mirrors.aliyun.com/composer
```

#### docker下安装redis
```
docker pull redis
# 进入redis 配置redis可外部访问

docker run -d --privileged=true -p 6379:6379 -v /e/web/MQCMS/docker/conf/redis/redis.conf:/etc/redis/redis.conf --name mqredis redis redis-server /etc/redis/redis.conf --appendonly yes
docker exec -it mqredis /bin/sh

# 修改映射在本地的redis.conf
# 修改bind如下（根据自己熟悉程度配置）
# bind 0.0.0.0

# 可开启password（自行按需修改）
# requirepass foobared

# 重启redis
docker restart mqredis
```
#### 进入项目安装依赖启动项目
```
docker exec -it mqserver /bin/sh
cd mqcms
php bin/composer.phar install
cp .env.example .env
php bin/hyperf.php start
```
#### 浏览器访问项目
```
http://127.0.0.1:9501
```
