## 同步圈

使用同步圈功能，需要将存储端（版本0.8.7及以上）和PC客户端更新到最新版本。

#### [点击查看视频教程](https://www.bilibili.com/video/BV1cN4y1j7PB?spm_id_from=333.999.0.0)

将多个不同设备的文件夹关联起来进行相互同步（备份），构成一个同步圈，保证你的数据备份在多个设备或者硬盘上。

可以往同步圈里添加存储端、客户端或共享成员的客户端文件夹，同步圈的文件夹之间会相互同步。

**打开易有云电脑客户端，点击工具栏，然后点击同步圈，点击快速创建后输入同步圈的名称，最后确定；**

1.打开同步圈：
![local.png](./tutorial/pc/sync-circle/sync1.jpg)

2.新建一个同步圈：
![local.png](./tutorial/pc/sync-circle/sync2.jpg)

### 存储端同步

* 因为每个同步圈必须至少有一个存储端的文件夹，创建完成后我们首先添加存储端的文件夹。

* 可以新建多个同步圈，但是每个同步圈目前只能添加3个存储端。

比如这里我将公司的ARS2的文件同步到家里的ARS2上。

**1.点击添加；**
![local.png](./tutorial/pc/sync-circle/sync3.jpg)

**2.选择一个存储端文件夹；**
![local.png](./tutorial/pc/sync-circle/sync4.jpg)

**3.往这个同步圈继续添加另一个存储端文件夹，这样我们就往同步圈里添加了两个存储端的文件夹，添加好后点击右上角的立即同步按钮即可开始同步。**
![local.png](./tutorial/pc/sync-circle/sync5.jpg)

**4.点击同步文件夹右侧更多选项-状态可以查看实时信息。**

![local.png](./tutorial/pc/sync-circle/sync6.jpg)

![local.png](./tutorial/pc/sync-circle/sync7.jpg)

**5.高级设置可以设置文件监听、扫描间隔、同步方式和版本控制。**

![local.png](./tutorial/pc/sync-circle/sync8.jpg)

### 主从备份

**除了可以存储端文件夹之间相互同步，我们还可以选择某一个存储端的文件夹来作为备份文件夹，备份文件夹只作为同步的备份，备份文件夹里的改动不影响同步。**

1.点击主从备份，选择一个备份文件夹；
![local.png](./tutorial/pc/sync-circle/sync9.jpg)

2.就可以看到这里添加了一个备份文件夹，只作为备份使用。
![local.png](./tutorial/pc/sync-circle/sync10.jpg)


### 同步到客户端

可添加本机文件夹到同步圈，也可以添加账号下其他客户端，其他客户端文件夹需要在对应的客户端上添加。

**A.同步到本机**

在客户端-本机这里点击添加：
![local.png](./tutorial/pc/sync-circle/sync11.jpg)

选择好本机文件夹后就可以加入同步了。
![local.png](./tutorial/pc/sync-circle/sync12.jpg)

**B.同步到其他客户端**

在其他客户端也添加本机文件夹后，我们就可以在当前客户端看到其他客户端的同步文件夹。
![local.png](./tutorial/pc/sync-circle/sync13.jpg)


### 同步到共享成员的客户端

**发送同步邀请：**

点击按钮添加；
![local.png](./tutorial/pc/sync-circle/sync14.jpg)

选择已加入同步的某个存储端的共享成员后点击确定发送邀请。
![local.png](./tutorial/pc/sync-circle/sync17.jpg)

**接受同步邀请：**

共享成员打开“接收的邀请”；
![local.png](./tutorial/pc/sync-circle/sync18.jpg)

点击“接收”后选择一个本地的文件夹就可以加入同步圈了。
![local.png](./tutorial/pc/sync-circle/sync19.jpg)

![local.png](./tutorial/pc/sync-circle/sync20.jpg)

同时，管理员这边就可以看到共享成员的客户端文件夹已经加入同步了。

![local.png](./tutorial/pc/sync-circle/sync21.jpg)


### 常见问题

**1、如果将文件夹加入同步后没有立即同步，可点击右上角的立即同步按钮开始同步。**

