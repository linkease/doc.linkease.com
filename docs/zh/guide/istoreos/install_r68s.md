### R68S 设备

电犀牛R68s使用USB线缆刷写固件。

## 1.准备工作

* 一条 USB公对公数据线
![usb.jpeg](./install/usb.png)
* 一台 windows 电脑

## 2.下载固件

* [R68S固件下载](https://fw.koolcenter.com/iStoreOS/alpha/)

越后面的版本越新，下载最新的版本。下载完成之后不需要解压。

## 3.写入固件

* 使用 RKDevTool 工具刷入固件，安装RK USB驱动，
下载 [安装RK USB驱动](https://download.t-firefly.com/product/Board/RK356X/Tool/Window/DriverAssitant/DriverAssitant_v5.1.1.zip)，解压，然后运行里面的 DriverInstall.exe 。为了所有设备都使用更新的驱动，请先选择驱动卸载，然后再选择驱动安装。
![install_rk_usb.png](./install/install_rk_usb.png)

* 运行RKDevTool.exe，
下载 [RKDevTool](https://download.t-firefly.com/product/Board/RK356X/Tool/Window/AndroidTool/RKDevTool_Release_v2.84.zip)
解压，运行 RKDevTool_Release_v2.xx 目录里面的 RKDevTool.exe（注意，如果是 Windows 7/8,需要按鼠标右键，选择以管理员身份运行）。
![rkdevtool_no_device.jpg](./install/rkdevtool_no_device.jpg)

* 按住设备上的 RECOVERY （恢复）键并保持，然后通电， 指示灯变绿色

* USB 数据线一端连接 windows 电脑，一端连接R68s

* 大约几秒钟后，松开 RECOVERY 键

* RKDevTool上即可发现这个设备
![rkdevtool.jpg](./install/rkdevtool.jpg)
然后切换到 Upgrade Firmware，首先点击 EraseFlash 擦除Flash，再点击 Firmware 选择固件，最后点击 Upgrade 刷写固件即可
![upgrade.png](./install/upgrade.jpg)

## 4.启动系统

固件写入完成后，拔掉公头数据线，通电启动。

