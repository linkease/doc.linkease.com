### 华硕路由器搭配易有云实现 轻NAS 教程

易有云是一个远程文件管理软件，支持Windows、MacOS、iOS、安卓、NAS、Docker和路由器等平台，可以让你轻松实现文件互传、相册备份、文件同步和异地互联，确保数据不丢失！

我们看看在路由器上安装易有云是可以给你一个很好的 轻NAS 体验的。

#### 安装易有云

1. 打开软件中心-全部软件，找到“虚拟内存”，点击安装。

![image](./image/asus_nas_linkease/1.png)

2. 安装好后打开，然后根据使用流程注册易有云帐号并绑定设备。

![image](./image/asus_nas_linkease/2.png)

3. 设备和帐号绑定好后，就可以使用易有云的APP或电脑客户端，选择绑定的设备并使用了。

![image](./image/asus_nas_linkease/3.png)

![image](./image/asus_nas_linkease/4.png)

#### 相册备份

我们先看下怎么把你手机的相片备份到路由器的硬盘上，释放你手机的空间。

1. 打开易有云APP，切换到相册页签，点击右上角设置。

![image](./image/asus_nas_linkease/5.png)

2. 打开相册备份，备份路径选择路由器的硬盘分区，备份相册如果不选则备份全部，还可以选择是否备份视频，是否Wi-Fi下备份。

![image](./image/asus_nas_linkease/6.png)

3. 点击立即备份就会自动将你手机上的照片备份到路由器硬盘上了，易有云的相册备份是支持随时随地备份的。

![image](./image/asus_nas_linkease/7.png)

![image](./image/asus_nas_linkease/8.png)

#### 远程文件共享

易有云的异地互联功能可以让你在电脑上远程访问samba共享。

1. 切换到USB相关应用，打开服务器中心，选择“网络共享（samba）/网络硬盘”，启用samba共享。

![image](./image/asus_nas_linkease/9.png)

![image](./image/asus_nas_linkease/10.png)

2. 安装并打开易有云电脑客户端，切换到工具栏，点开异地互联

![image](./image/asus_nas_linkease/11.png)

3. 点击开启异地互联

![image](./image/asus_nas_linkease/12.png)

4. 根据图示操作，最后记得保存修改

![image](./image/asus_nas_linkease/13.png)

5. 配置好后，我们就可以在当前电脑通过私有域名或私有IP远程访问路由器上的服务了，比如路由器的管理界面、samba文件共享等。

![image](./image/asus_nas_linkease/14.png)

浏览器上输入私有域名，可以远程访问

![image](./image/asus_nas_linkease/15.png)

Mac电脑通过私有域名访问samba共享

![image](./image/asus_nas_linkease/16.png)

![image](./image/asus_nas_linkease/17.png)

![image](./image/asus_nas_linkease/18.png)

![image](./image/asus_nas_linkease/19.png)

Windows电脑可以直接在资源管理去输入 \\\ax86u.link.to 就可以远程访问了

#### 远程文件管理

易有云支持远程访问路由器的硬盘文件。

易有云电脑客户端

![image](./image/asus_nas_linkease/20.png)

易有云APP

![image](./image/asus_nas_linkease/21.png)

#### 远程下载和看电影

易有云远程连接Aria2进行远程下载，下载后的电影可以直接用易有云客户端和APP观看。

1. 先在软件中心找到Aria2安装并开启

![image](./image/asus_nas_linkease/22.png)

下载目录选择硬盘上的目录

![image](./image/asus_nas_linkease/23.png)

开启后，局域网内可以点击这个链接进入管理界面

![image](./image/asus_nas_linkease/24.png)

浏览器打开可能会连接不上，可以按照下面图示操作即可

![image](./image/asus_nas_linkease/25.png)

连接成功后就可以下载了

![image](./image/asus_nas_linkease/26.png)

下面看下怎么用易有云APP进行远程下载

1. 打开易有云APP应用列表，点击“立即添加”。

![image](./image/asus_nas_linkease/27.png)

2. 选择你的路由器作为跳板设备。

![image](./image/asus_nas_linkease/28.png)

3. 填写参数。

![image](./image/asus_nas_linkease/29.png)

远程密钥在这获取

![image](./image/asus_nas_linkease/30.png)

4. 保存后就会在生成一个远程应用。

![image](./image/asus_nas_linkease/31.png)

5. 打开后，填入下载链接，点击立即下载就可以把文件下载到路由器的硬盘上了。

![image](./image/asus_nas_linkease/32.png)

下载好后就可以用电脑客户端或者APP来观看了

![image](./image/asus_nas_linkease/33.png)

![image](./image/asus_nas_linkease/34.png)

可以看到，一般NAS常见的几个需求，家庭的影音需求、存储照片，文件共享，远程下载，在路由器上利用易有云的能力，是可以获得很好的轻NAS 体验的。