![local.png](./tutorial/pc/sync-circle/sync15.jpg)


<!-- ![local.png](./tutorial/pc/sync-circle/sync16.jpg) -->


## 设备互联

将本地电脑和远程设备互联，通过私有域名或私有IP访问。

简单来说就是可以通过易有云PC端，来远程访问远端易有云存储端所在网络的设备。

**打开易有云电脑客户端，点击工具栏，然后点击设备互联；**

![jpg](./tutorial/pc/Device/1.jpg)

然后点击启用：

![jpg](./tutorial/pc/Device/2.jpg)

### 远程设备

假设场景：自家的网络里，有设备安装了易有云存储端，并且开机处于联网状态，目前在外网某电脑上安装易有云PC客户端，然后远程访问家里的设备。

**1.在远程设备里，点击“扫描添加”；然后选择“关联设备”；**

![jpg](./tutorial/pc/Device/3.jpg)

选择的“关联设备”即为你远端安装了易有云存储端的设备。

![jpg](./tutorial/pc/Device/4.jpg)

**2.然后会扫描出很多设备，选择一个要远程的设备；**

扫描出的设备，都是和易有云存储端同一内网里的设备。

教程设备所在网段为192.168.2.x，选择一个openwrt。

![jpg](./tutorial/pc/Device/5.jpg)

添加完成后，会显示所有信息。

![jpg](./tutorial/pc/Device/6.jpg)

* **也可以手动添加，“添加远程设备”，然后填写私有域名、选择关联设备和远程设备的ip，保存修改。**

设备IP：关联的易有云存储端同一内网里的设备IP

![jpg](./tutorial/pc/Device/7.jpg)

![jpg](./tutorial/pc/Device/8.jpg)

**3.完成添加后，就可以通过私有域名或者私有ip，直接远程访问设备。**

![jpg](./tutorial/pc/Device/9.jpg)

![jpg](./tutorial/pc/Device/10.jpg)

![jpg](./tutorial/pc/Device/11.jpg)

### 远程局域网

访问远端存储端所在的局域网。

**“添加”远程网段：格式一般为IP/24，例如192.168.9.0/24，选择的“关联设备”即为你远端安装了易有云存储端的设备。**

* 有小伙伴不懂网段：比如你家里路由器LAN口IP为192.168.2.1，那么你的网段就是：192.168.2.1/24。

![jpg](./tutorial/pc/Device/12.jpg)

添加完成后，就能直接访问远端192.168.9.x的设备。

* 比如：Synology设备所在的局域网(192.168.9.x)加入到远程网段里，然后Synology drive就可以直接访问。


## 网络硬盘

何为网络硬盘，其实就是Web DAV，配置相当简单：

### 配置

**1.打开易有云电脑客户端，点击工具栏，然后点击网络硬盘；**

![dav1.jpg](./tutorial/pc/webdav/dav1.jpg)

**2.然后服务设置，设置Webdav用户名和Webdav密码(设置完成请记住)；**

![dav2.jpg](./tutorial/pc/webdav/dav2.jpg)

**3.然后磁盘管理，选择一个目标主机，可以选择盘符映射到本地；**

