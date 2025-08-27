# Rockchip 方案机型安装 iStoreOS 教程

## 1.下载固件

* [iStoreOS 固件下载](https://fw.koolcenter.com/iStoreOS/)

找到自己的机型，点击进入以后有固件列表，越前面版本越新，请注意看中间的日期，比如 istoreos-x.x.x-**2023032001**-xxx-squashfs.img.gz。
下载完成之后先别自行解压，由后面的刷机方式决定是否需要解压。

## 2.刷机
* 如果打算从TF卡启动，参考 [SD卡通用教程](/zh/guide/istoreos/install_sd.html) 刷写。
* 如果要直接刷写到 eMMC，可以参考 [Rockchip 机型 USB 线刷标准固件教程](/zh/guide/istoreos/install_rockchip_sysupgrade.html)。

## 3.注意
**不要混刷不同作者的固件**！以免出现问题或损坏硬件，[详情](https://github.com/istoreos/istoreos/issues/1012)
