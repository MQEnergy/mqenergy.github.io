# 目录结构
```
MQCMS
├─ .env.example                     // 配置文件
├─ app                              // 应用目录
│  ├─ Command                       // command命令
│  ├─ Constants                     // 枚举
│  ├─ Controller                    // 控制器
│  │  ├─ AbstractController.php     // 基类
│  │  ├─ Admin                      // 后台
│  │  │  └─ V1                      // 版本v1
│  │  ├─ Api                        // 接口
│  │  │  └─ V1                      // 版本v1
│  ├─ Exception                     // 异常
│  ├─ Helper                        // 帮助函数
│  ├─ Listener                      // 监听
│  ├─ Middleware                    // 中间件
│  ├─ Model                         // 模型
│  ├─ Pool                          // 连接池
│  ├─ Service                       // 服务层
│  └─ Utils                         // 工具
├─ bin
│  ├─ composer.phar
│  └─ hyperf.php
├─ composer.json                    
├─ config                           // 配置文件
│  ├─ autoload                      // 文件夹内的配置文件会被配置组件自己加载，并以文件夹内的文件名作为第一个键值
│  └─ routes.php                    // 管理路由
├─ docker                           // docker配置
│  └─ conf
│     └─ redis
│        └─ redis.conf              // docker redis配置
├─ migrations                       // 数据库迁移   
├─ runtime                          // 运行时文件
│  ├─ container
│  ├─ hyperf.pid
│  └─ logs                          // 日志目录
├─ storage                          // 语言配置目录
│  └─ languages
│     ├─ en
│     └─ zh_CN
```
