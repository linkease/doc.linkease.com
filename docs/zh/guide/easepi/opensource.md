## 构建固件

**建议有动手能力的伙伴们去自行DIY，也可以直接用官方提供的稳定固件。**

自定义OpenWrt固件，先下载[ImageBuilder和SDK](https://fw.koolcenter.com/binary/ars2/) 。


1.准备好安装Debian10 x64或者ubuntu等Linux发行版的电脑或虚拟机；

2.安装必要软件；
```
sudo -E apt-get update
sudo -E apt-get install build-essential asciidoc binutils bzip2 gawk gettext git libncurses5-dev libz-dev patch unzip zlib1g-dev lib32gcc1 libc6-dev-i386 subversion flex uglifyjs gcc-multilib g++-multilib p7zip p7zip-full msmtp libssl-dev texinfo libglib2.0-dev xmlto qemu-utils upx libelf-dev autoconf automake libtool autopoint device-tree-compiler antlr3 gperf
```

3.将ImageBuilder解压到非中文目录；

4.进入ImageBuilder，执行：
```
make image PROFILE=ars2
```

5.成功的话会在bin/targets/realtek/rtd129x/下生成*.install.img固件。




#### 扩展说明

1.如果需要控制打包到固件中的软件包，可以在make image时使用PACKAGES参数，例如想要增加luci-app-passwall，并删除luci-app-ttyd，则执行：
```
make image PROFILE=ars2 PACKAGES="luci-app-passwall -luci-app-ttyd -luci-i18n-ttyd-zh-cn"
```

2.默认的软件源只有ImageBuilder内置的，如果需要增加外部的软件源，可编辑ImageBuilder里的repositories.conf，例如增加Openwrt官方的软件源，则repositories.conf的内容如下:
```
src/gz openwrt_base http://downloads.openwrt.org/releases/19.07.7/packages/aarch64_cortex-a53/base

src/gz openwrt_packages http://downloads.openwrt.org/releases/19.07.7/packages/aarch64_cortex-a53/packages

src/gz openwrt_routing http://downloads.openwrt.org/releases/19.07.7/packages/aarch64_cortex-a53/routing


src imagebuilder file:packages
```

3.如果需要增加本地的软件源，则增加一行:src custom file:///usr/src/openwrt/bin/realtek/packages，例如增加已经编译好的lean的软件源(不要使用core和luci仓库，以免冲突):
```
src lean_base file:///home/build/lean-openwrt/bin/packages/aarch64_cortex-a53/base
```

> 更多信息参考OpenWRT官方文档 https://openwrt.org/zh/docs/guide-user/additional-software/imagebuilder

## 编译插件

1.将SDK解压到非中文目录；

2.进入SDK目录，可以在feeds.conf.default文件内加入自定义插件源：

比如加入：
```
src-git nas https://github.com/linkease/nas-packages.git;master
```

![img](./about/nas.jpg)

3.然后执行；

```
./scripts/feeds update -a

./scripts/feeds install -a

make menuconfig
```

执行过程中会弹出menuconfig配置界面，选择配置好要编译的插件；

4.再执行：
```
make -j8 download V=s  ##下载dl库(科学上网)
```

5.可以执行编译命令直接编译插件。

比如编译：
```
make package/luci-app-ddnsto/compile V=99
```

> 更多信息参考OpenWRT官方文档 https://openwrt.org/zh/docs/guide-developer/using_the_sdk
