## 扩展功能
### command命令扩展
#### 创建service
```
# 查看mq:service命令帮助
php bin/hyperf.php mq:service --help

# 创建App\Service命名空间的service
php bin/hyperf.php mq:service FooService Foo
# FooAdminService：service名称 FooAdmin：model名称
 
# 创建其他命名空间的service
php bin/hyperf.php mq:service -N App\\Service\\Admin FooAdminService FooAdmin
# FooAdminService：service名称 FooAdmin：model名称
 
```

#### 创建controller
```
# 查看mq:controller命令帮助

php bin/hyperf.php mq:controller --help

# 创建App\Controller命名空间的controller
php bin/hyperf.php mq:controller FooController FooService admin
# FooController：controller名称 FooService：service名称 admin：模块名称（后台，接口 可扩展，eg.可写成：Admin ADMIN admin ...）

# 创建其他命名空间的controller
php bin/hyperf.php mq:controller -N App\\Controller\\Admin\\V1 FooController FooService api
# FooController：controller名称 FooService：service名称 api：模块名称（后台，接口 可扩展，eg.可写成：Api API api ...）
```

#### 安装plugin
本项目支持安装开发的插件分为前后端，插件后台路由建议使用依赖注入方式实现，目录结构查看upload/plugins/demo.zip文件
```
demo                             // 插件名称（一般为用户名）
├─ service                       // command命令
├─ components                    // 前端组件目录
├─ controller                    // 控制器目录
├─ migrations                    // 数据库迁移目录
├─ api                           // 前端api访问方法目录
│  ├─ index.js                   // 前端api方法
├─ menu                          // 前端菜单目录
│  ├─ index.js                   // 前端菜单列表
├─ router                        // 前后端路由目录
│  ├─ index.js                   // 前端路由
│  ├─ api.php                    // 前台接口路由
│  └─ admin.php                  // 后台接口路由
```
```
# 查看mq:plugin命令帮助
php bin/hyperf.php mq:plugin --help

# 创建默认命名空间的plugin（默认命名空间可在devtool.php查看）
php bin/hyperf.php mq:plugin up demo
# up：代表安装操作 demo：代表插件打包名称

# 创建其他命名空间的plugin
php bin/hyperf.php mq:plugin -CN App\\Controller\\Admin\\Plugins -SN App\\Service\\Plugins up demo [-H(--hot)]
# CN：controller namespace  SN：service namespace  -H：为热更新参数

运行如下：
start install plugin demo ...
 ---------------- ----------------------------------------------------
  插件临时路径     /hyperf-skeleton/upload/plugins/demo
 ---------------- ----------------------------------------------------
  控制器路径       /hyperf-skeleton/app/Controller/Admin/Plugins/Demo
 ---------------- ----------------------------------------------------
  服务层路径       /hyperf-skeleton/app/Service/Plugins/Demo
 ---------------- ----------------------------------------------------
  数据库迁移路径   /hyperf-skeleton/migrations
 ---------------- ----------------------------------------------------
plugin demo installed successfully!


# 访问地址
http://127.0.0.1:9501/admin/plugins/demo/index/index
出现结果：
{
    "method": "GET",
    "message": "Hello MQCMS-plugin-demo."
}
```