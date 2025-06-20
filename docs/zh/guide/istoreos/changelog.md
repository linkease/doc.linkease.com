> 最新更新日志请前往 [GitHub](https://github.com/istoreos/istoreos/discussions/categories/announcements?discussions_q=label%3Arelease+category%3AAnnouncements+sort%3Adate_created) 查看

## v24.10.1 - 20250620

**跨大版本升级说明**
* 这是 24.10，从 22.03 升级的话，升级前做好备份。如果要备份所有插件和配置文件，可以参考这个[视频](https://www.bilibili.com/video/BV1eFJVzbEjU/?t=181)  ，这个备份可能要花几分钟时间。如果只需要备份配置文件，可以使用系统原生的备份功能，例如 http://istoreos.lan/cgi-bin/luci/admin/system/flash 。

* 升级前，最好先执行下修复系统组件：从iStore安装“系统便利工具”，打开，选择“修复系统软件”，执行。

* 防火墙切换到 nftables，有些插件可能不兼容，或者插件需要手动选择防火墙类型。
* 如果状态-防火墙页面显示“系统上存在旧版 iptables 规则。 不鼓励混合使用 iptables 和 nftables 规则，这可能会导致流量过滤不完整。”，如果有基于防火墙的透明代理/去广告/网络管控插件，更新到最新版本，插件中选择防火墙类型 nftables。其他统计类插件一般可以忽略此提醒。目前“简单网络管控”插件不兼容，等未来更新。

* socat更新支持了fw4，但是版本号命名规范变了，必须从istore卸载重装，配置会保留的。

* tailscale插件也支持了fw4，如果不确定是否最新版本可以卸载重装。tailscale有bug，即使是nftables模式下依然会有2条规则写到iptables，但是不影响使用，所以忽略防火墙“系统上存在旧版 iptables 规则...”的提示。

* 如果从 22.03 升级还有严重兼容性问题，建议备份配置文件，然后不保留配置升级，之后再恢复配置并安装新的插件。

（此说明可能会持续一段时间，如果已经升级 24.10 可忽略）

* **本次更新主要是增加了RK3582的支持**

**应用**
* 应用过滤（OpenAppFilter）： 修复未启用时，每分钟会打印几条日志的问题 [升级到24.10.01 2025060614系统日志一直提示daemon.err oafd #2412](https://github.com/istoreos/istoreos/issues/2412)

**设备**
* Rockchip方案所有机型：固件MBR的ID改成由编译配置的MD5产生，而不是固定值。这样可以避免在sd卡启动时加载到emmc的系统文件，导致内核与系统版本不匹配。简单来说，内核从哪加载，系统文件也应该从哪加载。常见的场景是emmc里面安装22.03固件，sd卡安装了24.10固件，修复前，内核从sd卡加载，但是系统文件却可能从emmc加载，修复以后则从同一个地方加载内核和系统文件（除非emmc和sd卡都刷了完全一样的固件）
* 新增RK3582支持：RK3582系列自动开核，目前已支持Radxa E52C/E54C两款机型，支持程度跟RK3588一致。注意，从22.03升级的话，不会自动开核，因为bootloader是不会升级的，而开核功能完全在bootloader内实现，下面提供bootloader的单独升级方法 [关于 radxa E52c等搭载RK3582 rockchip的开核支持 #2197](https://github.com/istoreos/istoreos/issues/2412)

**RK3582单独升级uboot（bootloader）的方法**

下载机器对应的uboot升级文件：
```
E52C: e52c-istoreos-bootloader-unlock-cores.run
E54C: e54c-istoreos-bootloader-unlock-cores.run
```
检查文件md5确保文件完整：
```
158dcd189255a7b1a62b4d7ab3ba9ec7  e52c-istoreos-bootloader-unlock-cores.run
451b4d60bb03c1ff6a158e80bbc7f0e7  e54c-istoreos-bootloader-unlock-cores.run
```
打开iStore的手动安装页面，将uboot升级文件当成.run安装即可。安装成功的话，下次重启就会生效了。

PS：理论上22.03也可以使用这个方式开核，但没测试过。

**其他**
* RK3528进展：从上游最新内核移植，gmac（原生千兆网卡），sd，emmc正常可用，pcie不可用，usb未移植。由于RK3528机型基本使用pcie扩展一个网口，pcie不可用影响很大，但是上游内核尚未支持pcie，且根据Rockchip厂商内核打的pcie补丁也不能正常工作（速度只有pcie1.0，且开启pcie会导致gmac无法发送数据）。总之，RK3528的升级继续延期。目前Radxa E20C已经可以正常编译启动，但就像前面说的，pice和usb不可用







## v24.10.1 - 20250523

**跨大版本升级说明**
* 这是 24.10，从 22.03 升级的话，升级前做好备份。如果要备份所有插件和配置文件，可以参考这个视频 https://www.bilibili.com/video/BV1eFJVzbEjU/?t=181 ，这个备份可能要花几分钟时间。如果只需要备份配置文件，可以使用系统原生的备份功能，例如 http://istoreos.lan/cgi-bin/luci/admin/system/flash 。

* 升级前，最好先执行下修复系统组件：从iStore安装“系统便利工具”，打开，选择“修复系统软件”，执行。

* 防火墙切换到 nftables，有些插件可能不兼容，或者需要手动选择防火墙类型。
如果状态-防火墙页面显示“系统上存在旧版 iptables 规则。 不鼓励混合使用 iptables 和 nftables 规则，这可能会导致流量过滤不完整。”，如果有基于防火墙的透明代理/去广告/网络管控插件，更新到最新版本，选择防火墙类型 nftables。其他统计类插件（例如“实时流量”插件）一般可以忽略此提醒。目前“简单网络管控”插件不兼容，等未来更新。

* socat端口转发已经不再是必须的，现在的防火墙已经支持ipv4和ipv6之间互相转发，socat插件完全失去了原来的独特优势。

（此说明可能会持续一段时间，如果已经升级 24.10 可忽略）

* 对于 ImageBuilder 的用户或开发者：

-22.03 的 ImageBuilder 从这里下载 https://fw.koolcenter.com/iStoreOS-22.03/ib/

-24.10 中，rk33xx 和 rk35xx 合并成 rk3xxx

**系统**
* 基于 OpenWRT 24.10.1
* Linux 内核升级到 6.6
* 为防止用户不改默认密码导致中毒，现在没有默认密码，登录网页后台或者 SSH 都会提示设置密码。如果从 22.03 保留配置升级，可能会保留之前的密码，也就是说要么是之前的密码，要么是空。如果密码为空请务必设置密码
* 防火墙切换到 nftables，有些插件可能要自己选择防火墙类型
* nftables 上独家移植 “高性能 FullconeNAT”（BRCM-FullconeNAT），之前版本的另一个 “兼容模式” FullconeNAT 由于性能差未移植（虽然叫“兼容模式”，不过应该兼容性一样）
* 内核开启 BPF，以支持某些特殊应用 希望24.10构建时加入以下配置以兼容软件包 #2054





## v22.03.7 - 20250516

**应用**
* iStore: 更新到最新版本，以支持系统备份还原功能，可以将系统配置、已安装的软件包（不限于 iStore 来源）、甚至沙箱，都备份到外部存储，方便在不同固件版本间切换时尽快恢复到工作状态

**设备**
* x86: 内核启用 PCI mmconfig，以支持某些设备的 SR-IOV 功能，例如 Intel 12 代以上核显（N100以上）


## v22.03.7 - 20250509

* 24.10 还有部分机型未完成适配，继续更新 22.03。

* 22.03 从这个版本开始会切换到不同的 OTA 路径 https://fw.koolcenter.com/iStoreOS-22.03/ ，以支持后续单独更新。升级到此版本以后，将不会收到 24.10 的 OTA，之后如果要升级 24.10 ，需要手动下载固件。

* 系统
发现部分运营商的 IPv6 会下发 IPv6 地址的 DNS 服务器，当 iStoreOS 的 RA/DHCPv6 模式为中继时，会将此 DNS 服务器通告给内网客户端，可能导致客户端绕过 iStoreOS 提供的 DNS 服务，进而导致透明代理/去广告插件失效。现在 RA/DHCPv6 的中继模式，遇到上游通告的 DNS 服务器时，默认会替换成 iStoreOS 自身的本地 IPv6 地址再转发给客户端，防止此类 DNS 服务被绕过问题。

-如果明确需要通告运营商提供的 DNS 服务器给内网客户端，在后台的 网络-接口，编辑 LAN，DHCP服务器-IPv6设置，取消勾选“本地 IPV6 DNS 服务器”即可。


## v22.03.7 - 20250407

* 临时更新 20250407：修复上个版本 WAN 如果从默认的 DHCP 客户端切换到 PPPoE，LAN 不会分配 IPv6 的问题（“系统便利工具”也能解决此问题）。


## v22.03.7 - 20250403

**系统**
* IPv6: 默认情况下，IPv6是中继模式，LAN 口可能分配到 ULA 地址，对于某些系统如macOS，可能不会响应 ULA 来源的 NS 请求，导致无法联网（这时Ping一下网关就通网了）。现在改为 LAN 口默认只能从 WAN6/WAN_6 的 PD 地址分配。
一般情况下，即使 WAN6 没有 PD 地址，LAN 口无 IPv6 地址，局域网内还是能分配到 IPv6 地址，无需 NAT6。
如果的确需要配置 NAT6，请使用 iStore 提供的最新版“系统便利工具”；如手动配置 NAT6 或者其他原因 LAN 需要 ULA，将 LAN 口高级设置“IPv6 前缀过滤器”列表清空即可。

**应用**
* QuickStart：现在可以关闭自动检查固件更新（更新按钮下拉菜单配置）
* Argon 主题：

-多tab页面存在配置错误时，在tab上显示错误数量，方便用户找到错误位置

-修复深色模式下输入框错误未转红的问题

-修复一个XSS漏洞 被网安扫了，发现一个漏洞并判定为高危。。。请求修复，ths #2131

**设备**
rk35xx:

-rknpu 驱动更新到最新版本

-新增 Radxa E54C

-EasePi R1 优化网口灯配置，但这会导致千兆版本的R1两个网口灯灭掉，千兆版本手动更新到此固件即可恢复正常
