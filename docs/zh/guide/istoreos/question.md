## 最重要的写在最前面

* 如果用 Docker 插件，必须在首页用 Docker 迁移向导，迁移到非根目录的独立的硬盘分区
* 如果喜欢折腾，或者不会卸载手动安装的插件，必须开启沙箱模式。如果安装失败，可以通过沙箱模式回退到上个版本，插件根配置都不丢！
* 不要运行 opkg install curl，以免更新到不兼容的版本。
* 不了解的情况下不要更新系统软件包，也就是不要执行 opkg upgrade，也不要在后台的软件包那边升级不是自己安装的软件包，以免升级到有bug或者不兼容的版本，导致系统故障。实在手痒可以用沙箱模式来测试。
* 手动安装插件有依赖错误，则去寻找 .run 的自带依赖的插件包。（记得在沙箱模式下安装，出问题可以回退到上个版本）
* 旁路由设置问题，建议走旁路由设置向导。如果是小米路由器作为主路由，则建议往下读

如果用了上面的方法，几乎不会出现啥问题了。下面是遇到问题之后的解决办法！

视频教程：
<iframe src="//player.bilibili.com/player.html?aid=402694106&bvid=BV1kV411u71V&cid=1176164520&page=1" allowfullscreen="allowfullscreen" width="100%" height="500" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"> </iframe>

## 安装系统

### 刚开始安装显示 Docker Warning

![docker-failed.png](./question/docker-failed.png)

这个警告没事，直接按回车（Enter）就可以进到命令行里面进行进一步的操作了。

是因为它推荐把 Docker 数据独立迁移到非根目录的另外一个硬盘分区。安装完全之后，建议把 Docker 迁移。首页有向导可以迁移。

### 无网卡驱动

![install-failed-no-interfaces.png](./question/install-failed-no-interfaces.png)

说明我们固件很可能没有支持你的网卡的驱动，那么安装失败了。看看是不是下载到了老的固件，或者升级到更新的固件试试？
如果知道驱动的包名，可以尝试在软件包里面搜索安装（RK35XX机型不支持自己安装驱动）。

### 安装系统，提示 root not found

* 可能一，就是系统的硬盘不识别，或者找不到，导致无法从 U 盘继续安装系统。
* 可能二，以前已经安装过系统，U 盘的系统跟系统盘的系统冲突了。需要把系统盘进行檫除掉，比如乱分区成多个分区，再把分区删除，甚至放到 Windows 上清楚硬盘里面的数据。（这个目前我们还在寻找更好的办法）

可以参考其他人的 OpenWRT 的安装教程，必须通过 winpe 来安装试试

### 系统根目录只有 2G，需要拓展系统空间

我们系统的设计，是觉得不需要拓展系统空间，你只需要：

1. 用首页向导，把 Docker 迁移到独立的硬盘分区
2. 开启沙箱模式，所以的软件，都会安装到沙箱的硬盘空间，如果软件错误还可以回退。提交之后才会到把增量的存到系统目录。担心根目录不够可以一直不提交到根目录，数据就一直再沙箱空间的分区里。
3. 下载工具不要把文件保存在根目录或者/tmp，而是保存在硬盘上

## 安装软件

### 空间不足导致插件无法安装

![app-no-space.png](./question/app-no-space.png)

因为系统根目录里面的 Docker 没迁移走，或者 Docker 映射的目录设置到了 /root 下面，或者易有云的初始目录到 /root 下面

* Docker 要迁移到一个独立的硬盘分区。首页有迁移向导。
* 如果其它插件把数据目录放到了根目录，则需要停止这个插件，再删除，再重新配置
* 如果没有把易有云的初始目录配置到硬盘上，需要删除易有云重新配置

### 插件安装提供 DNS 错误

![dns-failed.png](./question/dns-failed.png)

* 可能你的旁路由，或者路由器里面 DNS 配置错误。可以在首页手动设置 DNS，可以从这里选择：223.5.5.5 223.6.6.6 114.114.114.114
* 可能你的旁路由的使用默认网关没打勾，具体可以网络里面的“旁路由”
* 可能你的旁路由里面本身没网络，或者局域网里面有两个以上的 DHCP 服务器（多个路由器的 LAN 口接到网络里），导致 dnsmasq 没启动，所以无法进行 DNS 解析。这个可以看系统日志，确认是否有多个 DHCP 服务器的错误提示。

### 首页提示软件源错误

