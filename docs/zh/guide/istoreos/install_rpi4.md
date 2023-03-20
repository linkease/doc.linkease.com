# 树莓派 4 安装教程

## 1.下载固件

* [树莓派4固件下载](https://fw.koolcenter.com/iStoreOS/rpi4/)

越前面版本越新，请注意看中间的日期，比如 istoreos-x.x.x-**2023032001**-raspberrypi-rpi4-squashfs.img.gz。下载完成之后不需要解压。

## 2.刷写TF卡
参考[SD卡通用教程](/zh/guide/istoreos/install_sd.html)

### 注意事项

* 默认树莓派只有一个网口，这个网口默认为 LAN 口，必须接网线到 LAN 口进行网络配置，改为静态IP的旁路由（设置为旁路由，既可以当路由，也完全不影响独立当一台 NAS 用）
* 默认IP http://192.168.100.1
* 默认用户：root 密码：password

因为只有 LAN 口，则需要用电脑先接到树莓派，再通过旁路由向导设置为静态IP（关闭 DHCP）：

如果不懂的话，就按下面的图片进行配置：（配置完成之后，电脑就没网络了，必须把树莓派接到路由器下面再用新的 IP 链接）

![transparent-raspi.png](./question/transparent-raspi.png)

最后建议必读一轮我们的 [FAQ](/zh/guide/istoreos/question.html)，后续出现问题知道如何解决！
