# 介绍
MQCMS是一款现代化，快速，高效，灵活，前后端分离，扩展性强的CMS系统。
MQCMS中的MQ取麻雀拼音首字母。寓意麻雀虽小五脏俱全。
MQCMS一个基于 hyperf作为后端接口层，iview作为后台前端框架的快速开发引擎，
目前正在成长中，目的是为了集成更多的基础功能，
不再为相同的基础功能重复制造轮子，开箱即用，让开发变得更加简单。

### 特别感谢
本项目后端基于hyperf框架开发的，感谢hyperf的作者提供这么优秀的框架

### 本地开发
在docker环境下开发，window10环境安装docker desktop for window,
window10以下环境安装docker toolbox。


下载hyperf框架docker镜像
```
docker pull hyperf/hyperf
```

进入docker运行命令：
```
# 例如：将项目放在本地d:/web/mqcms
docker run -it -v /d/web/mqcms:/mqcms -p 9501:9501 --entrypoint /bin/sh hyperf/hyperf
```

下载mqcms系统
```
git clone https://github.com/MQEnergy/MQCMS mqcms
```

将 Composer 镜像设置为阿里云镜像，加速国内下载速度
```
php mqcms/bin/composer.phar config -g repo.packagist composer https://mirrors.aliyun.com/composer

```
进入项目安装依赖启动项目
```
cd mqcms
php bin/composer.phar install
cp .env.example .env
php bin/hyperf.php start
```

浏览器访问项目
```
http://127.0.0.1:9501
```
