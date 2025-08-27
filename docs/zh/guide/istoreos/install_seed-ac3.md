# BeeconMini SEED AC3 安装教程

## 1.下载固件

* [SEED AC3 固件下载](https://site.istoreos.com/firmware/download?devicename=seed-ac3&firmware=iStoreOS)

越前面版本越新，请注意看中间的日期，比如 istoreos-x.x.x-**2025071716**-ac3-squashfs-sysupgrade.bin。

## 2.刷机
* 默认 BMoS 系统 192.168.88.1 进入管理页面，「系统」—>「备份与升级」—>「刷写固件」，「浏览」选择 iStoreOS 固件，一定**取消「保留当前配置」**，下一步刷入即可。

![install.png](./install/seed/seed.png)

* 刷回官方 BMoS 系统：在 iStoreOS 192.168.100.1 管理页面，「系统」—>「备份与升级」—>「刷写固件」，「浏览」选择官方 BMoS 固件，**取消「保留当前配置」**，下一步刷入即可。

## 3.注意
**不要混刷不同作者的固件**！以免出现问题或损坏硬件，[详情](https://github.com/istoreos/istoreos/issues/1012)