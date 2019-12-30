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

