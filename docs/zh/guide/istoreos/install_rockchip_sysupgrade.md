# Rockchip 机型 USB 线刷标准固件教程
此教程用于将标准 OpenWRT/iStoreOS 格式固件刷写到 eMMC 上（固件扩展名是 `.img.gz`，实际是 gzip 压缩后的磁盘镜像，官方说法是 sysupgrade 固件）。

注意 Rockchip 除了标准 OpenWRT 格式固件外，还有 RK 私有的固件格式，扩展名是`.img`，不适合此教程。

## 1.下载固件
根据具体机型的文档，下载 `.img.gz` 固件，**下载以后需要解压！！！**

**注意！！**：只有 USB 线刷才需要解压 `.img.gz` 固件，以后在网页上升级固件的时候不需要解压，直接上传 `.img.gz` 固件即可。

解压以后虽然扩展名可能是 `.img` ，但不要跟前面提到的 RK 私有格式混淆。

## 2.安装驱动跟刷机软件

* 准备 USB 公对公数据线（部分机型使用 Type-C 数据线即可）

![usb.jpeg](./install/usb.png)

* 下载[DriverAssitant](https://fw.koolcenter.com/binary/other-tools/DriverAssitant_v5.1.1.zip) 并安装：

![drive.png](./install/r68s/drive.png)

* 下载[刷机软件](https://fw.koolcenter.com/binary/other-tools/RKDevTool_Release_v2.86.zip)

## 3.设备进入 Loader 模式

* 解压并运行 RKDevTool (瑞芯微开发工具) 
* 先断开电源适配器连接
* 对于有 Type-C 口的设备就用 Type-C 口与 PC 连接。 对于没有 Type-C 口的设备，将 USB 公对公数据线一端连接 PC，一端连接设备上印有 OTG 标志的 USB 接口，如果没有标志，那就把 USB 3.0 接口都试试
* 按住设备上的 RECOVERY （恢复）键并保持不松开（部分设备可能叫升级键或 Maskrom ）
* 接上电源
* 大约两秒钟后，松开按键
* 如果瑞芯微开发工具中显示 “发现一个 Loader 设备” 或者  “发现一个 Maskrom 设备” ，说明已经成功进入刷机模式。如果没发现设备，那就换其他 USB 口试试。

![step1.png](./install/r68s/step1.png)

## 4.刷入固件
1. 如果是 Loader 设备，则点击进入 Maskrom 模式，否则直接下一步；
  ![step2.png](./install/r68s/step2.png)
2. 加载固件并执行刷写（**注意！！**：Loader 这一行默认选择的是 RK3568/RK3566 的，如果是 RK3588/RK3582 机型，需要将 Loader 这一行改成 RK3588_MiniLoaderAll.bin，如果刷机工具里没这个文件，请重新下载刷机工具；以此类推，如果是 RK3528 机型，需要将 Loader 这一行改成 RK3528_MiniLoaderAll.bin）；
  ![step3.png](./install/r68s/step3.png)
3. 刷写完会自动重启。

### 进入后台管理
* 默认IP http://192.168.100.1/ 或者 http://iStoreOS.lan/
* 默认密码：password
* 如果设备只有一个网口，则此网口就是 LAN 并且是 DHCP 客户端模式；如果大于一个网口，默认第一个网口是 WAN 口，其它都是 LAN。
* 如果要修改 LAN 口 IP，首页有个内网设置，或者用命令 quickstart 修改。
* 必读一轮我们的 [FAQ](/zh/guide/istoreos/question.html)，后续出现问题知道如何解决！

