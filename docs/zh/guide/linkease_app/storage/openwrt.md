*绑定设备前，请确保您已在路由器端接入容量不小于16GB的存储设备，如U盘，移动硬盘等；

**1.OpenWrt固件开发者众多，部分固件不自带易有云，可通过以下任一脚本轻松安装：**

   via curl
```
sh -c "$(curl -sSL http://fw.koolcenter.com/binary/LinkEase/Openwrt/install_linkease.sh)"
```
   via wget
```
sh -c "$(wget --no-check-certificate -qO- http://fw.koolcenter.com/binary/LinkEase/Openwrt/install_linkease.sh)"
```
   others
```
cd /tmp; wget --no-check-certificate http://fw.koolcenter.com/binary/LinkEase/Openwrt/install_linkease.sh; sh ./install_linkease.sh
```

**2.在OpenWrt TTYD终端中输入任一上述命令，会自动安装完成。**

![op1.jpg](./openwrt/op1.jpg)

![op2.jpg](./openwrt/op2.jpg)

**3.然后找到易有云，启用并应用保存，然后点击“打开易有云”。**

![op3.jpg](./openwrt/op3.jpg)

**4.或者putty、MobaXterm等软件登陆SSH，输入任一上述命令，会自动安装完成。**

**5.安装后第一次打开，需要绑定设备，请查看 [存储端绑定教程](/zh/guide/linkease_app/bind.md)。**