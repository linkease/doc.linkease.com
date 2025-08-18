### Docker

[无法拉取易有云&DDNSTO Docker镜像？](https://www.bilibili.com/video/BV1FnUUYeEn9/)


**Docker方式安装ddnsto，包括并不限于Unraid/爱快/群晖等，只要有Docker的设备都成，一些Linux发行版等。**

* 铁威马：首先在应用中心里安装Docker(TOS 4.0及更高的系统)，然后在控制面板——终端与SNMP——启用SSH访问。然后电脑利用putty、xshell等工具登录终端，然后输入“sudo -i”和密码获取临时ROOT权限，然后进行下面的教程。

* 群晖：在控制面板——终端机与SNMP——启用SSH访问。然后电脑利用putty、xshell等工具登录终端，然后输入“sudo -i”和密码获取临时ROOT权限，然后进行下面的教程。

* Linux发行版：某些Linux系统可能默认不自带Docker，那么就需要终端命令安装Docker：

```
首先执行：curl -sSL https://get.docker.com/ | sh

上一条命令执行完毕后，执行：sudo chmod 777 /var/run/docker.sock
```
Docker安装完成后，进行下面的教程。


**Docker安装ddnsto教程开始：**

**终端运行以下命令：(先不要直接复制，看下面的说明)**
```
docker run -d \
    --name=ddnsto \
    --restart always \
    --network host \
    -e TOKEN=<填入你的token> \
    -e DEVICE_NAME=<自定义设备唯一ID> \
    -v /etc/localtime:/etc/localtime:ro \
    linkease/ddnsto:3.1.0
```

* <填入你的token>: 填写从DDNSTO控制台拿到的TOKEN。
* <自定义设备唯一ID>: 必须是英文字母、数字，不能为中文；比如：abc9527。

```
* 注意要替换 "<>" 里面的内容，且不能出现 "<>"。
* 如果有多个设备要绑定，请绑定不一样的“设备唯一ID”，
如：abc9527、abc9528、abc9529等代表不一样的设备。

* 比如我的TOKEN为abcd-8888-7777-6666-efgh，设备唯一ID为abc9527，那么最终的终端命令就是：
```
```
docker run -d \
    --name=ddnsto \
    --restart always \
    --network host \
    -e TOKEN=abcd-8888-7777-6666-efgh \
    -e DEVICE_NAME=abc9527 \
    -v /etc/localtime:/etc/localtime:ro \
    linkease/ddnsto:3.1.0
```

* Docker在某些Linux发行版，可能要“sudo”提权才能运行，按提示输入Linux的密码，命令如下：

```
sudo docker run -d \
    --name=ddnsto \
    --restart always \
    --network host \
    -e TOKEN=abcd-8888-7777-6666-efgh \
    -e DEVICE_NAME=abc9527 \
    -v /etc/localtime:/etc/localtime:ro \
    linkease/ddnsto:3.1.0
```

#### Docker常见问题

* Docker里面的网关设置，不能为路由器的网关，保证 Docker 里面有网络才能访问 ddnsto 服务器。

[镜像地址](https://hub.docker.com/r/linkease/ddnsto/)

* 若群晖用docker安装，建议去Docker管理器里，先停用ddnsto容器，然后编辑，开启`使用高权限执行容器`和`启用自动重新启动`，保存应用。

   ![docker](./koolshare_merlin/dd.jpg)

* 如果需要更新镜像，请停止ddnsto的docker项目，并删除，再重新输入整个命令拉取新镜像。

#### Unraid实战ddnsto

Unraid也能远程穿透，使用ddnsto超级简单：

1.首先，登录Unraid的管理界面，点击docker，然后右上方有个终端的按钮，点击进去。

   ![docker](./koolshare_merlin/docker2.jpeg)
   
2.进入终端后，输入上面提到的命令：

```
docker run -d \
    --name=ddnsto \
    --restart always \
    --network host \
    -e TOKEN=b5xxxxxxxxxx26622 \
    -e DEVICE_IDX=0 \
    -v /etc/localtime:/etc/localtime:ro \
    -e PUID=0 \
    -e PGID=0 \
    linkease/ddnsto:3.0.0
```
   ![docker](./koolshare_merlin/docker3.jpeg)
  
3.上面终端执行完成后，就成功安装ddnsto。(建议启用开机启动) 
 
   ![docker](./koolshare_merlin/docker4.jpeg)
 
4. 然后ddnsto主页添加域名映射即可，注意Unraid的端口别写错。

   ![docker](./koolshare_merlin/docker5.jpeg)
