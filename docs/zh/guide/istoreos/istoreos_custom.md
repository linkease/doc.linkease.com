## 定制固件

如果想自己制作固件，也是可以的。

iStoreOS 来源于官方的 OpenWRT Release 分支源码，都是通过 OpenWRT 标准组件形式实现，100% 兼容 OpenWRT 的源主干分支。我们修改或者开发的部分，都以插件形式，具体源代码如下：

* [iStoreOS 固件](https://github.com/istoreos/istoreos) 核心固件源代码
* [nas-packages-luci](https://github.com/linkease/nas-packages-luci) 我们自己开发的插件 UI 代码
* [nas-packages](https://github.com/linkease/nas-packages) 我们自己开发插件的程序代码，部分程序并不开源
* [istore](https://github.com/linkease/istore) 软件中心核心代码，包含备份插件功能等，全部开源
* [istore-packages](https://github.com/linkease/istore-packages) 软件中心的一些非 OpenWRT 官方包
* [openwrt-app-actions](https://github.com/linkease/openwrt-app-actions) 其他一些软件包

iStoreOS 就是在 OpenWRT 最基础最原始的固件基础上，加上了上面插件的能力来实现。

## 编译参考

请动手能力强的人自己编译固件，跟标准 OpenWRT 一样。

## 离线包制作

iStoreOS离线包不是一个压缩包，也没啥黑科技，而是借助第三方软件实现。原理是[makeself项目](https://github.com/megastep/makeself)：

生成方法例子：
```
./makeself.sh --nox11 ./xxx ./out/xxx_x86.run "OneClick install" ./install.sh
```

install.sh脚本内容大致为：
```
opkg update
opkg install *.ipk
```

把 ipk 跟 install.sh 结合在一起，本质会生成一个包含所有 ipk 跟 install.sh 的自解压自运行的程序。
