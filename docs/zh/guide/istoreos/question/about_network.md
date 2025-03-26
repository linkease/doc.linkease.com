## Merlin 跟 iStoreOS 的旁路由设置

视频教程：[iStoreOS 旁路由](https://www.bilibili.com/video/BV1pY411N7fX)。

## 旁路由 DHCP 设置

如果主路由打开 DHCP，则需要把 DHCP 的网关改成旁路由的网关。要不就关闭主路由 DHCP，打开旁路由 DHCP。一个局域网不能同时存在两个DHCP。

## iStoreOS 作为主路由，如果要让无线路由器底下的设备跟 iStoreOS 一个局域网

需要把无线路由器设置为 AP 模式

## 如果是 Mesh 路由器，比如 AIMesh，或者 Orbi，可以把 AIMesh 工作在 AP 模式，AiMesh 依然有效

## Orbi 跟 iStoreOS 的组网教程

## 只有一个 LAN 口的时候，只能走旁路由配置向导，设置为固定 IP

比如用的是树莓派等设备，如果只有 LAN 口，则需要用电脑先接到旁路由，再通过向导只能配置为旁路由形态。

如果不懂的话，就按下面的图片进行配置：（配置完成之后，电脑就没网络了，必须把树莓派接到路由器下面再用新的 IP 链接）

![transparent-raspi.png](./transparent-raspi.png)

## 旁路由设置完成之后，下面的设备无法上网

首先推荐走旁路由设置向导，出问题的概率就很低了。如果出现这样的问题，可能性一：

![transparent-lan-gateway.png](./transparent-lan-gateway.png)

"网络" -> "接口" -> "LAN" 使用默认网关确保打勾。

可能行二，你使用的小米等的主路由导致的问题，尝试解决：

![lan-dnsmasq.png](./lan-dnsmasq.png)

"网络" -> "防火墙" -> "区域里面的LAN" 把 "IP 动态伪装"	打勾

## 软件更新之后，界面错乱

![istorex-update-error.png](./istorex-update-error.png)

浏览器缓存问题。可以尝试 ctrl + F5 强制刷新，如果还不行，可以 F12 进到弹出来的菜单：

"网络" -> "停用缓存" 打勾，之后再刷新网页。好了之后，再按 F12 关闭窗口。

如果是很老的浏览器，考虑切换到 chrome 浏览器试试

## 阿里云盘或者 Jellyfin 等插件导致内测 100% 或者 CPU 居高不下

首页进到终端，用 top 等相关的命令自行排查

## Jellyfin/Emby/Plex 核心显卡驱动支持

如果部分较新的 CPU，比如 N5105 的核显支持，可以尝试下载[iStoreOS_22.03 测试版固件](https://github.com/istoreos/istoreos/issues/716)。Linux 内核是 5.10 版本。

## Win10无法访问部分Samba服务器的解决方案

* 依次打开“控制面板 -> 程序 -> 程序和功能”， 点击“启用或关闭Windows功能 -> SMB1.0/CIFS文件共享支持”；

![smb](./smb1.jpg)

* 按下【win】+【R】键，然后输入“gpedit.msc”回车进入组策略界面；

![smb](./smb2.jpg)

然后“计算机配置 -> 管理模板 -> 网络 -> Lanman工作站 -> 启用不安全的来宾策略”；

![smb](./smb3.jpg)

* 注册表编辑器 -> 
```
\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LanmanWorkstation\Parameters
```
找到“AllowInsecureGuestAuth”这个值，然后数值数据改为1。

若无，则新建DWORD(32位)值，名称为“AllowInsecureGuestAuth”，然后数值数据改为1。

![smb](./smb4.jpg)