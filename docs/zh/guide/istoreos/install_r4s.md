# NanoPi R4S 安装教程

## 1.下载固件

* [R4S 固件下载](https://site.istoreos.com/firmware/download?devicename=r4s&firmware=iStoreOS)

越前面版本越新，请注意看中间的日期，比如 istoreos-x.x.x-**2023032001**-r4s-squashfs.img.gz。下载完成之后不需要解压。

* R4S 1G 内存版本：首次刷入，必须先刷入 ```istoreos-24.10.2-2025072517-r4s-1g-squashfs.img.gz``` 基础固件，先用这个固件制作 TF 卡，启动以后可不保留配置升级到最新版本，之后可以正常在线升级。
* [R4S 1G 基础固件下载](https://fw0.koolcenter.com/iStoreOS/r4s-1g/istoreos-24.10.2-2025072517-r4s-1g-squashfs.img.gz)


## 2.刷写TF卡
参考 [SD卡通用教程](/zh/guide/istoreos/install_sd.html)。

## 3.注意
**不要混刷不同作者的固件**！以免出现问题或损坏硬件，[详情](https://github.com/istoreos/istoreos/issues/1012)


