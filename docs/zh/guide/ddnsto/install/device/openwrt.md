### OpenWrt

   OpenWrt固件开发者众多，部分固件不自带ddnsto，可通过以下任一脚本轻松安装：

   via curl
```
sh -c "$(curl -sSL http://fw.koolcenter.com/binary/ddnsto/openwrt/install_ddnsto.sh)"
```
   via wget
```
sh -c "$(wget --no-check-certificate -qO- http://fw.koolcenter.com/binary/ddnsto/openwrt/install_ddnsto.sh)"
```
   others
```
cd /tmp; wget --no-check-certificate http://fw.koolcenter.com/binary/ddnsto/openwrt/install_ddnsto.sh; sh ./install_ddnsto.sh
```
   在OpenWrt TTYD终端中输入任一上述命令，会自动安装完成。

   ![image-2021022400000003](./koolshare_merlin/image-2021022400000003.png)
   
   ![image-2021022400000004](./koolshare_merlin/image-2021022400000004.png)

   或者putty、MobaXterm等软件登陆SSH，输入任一上述命令，会自动安装完成。

   ![image-2021022400000005](./koolshare_merlin/image-2021022400000005.png)
   
   ![image-2021022400000006](./koolshare_merlin/image-2021022400000006.png)
 
   ![image-2021022400000007](./koolshare_merlin/image-2021022400000007.png) 

   然后找到DDNS.to内网穿透，启用并设置token。

   ![image-2021022400000008](./koolshare_merlin/image-2021022400000008.png) 

* OpenWrt新版的ddnsto插件界面已经更新，参考 [扩展功能](/zh/guide/ddnsto/ddnstofile.html) -->。 
   
#### Openwrt 常见问题解决思路

  *安装好ddnsto之后无法启用配置

  因为 Openwrt 15 版本跟最新的插件不兼容导致，解决办法尝试一：

  ```
  /etc/init.d/ddnsto disable
  /etc/init.d/ddnsto enable
  ```
  
  如果不行则尝试二：重启路由器
