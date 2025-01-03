## 玩转应用中心
1.登录到https://www.ddnsto.com/。

2.通过前面的详细教程，已经配置好穿透。

3.点击远程应用，然后点击大大的“+”号，就能看到丰富的远程应用。

4.接下来我们就来玩转这些应用。

  ![CloudApp](./cloudapp/cloudapp1.jpeg)
  
  ![CloudApp](./cloudapp/cloudapp.jpeg)

## 1.玩转Aria2远程下载
**远程访问Aria2建议使用[远程应用](https://doc.linkease.com/zh/guide/ddnsto/cloudapp.html#远程配置)进行访问，而非ddnsto访问路由器管理页面后跳转**
### Aria2配置：OpenWrt
1.首先确定你的路由等设备安装好了Aria2。
  
2.启用Aria2，RPC认证方式选令牌，然后自己输入一段英文数字乱码当作密钥，并复制下来(后面要用)，然后设置好下载目录，提交。
   
  PS：OpenWrt的RPC认证方式可选无，直接提交启用，然后跳转到“远程配置”，去设置远程下载。 
  
  ![Aria2](./cloudapp/cloudapp-aria2-2.jpeg)
  
  ![Aria2](./cloudapp/cloudapp-aria2-1.jpeg)

3.启用成功后，点击AriaNg控制台，并进入。

  ![Aria2](./cloudapp/cloudapp-op.jpeg)

4. 进入AriaNg控制台，会发现状态未连接，那我们就来设置：先点击AriaNg设置，再点击RPC，地址填入路由IP，再填入密钥，重载界面就发现已经连接了。

  ![Aria2](./cloudapp/cloudapp-aria2-lede4.jpeg)

  ![Aria2](./cloudapp/cloudapp-aria2-lede5.jpeg)
  
5.然后跳转到[远程配置](https://doc.linkease.com/zh/guide/ddnsto/cloudapp.html#远程配置)，去设置远程下载。 


### Aria2配置：KS LEDE
1.在酷软中心安装Aria2。

  ![Aria2](./cloudapp/cloudapp-aria2-lede1.jpeg)

2.设置好下载目录，并启用Aria2和开启RPC访问密钥，提交以后复制密钥(后面要用)。

  ![Aria2](./cloudapp/cloudapp-aria2-lede2.jpeg)
  
3.启用成功后，点击AriaNg控制台，并进入。

  ![Aria2](./cloudapp/cloudapp-aria2-lede3.jpeg)

4. 进入AriaNg控制台，会发现状态未连接，那我们就来设置：先点击AriaNg设置，再点击RPC，地址填入路由IP，再填入密钥，重载界面就发现已经连接了。
 
  ![Aria2](./cloudapp/cloudapp-aria2-lede4.jpeg)

  ![Aria2](./cloudapp/cloudapp-aria2-lede5.jpeg)

5.然后跳转到[远程配置](https://doc.linkease.com/zh/guide/ddnsto/cloudapp.html#远程配置)，去设置远程下载。

  
### Aria2配置：KS 梅林
1.在软件中心安装Aria2。

  ![Aria2](./cloudapp/cloudapp-aria2-ml1.jpg)

2.开启Aria2和设置RPC密码，然后提交。
  
  ![Aria2](./cloudapp/cloudapp-aria2-ml2.jpg)

3.点击RPC设定，然后复制RPC密码/token(后面要用)。
  
  ![Aria2](./cloudapp/cloudapp-aria2-ml3.jpg)

4.然后跳转到[远程配置](https://doc.linkease.com/zh/guide/ddnsto/cloudapp.html#远程配置)，去设置远程下载。

### Aria2配置：Unraid/爱快/Docker
1.Unraid、爱快、群晖、威联通等可以docker的设备，都可以用这种方式，一键部署Aria2。

PS：群晖稍微有点不一样，具体看下方的“群晖”教程。

2.进入设备终端，先安装Aria2，输入如下命令(先别直接输入，看下面的说明)：

```
docker run -d \
    --name aria2-pro \
    --restart unless-stopped \
    --log-opt max-size=1m \
    --network host \
    -e PUID=$UID \
    -e PGID=$GID \
    -e RPC_SECRET=<TOKEN> \
    -e RPC_PORT=6880 \
    -e LISTEN_PORT=6888 \
    -v $PWD/aria2-config:/config \
    -v $PWD/aria2-downloads:/downloads \
    p3terx/aria2-pro
```

a. TOKEN 是令牌，可为乱序的数字字母，并记住备份，后面要用。

b. RPC_PORT 为端口，这里设置成6880。

c. /config 配置文件路径，可根据实际情况调整。

d. /downloads 为下载目录，可根据实际情况调整。


**比如我的令牌是asdjxxxxxxxxxxxxxxxxxxxxxmsdf，下载目录为/mnt/sda1/aria2，RPC端口为6880，其余不改，那么我的命令就是：**

```
docker run -d \
    --name aria2-pro \
    --restart unless-stopped \
    --log-opt max-size=1m \
    --network host \
    -e PUID=$UID \
    -e PGID=$GID \
    -e RPC_SECRET=asdjxxxxxxxxxxxxxxxxxxxxxmsdf \
    -e RPC_PORT=6880 \
    -e LISTEN_PORT=6888 \
    -v $PWD/aria2-config:/config \
    -v $PWD/aria2-downloads:/mnt/sda1/aria2 \
    p3terx/aria2-pro
```

  ![Docker](./cloudapp/cloudapp-aria2-docker1.jpg)

3. 上面执行完成，Docker版的Aria2运行成功。 
  
  ![Docker](./cloudapp/cloudapp-aria2-docker2.jpg)
  
4. 然后跳转到[远程配置](https://doc.linkease.com/zh/guide/ddnsto/cloudapp.html#远程配置)，去设置远程下载。

* 设置穿透的时候，注意端口，我命令里是用的6880端口。 

  ![Docker](./cloudapp/cloudapp-aria2-docker4.jpeg)
 
 
  
### Aria2配置：群晖
群晖通过Docker方式安装Aria2，大体和上面[Unraid/爱快/Docker教程](https://doc.linkease.com/zh/guide/ddnsto/cloudapp.html#aria2配置-unraid-爱快-docker)一样，不过有2点要注意:

1.群晖如何启用SSH，如下图所示：

  ![Docker](./cloudapp/cloudapp-aria2-docker5.jpeg)

2.手动建立配置文件夹和下载文件夹：
  
  ![Docker](./cloudapp/cloudapp-aria2-docker6.jpeg) 

3.然后根据实际情况写配置目录和下载目录，2个命令安装完成： 
  
```
docker run -d \
    --name aria2-pro \
    --restart unless-stopped \
    --log-opt max-size=1m \
    --network host \
    -e PUID=$UID \
    -e PGID=$GID \
    -e RPC_SECRET=<TOKEN> \
    -e RPC_PORT=6880 \
    -e LISTEN_PORT=6888 \
    -v $PWD/aria2-config:/volume1/docker/aria2-config \
    -v $PWD/aria2-downloads:/volume1/Data/aria2-downloads \
    p3terx/aria2-pro
```
* 注意更改令牌 TOKEN 信息。

4. 然后跳转到[远程配置](https://doc.linkease.com/zh/guide/ddnsto/cloudapp.html#远程配置)，去设置远程下载。


### Aria2配置：威联通

威联通也可以采用Docker方式安装Aria2。(具体命令看上面[Unraid/爱快/Docker教程](https://doc.linkease.com/zh/guide/ddnsto/cloudapp.html#aria2配置-unraid-爱快-docker))


### Aria2配置：老毛子Padavan
1.首先确认设备Padavan固件带有Aria。(hiboyhiboyhiboy大佬固件是有的)

2.启用Aria2前，需要在设备连接的U盘或者硬盘上建立一个aira目录。(文件夹名必须是小写)

3.然后启动Aria2后，打开http://aria2c.com/进行设置，默认没加密：http://192.168.1.1:6800/jsonrpc 

  ![Padavan](./cloudapp/cloudapp-aria2-padavan1.jpeg) 
  
4.如果提示Aria2 RPC服务器错误，按照以下方法修改(如配置失败可清空aria目录重新开始配置)：

如需加密请手动修改配置文件

选项设置为: 配置文件中rpc-secret=xxxxxx

选项设置为: http://token:xxxxxx@host:port/jsonrpc

host: 指Aria2所在机器的IP

port: 使用--rpc-listen-port选项设置的端口, 未设置则是6800

5.然后跳转到[远程配置](https://doc.linkease.com/zh/guide/ddnsto/cloudapp.html#远程配置)，去设置远程下载。

### Aria2配置：ReadyNAS
 
TODO 

 
### 远程配置  
1.在ddnsto的远程应用列表中点击添加远程Aria2。

  填入RPC地址(格式为：路由IP:6800，比如http://192.168.2.2:6800/jsonrpc)
  
  password为前面复制的RPC密码/token(如果没RPC密码可不填，比如OpenWrt可不设置，就能远程)。
  
  ![Aria2](./cloudapp/cloudapp-aria2-3.jpeg)

2.在已添加中找到刚添加的远程应用，点击即可进入Aria2操作界面。
  
  ![Aria2](./cloudapp/cloudapp-aria2-4.jpeg)

  ![Aria2](./cloudapp/cloudapp-aria2-5.jpeg)

3.Aria2操作界面新建填入要下载资源的地址即可远程下载了。 
 
  ![Aria2](./cloudapp/cloudapp-aria2-6.jpeg) 
  
  ![Aria2](./cloudapp/cloudapp-aria2-7.jpeg)
   
  
## 2.玩转远程SSH
1.首先确定你的路由等设备开启了SSH。

2.在可用应用列表中点击添加远程SSH。

3.在弹出窗口写入应用名称，设备IP、设备登录用户名/密码等信息。

  PS：端口一般不需要改，除非你自己改了！
  
  ![SSH](./cloudapp/cloudapp-ssh1.jpeg)

4.在已添加中找到刚添加的远程应用，点击即可进入设备的SSH。
  
  ![SSH](./cloudapp/cloudapp-ssh2.jpeg)
	
  ![SSH](./cloudapp/cloudapp-ssh3.jpeg)
 
 
## 3.玩转远程Telnet
1.首先确定你的路由等设备开启了Telnet。

2.在可用应用列表中点击添加远程Telnet。

3.在弹出窗口写入应用名称，设备IP、设备登录用户名/密码等信息。

  PS：端口一般不需要改，除非你自己改了！
  
  ![Telnet](./cloudapp/cloudapp-telnet1.jpeg)

4.在已添加中找到刚添加的远程应用，点击即可通过Telnet进入设备的。

  ![Telnet](./cloudapp/cloudapp-telnet2.jpeg)

  
## 4.玩转Windows RDP远程

### A.专业版开启RDP

**Windows专业版或者更高级的版本是有开关的，可以直接开启电脑的RDP。**

1.Win11：设置——系统——远程桌面——启用

  ![Windows远程](./cloudapp/cloudapp-rdp0.jpg)

  **注意事项：需要关闭身份验证**

  ![Windows远程](./cloudapp/cloudapp-rdp7.png)

2.Win10：设置——系统——远程桌面——启用远程桌面  

  ![Windows远程](./cloudapp/cloudapp-rdp1.jpg)

3.Win7：右键我的电脑——属性——左边侧栏高级系统设置——远程，在下方“远程桌面”方框下勾选“允许远程连接到此计算机”
  
  ![Windows远程](./cloudapp/cloudapp-rdp2.jpeg)
  
  
### B.家庭版开启RDP

**Windows家庭版是无法直接开启电脑的RDP，所以需要借助工具。**

1.首先，需要安装SuperRDP
 [点击进入下载](https://github.com/anhkgg/SuperRDP/releases)；

  ![Windows远程](./cloudapp/rdp/rdp1.jpg)

2.下载后解压，运行SuperRDP.exe(需管理员权限)；

  ![Windows远程](./cloudapp/rdp/rdp2.jpg)
  
运行后，根据提示选择1(安装)即可。
  
  ![Windows远程](./cloudapp/rdp/rdp3.jpg)

3. 验证远程桌面服务是否成功。

* Win+R，输入 mstsc.exe 启动远程桌面程序；

* 输入127.0.0.1，连接成功基本验证服务启用成功。

  ![Windows远程](./cloudapp/rdp/rdp4.jpg)
  

### C.开始设置  
  
1.查看被控制的电脑的IP和用户名/密码。

* 查看IP：控制面板——网络和Internet——网络共享中心，点击“连接”，出来弹窗点击“详细信息”——IPv4地址。

ps：查看IP方法很多，不一定是这一种。

  ![Windows远程](./cloudapp/cloudapp-rdp3.jpg)


* 查看用户名：控制面板——用户账户——用户账户，能看到用户名，密码自己设定的。

PS：某些用户是用的微软帐号，没启用本地帐号，那么就使用微软帐号和密码。

或者简单点：电脑开机登录的时候，显示的用户名和要输入的密码。

   ![Windows远程](./cloudapp/cloudapp-rdp4.jpg) 
 
2.在ddnsto可用应用列表中点击添加远程RDP，填入被控电脑的IP，用户名，密码等信息。

   ![Windows远程](./cloudapp/cloudapp-rdp5.jpg) 
   
3.在已添加中找到刚添加的远程RDP，点击即可进入进入RDP，操控远程电脑。 

   ![Windows远程](./cloudapp/cloudapp-rdp6.jpg)  
   
4.相关提醒：

* 被控电脑必须联网且是在设置好穿透(DDNSTO)的网络下；
  
ps：假如想远程朋友的电脑，朋友的电脑只是联网，没DDNSTO，那么是不可控的。
  
* 被控电脑必须是开机状态，且没进入休眠状态。
  
  
## 5.玩转远程VNC
1.VNC服务端下载、安装、配置。例如：[安装RealVNC](https://www.realvnc.com/en/connect/download/vnc/)

   ![Linux-VNC](./cloudapp/cloudapp-vnc1.jpeg)  

2.而DDNSTO的远程VNC，充当VNC Viewer，写好参数，就能远程了。
 
   ![Linux-VNC](./cloudapp/cloudapp-vnc2.jpeg)  


## 6.玩转远程开机

具体操作，请看 [拓展功能之远程开机](https://doc.linkease.com/zh/guide/ddnsto/ddnstofile.html#远程开机)。