### Docker

#### <font color="#dd0000">Docker安装请注意：</font><br />
#### <font color="#dd0000">1. 如遇到DeviceID相同导致控制台无法看到新设备，请通过修改DEVICE_IDX变量来生成新的DeviceID。</font><br />
#### <font color="#dd0000">2. 请填写 -v /your/config-path/ddnsto-config:/ddnsto-config 映射，避免重启后ID变化识别成新设备</font><br />

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
    -e DEVICE_IDX=<默认0，如果设备ID重复则为1-100之间> \
    -v /etc/localtime:/etc/localtime:ro \
    -v /your/config-path/ddnsto-config:/ddnsto-config \
    -e PUID=<uid for user> \
    -e PGID=<gid for user> \
    linkease/ddnsto
```

* <填入你的token>: 填写从ddnsto控制台拿到的 token。
* DEVICE_IDX: 默认0，如果设备ID重复则改为1-100之间。
* PUID/PGID：获取方式：终端输入id即可。

   ![docker](./koolshare_merlin/docker1.jpeg)
   
比如上图获取的UID和GID都是0。

* /your/config-path/ddnsto-config 是你的配置文件，保证重启之后，设备ID不变。每个Docker都应该设置不同的配置文件路径

比如我想把配置文件放在/mnt/sda1/
```
    -v /mnt/sda1/ddnsto-config:/ddnsto-config
```
* 注意要替换 "<>" 里面的内容，且不能出现 "<>"。

* 准备工作做好了，比如我的TOKEN为abcdefg-8888-8888-1111-abcdefghijk，那我的终端命令就是：
```
docker run -d \
    --name=ddnsto \
    --restart always \
	--network host \
    -e TOKEN=abcdefg-8888-8888-1111-abcdefghijk \
    -e DEVICE_IDX=0 \
    -v /etc/localtime:/etc/localtime:ro \
    -v /mnt/sda1/ddnsto-config:/ddnsto-config \    
    -e PUID=0 \
    -e PGID=0 \
    linkease/ddnsto
```

* Docker在某些Linux发行版，可能要加上“sudo”前缀才能运行，按提示输入Linux的密码，命令如下：

```
sudo docker run -d \
    --name=ddnsto \
    --restart always \
	--network host \
    -e TOKEN=abcdefg-8888-8888-1111-abcdefghijk \
    -e DEVICE_IDX=0 \
    -v /etc/localtime:/etc/localtime:ro \
    -v /mnt/sda1/ddnsto-config:/ddnsto-config \    
    -e PUID=0 \
    -e PGID=0 \
    linkease/ddnsto
```

#### Docker常见问题

* Docker里面的网关设置，不能为路由器的网关，保证 Docker 里面有网络才能访问 ddnsto 服务器。

[镜像地址](https://hub.docker.com/r/linkease/ddnsto/)

* 若群晖用docker安装，建议去Docker管理器里，先停用ddnsto容器，然后编辑，开启`使用高权限执行容器`和`启用自动重新启动`，保存应用。

   ![docker](./koolshare_merlin/dd.jpg)


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