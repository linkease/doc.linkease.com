### R2S/R4S 设备

友善电子nanopi-R2S/R4S。两款机器，刷入固件方法一样，固件不一样而已。

## 1.准备工作

* 一个 USB TF读卡器
* 一张 TF 卡
* 一台 windows 电脑

## 2.下载固件

* [R2S固件下载](https://fw.koolcenter.com/iStoreOS/r2s/)

* [R4S固件下载](https://fw.koolcenter.com/iStoreOS/r4s/)

越前面版本越新，请注意看中间的日期，比如 xxx20221123xx-xxx.img.gz。下载完成之后不需要解压。

## 3.做启动盘

* 电脑上用 rufus 将固件写入 TF卡

[Rufus下载](https://rufus.ie/zh/)

* 电脑插入放TF卡的读卡器，打开rufus工具，选择下载好的固件，把固件写入到TF卡

![install.png](./install/install_r2s.png)

## 4.启动系统

将写入了固件的TF插入到R2s/R4s中，通电启动。

### 进入后台管理

* 默认IP http://192.168.100.1
* 默认密码：password
* 如果只有一个网口，默认的网口是 LAN；如果大于一个网口，默认 eth0 是 WAN 口，其它都是 LAN
* 如果要修改 LAN 口 IP，首页有个内网设置，或者命令行用 quickstart 命令修改
* 必读一轮我们的 [FAQ](/zh/guide/istoreos/question.html)，以防后续出现问题知道如何解决！