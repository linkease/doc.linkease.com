### 威联通

   #### <font color="#dd0000">威联通用户请仔细看完本节教程再操作，以节约时间！！！</font><br />
   #### <font color="#dd0000">注意：请开启 WEB服务，并且取消勾选HTTPS</font><br />
   #### <font color="#dd0000">注意：请开启 WEB服务，并且取消勾选HTTPS</font><br />
   #### <font color="#dd0000">注意：请开启 WEB服务，并且取消勾选HTTPS</font><br /> 

  1.下载对应自己版本的 [QNAP插件](https://www.linkease.com/rd/ddnsto-qnap/)进行手动安装；

  * 如果不知道自己的平台，一般来说是 DDNSTO_xxx_x86_64.qpkg

   ![qnap-install](./koolshare_merlin/qnap-install.jpeg)
   
  * 若遇到安装失败，日志如图：
  
   ![qnap-install](./koolshare_merlin/qnap-1.jpg)
     
  则如图开启允许未签名即可。
  
   ![qnap-install](./koolshare_merlin/qnap-2.jpg) 

  2.安装好了，要配置：TOKEN从官网拿，填入提交就可以了，然后回到官网去配置域名。

  * QNAP的域名端口是8080，比如配置内网地址为：http://127.0.0.1:8080。
  
  * **威联通升级新系统后，DDNSTO更换过TOKEN后，需要停用插件后重新开启。**

   ![qnap-config](./koolshare_merlin/qnap-config.jpeg)

  * **如果安装失败，或者无法配置，请开启 WEB服务，并且取消勾选HTTPS(若之前勾选过，请卸载重装ddnsto)。**

   ![qnap-QWEB](./koolshare_merlin/qnap-qweb.jpg) 