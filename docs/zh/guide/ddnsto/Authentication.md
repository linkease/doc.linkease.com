
### 什么是身份验证？为什么要身份验证？

DDNSTO在保护用户数据安全同时也要避免恶意分享不良内容带来的法律风险，所以我们对用户的域名访问都做了认证判断：服务器会判断用户当前IP是否已经过验证，如果没有就会跳转验证流程。

所以当你的第三方客户端使用DDNSTO时，需要先访问一遍对应域名进行身份验证。否则客户端可能会出现连接失败或假死等错误。


### 验证场景有2种：

#### A.访问ddnsto官网，登录控制台，微信扫码登录。

* 只要涉及到登录DDNSTO控制台，不管是手机还是电脑网页，都需要扫码登录。

* 手机网页登录DDNSTO控制台，只能截图登录二维码，然后微信扫截图。

#### B.访问域名(访问DDNSTO的穿透链接时)验证，方法有两种：

* 一种是上面说的，网页端登录扫码登录DDNSTO控制台，就验证了。

* 再一种是易有云APP验证DDNSTO。[易有云APP下载地址](https://doc.linkease.com/downloads/)

|平台|支持验证DDNSTO的版本|
| :----: | :----: |
| 安卓 | v2.8.2及更高版本 |
| iOS | v1.1.5及更高版本 |

PS：若是易有云APP新用户，下载最新版，然后注册登录；老用户直接更新最新版本即可。

打开易有云APP——导航——DDNSTO——“绑定DDNSTO/验证当前IP”。

   ![Authentication](./Authentication/Authentication0.jpg)
   
* #### 如何设置易有云APP验证DDNSTO：

1.登录到DDNSTO控制台，登录后点击右上角用户头像，选择“个人资料——易有云绑定——立即绑定”，会出现一个二维码界面；

   ![Authentication](./Authentication/Authentication1.jpg)
 
   ![Authentication](./Authentication/Authentication2.jpg)
   
2.打开易有云APP——导航——DDNSTO——“绑定DDNSTO”，按照操作绑定成功；

   ![Authentication](./Authentication/Authentication3.jpg)

   ![Authentication](./Authentication/Authentication5.jpg)

3.绑定成功后，以后需要DDNSTO身份验证的时候，直接打开“易有云APP——导航——DDNSTO——“验证当前IP”——“验证IP”即可。

   ![Authentication](./Authentication/Authentication4.jpg)
   
