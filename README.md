# Linkease

未来易有云跟 [ddnsto](https://www.ddnsto.com) 是完全独立的两个产品，他们的官网也是独立的，维护的人员也是独立的。

更多信息请到官网： [https://www.linkease.com](https://www.linkease.com) 

功能预览：[产品截图](https://www.ddnsto.com/linkease/#/zh-cn/features/preview)

问题反馈：[issues](https://github.com/koolshare/linkease/issues)

下载：

1. [客户端下载](https://doc.linkease.com/downloads/)

2. [存储端下载](https://doc.linkease.com/downloads/)

![QQ群介绍图](manual/pages/zh-cn/README/QQ%E7%BE%A4%E4%BB%8B%E7%BB%8D%E5%9B%BE.png?raw=true)

#### 更新日志

##### 0.2.98

* NETBIOS 支持，搜索局域网内的 NETBIOS 域名跟 IP
* 支持终端通过 Agent 来访问到局域网内的 SAMBA 2/3 版本的服务器
* 支持终端通过 Agent 来访问到局域网内的 SFTP 服务器
* 支持文件后缀搜索，以支持终端拿到视频字幕
* 支持文件的正序、逆序排序
* 修复空间容量显示问题
* 添加了部分 case 的错误信息提示
* 修复了删除设备之后，要等很久才能再次重新绑定的问题（目前删除设备之后，等 10s ~ 20s 可以重新绑定）
* 修复了底层的一个通信错误，当持续用 4G 网络的时候，超过 15 分钟会通信超时

##### 0.2.87
* 支持 ipv6 直连
* 新增套餐支持，用户可以选择买套餐
* 新增设置页面
* 设备列表页面换到个人目录下面

##### 0.2.86
* 修复网络切换导致的通新问题

##### 0.2.81
* 优化底层通信
* 更友善的支持用户设备的绑定
* 可以显示设备的容量等
* 修复双向同步的 BUG
* 更新新的 UI

##### 0.2.73
* 更新了新的绑定方式，支持 web 端绑定
* 更新了绑定方式，支持手机自动发现局域网设备并绑定
* 支持硬盘列表选择
* 支持修改共享目录

##### 0.2.70
* 更新了 Windows 客户端，QNAP、Synology，Linux 通用版存储端
* Windows 端支持自动检索局域网未绑定的设备，然后添加进行绑定
* 更新客户端与存储端之后，支持目录更改！
* 下个版本更新目标：二进制自动更新能力！

##### 0.2.68
* 修复序列号的错误，导致无法绑定设备
