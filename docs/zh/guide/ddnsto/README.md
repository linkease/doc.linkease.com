# DDNSTO

DDNSTO 是一款稳定、快速、简单易用的内网穿透工具。
让用户在公司、旅行途中都能够使用浏览器方便的访问家庭内的网络设备。

**DDNSTO 的优秀之处：**

* 无需公网 IP，不被网络环境限制
* 无需购买域名或服务器，省去了服务器年费和带宽要求以及域名购买、备案等等繁琐操作
* 全部的安装、配置、使用都可在浏览器完成，不需要敲一行代码，对小白用户非常友好
* 支持http2，访问家庭内部网络速度更快
* 独家的远程应用中心，让远程电脑桌面、远程下载、远程文件管理等多种丰富的功能在浏览器上就可以实现

**重点功能：**

* [域名映射](/zh/guide/ddnsto/start.md)，一个浏览器远程访问NAS、路由器、docker等；
* [远程应用](/zh/guide/ddnsto/cloudapp.md)，玩转远程下载、远程SSH、远程Windows桌面、远程开机；
* [文件管理](/zh/guide/ddnsto/ddnstofile.md#文件管理)，支持访问samba、sftp、webdav等协议。

### DDNSTO支持的设备/系统：

* A：扩展功能之文件管理、B：扩展功能之WebDav服务、C：扩展功能之远程开机

* 某些设备/系统不能完整支持所有的扩展功能，如群晖/威联通只支持文件管理。

| 设备/系统 | 安装教程 | 最新版本 | 扩展功能 | 版本升级注意 |
|-|-|-|-|-|
|EasePi| [详细教程](/zh/guide/ddnsto/install/device/easepi.html) | v3.0.2 | **<font color=#008000 >A、B、C</font>** | iStore商店直接升级 |
|iStoreOS| [详细教程](/zh/guide/ddnsto/install/device/istoreos.html) | v3.0.2 | **<font color=#008000 >A、B、C</font>** | iStore商店直接升级 |
|Koolcenter 梅林 ≥386| [详细教程](/zh/guide/ddnsto/install/device/koolcenter_merlin.html) | v3.0.3 | **<font color=#008000 >A、B、C</font>** | 软件中心直接升级 |
|Koolcenter 梅林 <386| [详细教程](/zh/guide/ddnsto/install/device/koolcenter_merlin.html) | v3.0.0 | **<font color=#008000 >A</font>** | 软件中心直接升级 |
|Koolcenter Lede| [详细教程](/zh/guide/ddnsto/install/device/koolcenter_lede.html) | v3.0.2 | **<font color=#008000 >A、B、C</font>** | iStore商店直接升级 |
|OpenWrt| [详细教程](/zh/guide/ddnsto/install/device/openwrt.html) | v3.0.2 | **<font color=#008000 >A、B、C</font>** | 覆盖安装新版 |
|群晖| [详细教程](/zh/guide/ddnsto/install/device/synology.html) | v3.0.6 | **<font color=#008000 >A</font>** | **<font color=#ff0000 >卸载旧版安装新版 </font>**|
|威联通| [详细教程](/zh/guide/ddnsto/install/device/qnap.html) | v3.0.5 | **<font color=#008000 >A</font>** | 覆盖安装新版 |
|Docker| [详细教程](/zh/guide/ddnsto/install/device/docker.html) | v3.0.0 | **<font color=#008000 >A</font>** | 新建docker容器 |
|Padavan| [详细教程](/zh/guide/ddnsto/install/device/padavan.html) | v0.2.9 | 暂未支持 | 跟随固件更新 |
|ReadyNAS| [详细教程](/zh/guide/ddnsto/install/device/ready_nas.html) | v0.3.38 | 暂未支持 | 覆盖安装新版 |
|爱快| [详细教程](/zh/guide/ddnsto/install/device/ikuai.html) | v3.0.0 | **<font color=#008000 >A</font>** | 新建docker容器 |
|Unraid| [详细教程](/zh/guide/ddnsto/install/device/docker.html) | v3.0.0 | **<font color=#008000 >A</font>** | 新建docker容器 |
|铁威马| [详细教程](/zh/guide/ddnsto/install/device/docker.html) | v3.0.0 | **<font color=#008000 >A</font>** | 新建docker容器 |
|Windows| [详细教程](/zh/guide/ddnsto/install/device/windows.html) | v3.0.5 | **<font color=#008000 >A、B</font>** | Windows客户端下载覆盖更新 |
|Linux| [详细教程](/zh/guide/ddnsto/install/device/linux.html) | v3.0.2 | **<font color=#008000 >A</font>** | Linux专用程序包下载覆盖更新 |
|极空间| [详细教程](/zh/guide/ddnsto/install/device/docker.html) | v3.0.0 | **<font color=#008000 >A</font>** | 新建docker容器 |