* 推荐用更加稳定的RaiDrive来映射。[RaiDrive映射教程](https://doc.linkease.com/zh/guide/linkease_app/pc.html#raidrive)

![dav3.jpg](./tutorial/pc/webdav/dav3.jpg)

打开“此电脑”，就能看到映射的盘，就能点击进去直接访问了。

![dav4.jpg](./tutorial/pc/webdav/dav4.jpg)


### 访问

我们设置好网络硬盘(Web DAV)后，如果在其他客户端访问，怎么做呢？比如在易有云APP。

**1.选择一个目标主机，有个地址，我们整个地址复制下来；**

PS：地址类似这种：**http://192.168.2.135:8896/webdav/xxxxxxx** (这就是WebDAV的服务器url)

![dav5.jpg](./tutorial/pc/webdav/dav5.jpg)

**2.然后参考教程，绑定即可。**

[易有云APP WebDAV绑定教程](/zh/guide/linkease_app/tutorial.html#web-dav) -->


### RaiDrive

**介绍一个PC端的软件访问/映射到本地：RaiDrive。[下载地址](https://www.aliyundrive.com/s/5ZP1ymLjmSt)**

**1.下载安装RaiDrive，安装完成后，打开；**

![jpg](./tutorial/pc/webdav/dav6.jpg)

![jpg](./tutorial/pc/webdav/dav7.jpg)

**2.“Add按钮”进来，选择“NAS”，然后选择“WebDav”；**

* Drive：选择映射到本地的盘符，比如：X

* Address：WebDAV的服务器url：http://192.168.2.135:8896/webdav/xxxxxxx

(因为地址是http，不是https，取消前面那个小盾牌)

* Account：Webdav用户名和Webdav密码

* 最后点击“Connect”按钮连接

![jpg](./tutorial/pc/webdav/dav8.jpg)

**3.连接成功就能访问映射的盘。**

![jpg](./tutorial/pc/webdav/dav9.jpg)

![jpg](./tutorial/pc/webdav/dav10.jpg)

## 协议转发

易有云PC版已经上线协议转发了，请更新最新版。

目前已经支持转发的协议有ssh、samba和rdp，后续更多协议敬请期待。

![jpg](./tutorial/pc/Forward/1.jpg)

### SSH协议转发

1.设置非常简单，进入协议转发，点击“添加”，协议类型选择ssh；目标设备，选择已经绑定了此易有云的设备(请确认设备启用SSH)：

![jpg](./tutorial/pc/Forward/2.jpg)

2.目标地址写目标设备的默认地址，本地地址写要转发成的地址，填写完成后，保存。

* 目标地址：比如远端主机ip是http://192.168.2.101/，这就是目标地址，转发ssh，端口就是22。

* 本地地址：就是把远端目标地址转到本地的ip，比如127.0.0.1:22。

![jpg](./tutorial/pc/Forward/3.jpg)

3.现在就可以利用Xshell等工具通过本地地址(127.0.0.1:22)SSH访问设备了。

### RDP协议转发

1.进入协议转发，点击“添加”，协议类型选择rdp；目标设备，选择已经绑定了此易有云的设备(请确认设备启用RDP)：

* 若被控电脑是windows家庭版，需要特殊处理才能开启RDP。[家庭版开始RDP](https://doc.linkease.com/zh/guide/ddnsto/cloudapp.html#b-家庭版开启rdp)


![jpg](./tutorial/pc/Forward/4.jpg)

2.目标地址写目标设备的默认地址，本地地址写要转发成的地址，填写完成后，保存。

* 目标地址：比如被控主机ip是http://192.168.2.5/，这就是目标地址，rdp默认端口是3389。

* 本地地址：就是把远端目标地址转到本地的ip，比如127.0.0.1:3389。(若本地远程开了就不能用3389端口，换端口，比如3399等。)

![jpg](./tutorial/pc/Forward/5.jpg)

3.现在就可以通过本地地址(127.0.0.1:3389)远程访问设备了。

* 安装 [微软RDP远程桌面程序](https://docs.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-clients) (windows电脑建议安装Microsoft Store版本)。

* RDP客户端，添加电脑，填入本地地址访问。(连接过程中会提示填入被控电脑的用户名和密码)

![jpg](./tutorial/pc/Forward/6.jpg)

* Windows电脑也可以用自带的“远程桌面连接”，操作是一样的，界面不同而已。

![jpg](./tutorial/pc/Forward/7.jpg)


### Samba协议转发

1.设置非常简单，进入协议转发，点击“添加”，协议类型选择samba；目标设备，选择已经绑定了此易有云的设备(请确认设备启用samba)：

![jpg](./tutorial/pc/Forward/8.jpg)

2.目标地址写目标设备的默认地址，本地地址写要转发成的地址，填写完成后，保存。

* 目标地址：比如远端主机ip是http://192.168.2.101/，这就是目标地址。

* 本地地址：就是把远端目标地址转到本地的ip，比如127.0.0.1。

![jpg](./tutorial/pc/Forward/9.jpg)

3.现在就可以利用可Samba访问的工具通过本地地址(127.0.0.1)访问设备了。




## 协议访问

易有云PC客户端支持多种网络协议(SMB/CIFS、SFTP、WebDAV)访问。

设置位于PC客户端—右上角头像—设置—“+”加号图标，下面开始一一说明各个协议的简单用法。

![jpg](./tutorial/pc/agreement/0.jpg)

![jpg](./tutorial/pc/agreement/1.jpg)


### Samba

#### 1.选择“Samba”，下一步，进入配置界面；

![jpg](./tutorial/pc/agreement/2.jpg)

#### 2.开始配置：

![jpg](./tutorial/pc/agreement/3.jpg)

```
关联设备：若选择绑定了易有云的设备，外网都能访问；若不关联设备，仅在设备所在局域网内能访问。

选择设备IP：开启了Samba协议的设备的IP，可以进入“选择”界面选择，也可以自定义输入IP。

端口：一般不需要设置，默认即可。
```

#### 继续下一步：

![jpg](./tutorial/pc/agreement/4.jpg)

工作组：一般不需要设置，默认即可。

用户名和密码：Samba设备的用户名和密码。

#### 继续下一步：

![jpg](./tutorial/pc/agreement/5.jpg)

设备名称：可随意设置。

路径：选择Samba设备的磁盘。

#### 3.绑定成功后，就能看到刚刚添加的设备，选择即可管理。

![jpg](./tutorial/pc/agreement/6.jpg)


### SFTP

#### 1.选择“SFTP”，下一步，进入配置界面；

![jpg](./tutorial/pc/agreement/7.jpg)

#### 2.开始配置：

![jpg](./tutorial/pc/agreement/8.jpg)

```
关联设备：若选择绑定了易有云的设备，外网都能访问；若不关联设备，仅在设备所在局域网内能访问。

设备IP：开启了SFTP协议的设备的IP，手动输入。

端口：一般不需要设置，默认即可。
```

#### 继续下一步：

![jpg](./tutorial/pc/agreement/9.jpg)

用户名称和密码：SFTP设备的用户名和密码。

#### 继续下一步：

![jpg](./tutorial/pc/agreement/10.jpg)

设备名称：可随意设置。

路径：设置要访问的路径，默认就是整个磁盘分区，也可以写指定的分区。

#### 3.绑定成功后，就能看到刚刚添加的设备，选择即可管理。

![jpg](./tutorial/pc/agreement/11.jpg)


### Web DAV

#### 1.选择“Web DAV”，下一步，进入配置界面；

![jpg](./tutorial/pc/agreement/12.jpg)

#### 2.开始配置：

![jpg](./tutorial/pc/agreement/13.jpg)

```
关联设备：若选择绑定了易有云的设备，外网都能访问；若不关联设备，仅在设备所在局域网内能访问。

设备别称：可随意设置。

服务端url：WebDAV服务器的地址。若不是url，是ip+端口，就如实写，例如：192.168.2.3:6086。

用户名称和密码：WebDAV设置的用户名和密码。
```

#### 3.绑定成功后，就能看到刚刚添加的设备，选择即可管理。

![jpg](./tutorial/pc/agreement/14.jpg)





## 编辑文档

如何在线创建、编辑和预览Markdown文档？

**1.点击右侧“新建文件”，在出现的文件命名弹窗命名后，将文件格式后缀设置为“.md”，点击“确定”按钮即可创建Markdown文档。**

*无需另外下载软件安装，无需另外下载软件安装，无需另外下载软件安装，直接在易有云中就可以创建编辑；

![创建md文档1.png](./tutorial/pc/Markdown/2.png)

![创建md文档2.png](./tutorial/pc/Markdown/3.png)

**2.单击Markdown文档，即可在线编辑。编辑完成后，请点击“保存”按钮，否则此次修改无效。点击“关闭”，退出当前编辑页面。**

*生成html：在线生成html文件，单击可打开预览网页；

![编辑md.jpg](./tutorial/pc/Markdown/1.jpg)



## 本地存储

如何将本地电脑作为存储端设备绑定？

**1.请先安装易有云客户端，并正常开启运行。**

**2.Windows端(以Win10为例)：点击任务栏中易有云图标，右键即可展开易有云菜单栏，点击“启动存储服务”，即可打开易有云向导页面（网页）；**

![bd1.png](./tutorial/pc/OpenStorage/bd1.png)

![bd2.png](./tutorial/pc/OpenStorage/bd2.png)

**2-1.Mac端：单击易有云图标，即可展开易有云菜单栏，点击“启动存储服务”，即可打开易有云向导页面（网页）；**

![bd3.jpg](./tutorial/pc/OpenStorage/bd3.jpg)

<!-- <font color=#ff0000> <strong> *登录时，请使用客户端登录账号，否则无法绑定！</strong></font> -->
*登录时，请使用客户端登录账号，否则无法绑定！

![bd2.png](./tutorial/pc/OpenStorage/bd2-1.png)

**4.设置好名称及初始目录路径后，点击"确定"即可绑定！**

*初始目录路径为用户电脑本机上的任一文件夹路径；

![bd3.png](./tutorial/pc/OpenStorage/bd3.png)

**4.绑定完成后，即可将本机作为存储端设备远程管理访问数据！**

![bd4.png](./tutorial/pc/OpenStorage/bd4.png)



## 下载目录

PC客户端下载后的文件在哪里？（以Win10为例）

客户端及浏览器中文件下载后，保存至本机系统默认的下载路径中。
*"Administrator"为本机用户名

![local.png](./tutorial/pc/Download/local.png)



## 管理目录

管理员如何设置设备上的用户目录？

**设备管理员点击“管理-目录设置”，进入设备目录设置页面**

![ml1.jpg](./tutorial/pc/ServerRoot/ml1.jpg)

**1.设置共享目录/家庭空间：在设备目录设置页面，公共目录板块直接更改目录路径和设置索引即可（共享目录名称不可更改）；**
<!-- <blockquote>
<font color="#DC143C"><strong>每个主目录都可以分别设置索引，默认是关闭的。手动开启索引后，即可支持文件智能分类及搜索功能，但占用的CPU会比较高；</strong></font>
</blockquote> -->
每个主目录都可以分别设置索引，默认是关闭的。手动开启索引后，即可支持文件智能分类及搜索功能，但占用的CPU会比较高；

![ml22.jpg](./tutorial/pc/ServerRoot/ml22.jpg)

**2.设置个人目录/个人空间：点击成员列表右侧的箭头，展开个人目录列表；点击"添加"按钮，新增个人主目录；**

![ml2.jpg](./tutorial/pc/ServerRoot/ml2.jpg)

**3.输入目录名称，选择目录路径，点击下方保存即可新增目录；**

![ml3.jpg](./tutorial/pc/ServerRoot/ml3.jpg)

**4.点击目录右侧"删除"按钮，即可删除当前目录；点击索引，即可关闭或开启个人目录索引。**

![ml5.jpg](./tutorial/pc/ServerRoot/ml5.jpg)




## 下载目录

如何设置下载目录？

**1.鼠标悬浮在头像上方，在出来的操作栏中点击“设置”，点击“系统设置”。**

![dla.png](./tutorial/pc/Download/dla.jpg)

**2.点击“浏览”，选择好本地路径后，点击“确定”即可**

*点击“打开”，会直接定位到当前您所选择的目录。

![dlb.png](./tutorial/pc/Download/dlb.jpg)

![dlc.png](./tutorial/pc/Download/dlc.jpg)



## 更新版本

如何在线更新客户端版本？

**1.正常开启运行易有云客户端。**

**2.Windows端(以Win10为例)：点击任务栏中易有云图标，右键即可展开易有云菜单栏，点击“检查更新”，即可自动更新到最新版本**

![up.jpg](./tutorial/pc/update/up.jpg)

**3.也可以点击下载更新易有云客户端。** [客户端下载](https://doc.linkease.com/downloads/)
