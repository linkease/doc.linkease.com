# iStoreOS 固件

[易有云团队](https://www.linkease.com)的目标是：提供更简单易用的网络存储方案。为了让用户能够在更多的硬件上享受易有云团队带来的软件福利，我们开发了本系统。

## 介绍

iStoreOS 是提供给入门级 OpenWRT 爱好者使用的固件，主要是为了简化操作，避免入门用户走进太多坑。其中包括：

* 提供拨号向导，简化拨号流程
* 简化 DNS 配置
* 简化硬盘格式化流程（坑最多）
* 提供 Samba 设置向导（原始的 OpenWRT 没提供 Samba 密码设置的功能）
* Docker 配置向导
* 远程下载设置向导

iStoreOS 还提供了软件中心：[iStore](https://github.com/linkease/istore)，尽可能解决插件之间的依赖关系，可让大家自由自在安装插件。

除此之外，为了方便大家折腾不出问题，避免掉坑里，我们还做了很多防坑操作，比如 [ARS2](https://easepi.linkease.com/) 固件里面有：

* 救援模式，即是固件完全刷坏，也可以进入救援模式救回来
* 沙箱模式，通过 U 盘进入沙箱模式，不管如何安装插件搞坏了系统，拔掉 U 盘就回到上个状态

当然 iStoreOS 还有整套易有云 APP 的协助，可以远程管理系统，远程访问插件，远程访问文件，备份相册，看电影等。满足了很多用户折腾半天都搞不定的场景需求。

## 支持硬件

* [ARS2](https://easepi.linkease.com) 固件最初硬件产品，没有这个产品，就没有这个项目
* X86
* R2S 开发中
* R4S 开发中
* R68S 开发中
* R5S 开发中

## 固件下载

https://fw.koolcenter.com/iStoreOS/

## 使用方法

* 默认IP http://192.168.100.1
* 默认密码：password
* 如果只有一个网口，默认的网口是 LAN；如果大于一个网口，默认 eth0 是 WAN 口，其它都是 LAN。
* 如果在 LAN 口修改 IP，或者任何修改之后导致无法连接路由器，都会导致刚才的修改被回滚。所以要修改 LAN/WAN 口 IP，可以选择强制应用，保证修改肯定生效。

其它离线安装包，请靠自己的能力去寻找。这里不提供任何离线安装包。

## 自己制作固件

iStoreOS 来源于官方的 OpenWRT Release 分支源码，没有 fork 自己的分支，几乎都是通过 OpenWRT 标准组件形式实现。我们修改或者开发的部分，都以插件形式，具体源代码如下：

* [nas-packages-luci](https://github.com/linkease/nas-packages-luci) 我们自己开发的插件 UI 代码
* [nas-packages](https://github.com/linkease/nas-packages) 我们自己开发插件的程序代码，部分程序并不开源
* [istore](https://github.com/linkease/istore) 软件中心核心代码，包含备份插件功能等，全部开源
* [openwrt-themedog](https://github.com/linkease/openwrt-themedog) 本来尝试做的桌面主题，目前还有些问题
* [istore-packages](https://github.com/linkease/istore-packages) 软件中心的一些非 OpenWRT 官方包
* [openwrt-app-actions](https://github.com/linkease/openwrt-app-actions) 其他一些软件包

iStoreOS 就是在 OpenWRT 最基础最原始的固件基础上，加上了上面插件的能力来实现。

`更新`：最近发现，用 patch 方式开发太麻烦，等稳定以后，还是计划 fork OpenWRT 代码，并开源到这里。这样也方便更多人参与到本项目。

### 固件编译的 action 参考

iStoreOS 目标是给入门者提供固件，暂时没直接提供 action 来给高级用户自己编译固件，如果大家有动手能力，可以参考下面的第三方 action 编译自己的固件：

* https://github.com/xiangfeidexiaohuo/OpenWrt_Build
* https://github.com/xiangfeidexiaohuo/openwrt-packages

上面为非我们提供的支持，只是提供给大家一个源代码参考。我们不会对任何结果或者过程负责。

## 更多 iStoreOS 功能，请关注我们的 B 站账号

* [酷友社 B 站账号](https://space.bilibili.com/1492058311?spm_id_from=333.788.0.0)
* [酷友社 Youtube](https://www.youtube.com/channel/UCvENMyIFurJi_SrnbnbyiZw)
* [QQ 群](https://www.koolcenter.com/posts/117)
* [TG 群](https://t.me/+QwxW7aimSMeRdQJX)

## 问题反馈

* https://github.com/linkease/istoreos/issues

### 交流群汇总

大家请选择加入 iStoreOS 固件互助群。

* https://www.koolcenter.com/posts/117

### 功能介绍

* 基于 OpenWRT 官方稳定分支，没魔改，通过 patch 方式修复了一些问题
* 通过组件化并开源来支持[首页向导](https://github.com/linkease/nas-packages-luci/tree/main/luci/luci-app-quickstart)，[软件中心](https://github.com/linkease/istore) 等
* 拨号向导
* 网络共享设置向导
* 磁盘格式化向导
* Docker 设置向导
* Aria2 下载设置向导
* 软件中心
* 支持已安装的软件备份+恢复，方便升级系统
* 在线升级固件，插件会丢失。如果想插件快速恢复，请在 iStore --> 维护 --> 全量备份插件到另外一个分区
* 移植了 5.10 的相关驱动，以支持部分 2.5G 网卡（待更多测试)

### 功能组合

* 建议使用[易有云 APP](https://doc.linkease.com) 做远程应用控制，方便手机远程控制应用
* 建议用 [DDNSTO](https://www.ddnsto.com) 从网页域名远程访问路由器

### 第三方离线包制作

iStoreOS 离线包不是一个压缩包，也没啥黑科技，而是借助第三方软件实现。原理是这个项目：https://github.com/megastep/makeself

生成方法例子：

./makeself.sh --nox11 ./xxx ./out/xxx_x86.run "OneClick install" ./install.sh

把 ipk 跟 install.sh 结合在一起，本质会生成一个包含所有 ipk 跟 install.sh 的自解压自运行的程序。

## 预览

![首页1](https://www.koolcenter.com/assets/image/20220417/1515363189364101120.jpeg)
![首页2](https://www.koolcenter.com/assets/image/20220417/1515363238219354112.jpeg)
![软件中心](https://www.koolcenter.com/assets/image/20220417/1515363341009162240.jpeg)

### 鸣谢

* [ziguayungui](https://github.com/ziguayungui)，[jjm2473](https://github.com/jjm2473)，[Koolshare LEDE 的作者 fw867](https://github.com/fw867)，[xiangfeidexiaohuo](https://github.com/xiangfeidexiaohuo)
* [KoolCenter](https://www.koolcenter.com)，[易有云](https://www.linkease.com) 团队相关同事
* OpenWRT 官方团队
* 众多 OpenWRT 的固件或者插件开发者