* 参考上文 curl 错误，需要手动运行 reset_rom_pkgs 恢复被修改的系统包
* DNS 解析走了 IPv6，导致出现一些问题，可以安装 Systools 系统便利工具，关闭 IPv6
* 可能路由器的内部的网络走了国外线路，而且网络不稳定，所以有时候会出现软件源错误。可以忽略。


## 网络向导

### Merlin 跟 iStoreOS 的旁路由设置

视频教程：[iStoreOS 旁路由](https://www.bilibili.com/video/BV1pY411N7fX)。

### 旁路由 DHCP 设置

如果主路由打开 DHCP，则需要把 DHCP 的网关改成旁路由的网关。要不就关闭主路由 DHCP，打开旁路由 DHCP。一个局域网不能同时存在两个DHCP。

### iStoreOS 作为主路由，如果要让无线路由器底下的设备跟 iStoreOS 一个局域网

需要把无线路由器设置为 AP 模式

### 如果是 Mesh 路由器，比如 AIMesh，或者 Orbi，可以把 AIMesh 工作在 AP 模式，AiMesh 依然有效

### Orbi 跟 iStoreOS 的组网教程

TODO

## 更多网络

### 只有一个 LAN 口的时候，只能走旁路由配置向导，设置为固定 IP

比如用的是树莓派等设备，如果只有 LAN 口，则需要用电脑先接到旁路由，再通过向导只能配置为旁路由形态。

如果不懂的话，就按下面的图片进行配置：（配置完成之后，电脑就没网络了，必须把树莓派接到路由器下面再用新的 IP 链接）

![transparent-raspi.png](./question/transparent-raspi.png)

### 旁路由设置完成之后，下面的设备无法上网

首先推荐走旁路由设置向导，出问题的概率就很低了。如果出现这样的问题，可能性一：

![transparent-lan-gateway.png](./question/transparent-lan-gateway.png)

"网络" -> "接口" -> "LAN" 使用默认网关确保打勾。

可能行二，你使用的小米等的主路由导致的问题，尝试解决：

![lan-dnsmasq.png](./question/lan-dnsmasq.png)

"网络" -> "防火墙" -> "区域里面的LAN" 把 "IP 动态伪装"	打勾

### 软件更新之后，界面错乱

![istorex-update-error.png](./question/istorex-update-error.png)

浏览器缓存问题。可以尝试 ctrl + F5 强制刷新，如果还不行，可以 F12 进到弹出来的菜单：

"网络" -> "停用缓存" 打勾，之后再刷新网页。好了之后，再按 F12 关闭窗口。

如果是很老的浏览器，考虑切换到 chrome 浏览器试试

### 阿里云盘或者 Jellyfin 等插件导致内测 100% 或者 CPU 居高不下

首页进到终端，用 top 等相关的命令自行排查

### Jellyfin/Emby/Plex 核心显卡驱动支持

如果部分较新的 CPU，比如 N5105 的核显支持，可以尝试下载[iStoreOS_22.03 测试版固件](https://github.com/istoreos/istoreos/issues/716)。Linux 内核是 5.10 版本。

### Win10无法访问部分Samba服务器的解决方案

* 依次打开“控制面板 -> 程序 -> 程序和功能”， 点击“启用或关闭Windows功能 -> SMB1.0/CIFS文件共享支持”；

![smb](./question/smb1.jpg)

* 按下【win】+【R】键，然后输入“gpedit.msc”回车进入组策略界面；

![smb](./question/smb2.jpg)

然后“计算机配置 -> 管理模板 -> 网络 -> Lanman工作站 -> 启用不安全的来宾策略”；

![smb](./question/smb3.jpg)

* 注册表编辑器 -> 
```
\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LanmanWorkstation\Parameters
```
找到“AllowInsecureGuestAuth”这个值，然后数值数据改为1。

若无，则新建DWORD(32位)值，名称为“AllowInsecureGuestAuth”，然后数值数据改为1。

![smb](./question/smb4.jpg)

## 硬盘挂载

### 如果硬盘格式是 NTFS 格式，可能导致数据写入错误

此时可能需要重启，或者建议直接将硬盘格式化成 EXT4 ，EXT4 格式与系统兼容性最佳。

### 如果 首页-磁盘信息 无法挂载硬盘，挂载时报错

需要到高级模式，系统-磁盘管理 把分区删除，重新挂载，如果分区无法删除，可能因为硬盘正在被挂载，而且正在被其他硬盘使用。

### 为什么需要进行docker迁移？

务必记得把 docker 迁移到其他 EXT4 的文件格式的分区，因为安装 docker 软件会占用大量根目录的空间，如果不小心把根目录空间搞满了会影响系统的正常运行。

### Samba 如果出现无法访问，且确认配置正常

尝试重启电脑再来访问试试。

### Samba 共享在电脑上上传文件提示空间不足，但是硬盘空间足够

这是因为Windows会按共享文件夹的根目录大小计算容量，如果你共享文件夹的是/mnt，那就会认为只有4MB。

如果打算在电脑上上传文件，就不要共享/mnt，而是共享/mnt里面的硬盘挂载点。

如果只是读Samba共享的文件，那共享/mnt是没问题的。

### 可以不考虑硬盘休眠

对硬盘没啥伤害。可能会有点噪声，且耗电。

### 需不需要加风扇？

如果做视频硬解码，考虑加风扇，因为 CPU 会比较热。

## 界面变英文

#### 原因：

因为一些插件不兼容，破坏了语言。

#### 解决方法：

重启系统，重启就会自动修复。

## Docker 相关

iStoreOS 很多的插件都是基于 Docker 开发的，因为对 Docker 的不理解，导致安装 Docker 插件出问题之后不知所措。  
Docker 可以简单理解为跟 iStoreOS 共用系统内核，共享系统硬件的“虚拟机”。所以它的性能无限接近真实的宿主主机（也就是 iStoreOS）。

### Docker 核心逻辑

* Docker 的“虚拟机 ”系统，也叫“镜像”需要通过网络下载到本地
* Docker 镜像下载很慢，所以有了多个 Mirror 地址，也可以称之为镜像源
* Docker 镜像一直有人更新维护，所以它也有版本号，最新的也就是 latest
* Docker 镜像安装的时候，需要配置很多参数，比如存储路径，网络，DNS 等等。（iStoreOS Docker 插件自动做了这些配置，不需担心）
* Docker 镜像安装完成之后，相当于跑了一个新的用户态系统，也称之为容器实例
* 因为有版本的存在，有时候从镜像源下载到的镜像，它可能不是最新版本的，这个时候可以选择指定版本来下载（参考网心云镜像选择）
* 如果不知道版本号，也可以强制使用特定的镜像源的最新版本（参考网心云镜像选择）

### 网络超时，网络下载太慢

![超时错误](./question/docker-failed-1.jpg)

换镜像源，或者升级自己的网络。

### 更新 lastest，竟然还是旧的版本。或者安装到错误的版本

可以指定从官方镜像源下载，或者指定最新的版本号下载镜像，或者在Docker配置页面删掉“注册表镜像”（其实就是镜像仓库的 Mirror）

### Docker 把系统盘整满了，导致其它配置保存错误

必须把 Docker 迁移到 EXT4 文件系统的非系统盘上

### 其它奇怪的问题

其它奇怪的问题，比如：
```
docker: Error response from daemon: failed to update store for object type *libnetwork.endpointCnt: Key not found in store.
```

可以考虑到 iStoreOS 首页，停止 Docker 服务，然后再重新启用一次。

### 网心云镜像选择参考

![镜像选择参考](./question/docker2.png)

## 其它

### iStoreOS 遵守开源协议

iStoreOS 目标做个国内外都合法的固件，这样企业才能更安全的使用 iStoreOS。代码开源地址：[iStoreOS](https://github.com/istoreos/istoreos)

我们努力做到这一点，如果觉得有任何疑问，可以到官方咨询或者告知我们。

### iStoreOS 没进行魔改

完全兼容官方仓库，也就是 OpenWRT 官方编译的软件包。目前已知的问题是不能安装 curl，会导致冲突，是官方包依赖的问题。
同时把我们的 luci-app-quickstart luci-app-linkease luci-app-ddnsto luci-app-store 等插件删除，那么就是接近纯净的 OpenWRT 固件。

## 问题自己调试方法

有时候，硬盘掉盘了，或者无法识别某个硬件了，文件共享失败了等等，都可以自行排查下可能出现问题的原因？

* 查看系统日志，在 "状态" -> "系统日志" 里面
* 查看内核日志，在 "状态" -> "内核日志" 里面
* chrome 等浏览器，按 F12 查看弹出的界面的 "控制台"  或者 "网络" 否是出现奇怪的异常

如果实在无法解决，可以考虑：

* "系统" -> "重启"
* 升级到最新版本
* "系统" -> "备份/升级" -> "执行重置"
* 如果有沙箱模式，可以考虑回退到上个版本。（不提交才能回退，提交了就无法回退了，所以要确保系统稳定了再提交）



