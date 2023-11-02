## 一、R5S刷入armbian jammy

[PIKVM固件地址](https://kr.mirrors.naho.moe/armbian/dl/nanopi-r5s/archive/Armbian_23.8.2_Nanopi-r5s_jammy_edge_6.5.3_xfce_desktop.img.xz)

刷固件方法可以参考 iStoreOS 的刷固件方法：[R5S/R5C刷固件方法](/zh/guide/istoreos/install_r5s.html)

## 二、设置代理（可选项）

如果网络不好，最好设置下代理，比如在终端设置下面的代理：（注意 192.168.100.1 换成自己合适的IP）

```
export http_proxy="http://192.168.100.1:1081"
export https_proxy="http://192.168.100.1:1081"
```

默认是 debian 系统，给 apt 也设置的代理：

创建 /etc/apt/apt.conf.d/proxy.conf：
```
vi /etc/apt/apt.conf.d/proxy.conf
```

在文件中写入一下内容：
```
Acquire {
  HTTP::proxy "http://192.168.100.1:1282";
  HTTPS::proxy "http://192.168.100.1:1282";
}
```

## 三、串口或ssh安装pikvm

```sh
sudo apt install -y git
git clone http://github.com/jacobbar/fruity-pikvm
cd fruity-pikvm
./install.sh
reboot
```

## 四、通过浏览器访问

URL：https://192.168.1.104/

用户名：admin

密码：admin

错误：500 Internal Server Error

此时还无法访问，还需要下面的步骤进行修改。

也可以看看日志有啥问题不？
```sh

#查看配置
cat /etc/kvmd/main.yaml

#查看log
journalctl -f

```

```sh
RuntimeError: Can't find any UDC
```

## 五、dtb overlay

换一下 dts，具体更好方法如下：

```sh
cd /boot/dtb/rockchip
#反编译设备树文件
dtc -I dtb -O dts rk3568-nanopi-r5s.dtb -o rk3568-nanopi-r5s.dts
#然后编辑dts文件查找usb@fcc00000修改下面的dr_mode选项为"peripheral"
vi rk3568-nanopi-r5s.dts
cp rk3568-nanopi-r5s.dtb rk3568-nanopi-r5s.dtb.bak
#编译设备书文件，一大串Warning是正常的
dtc -I dts -O dtb rk3568-nanopi-r5s.dts -o rk3568-nanopi-r5s.dtb
sync
reboot
```
## 六、接线

USB OTG 接口（也就是刷机用的接口）用 USB 线接另外的主机的 USB 线。
另外一个 USB 接口则接 USB-HDMI 线，接入 HDMI 到小主机中。

具体购买的数据线参考：
![USB-HDMI线]((/zh/guide/istoreos/image/usb-hdmi.jpg))


如果搞不定的话，可以等待未来 iStoreOS 的 PiKVM 插件。