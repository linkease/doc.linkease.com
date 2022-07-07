## 安装

**Docker方式安装易有云存储端，包括并不限于Unraid/爱快/群晖等，只要有Docker的设备都成，包括一些Linux发行版等。**

* 铁威马：首先在应用中心里安装Docker(TOS 4.0及更高的系统)，然后在控制面板——终端与SNMP——启用SSH访问。然后电脑利用putty、xshell等工具登录终端，然后输入“sudo -i”和密码获取临时ROOT权限，然后进行下面的教程。

* 群晖：在控制面板——终端机与SNMP——启用SSH访问。然后电脑利用putty、xshell等工具登录终端，然后输入“sudo -i”和密码获取临时ROOT权限，然后进行下面的教程。

* Linux发行版：某些Linux系统可能默认不自带Docker，那么就需要终端命令安装Docker：

```
首先执行：curl -sSL https://get.docker.com/ | sh

上一条命令执行完毕后，执行：sudo chmod 777 /var/run/docker.sock
```
Docker安装完成后，进行下面的教程。


**Docker安装易有云存储端教程开始：**

**1.终端运行以下命令：(先不要直接复制，看下面的说明)**

```
docker run -d \
    -p 8897:8897 \
    --network host \
    --name linkease \
    --restart unless-stopped \
    -v /root/linkease-data:/linkease-data \
    -v /root/linkease-config:/linkease-config \
    -v /etc/localtime:/etc/localtime:ro \
    -e PUID=<uid for user> \
    -e PGID=<gid for user> \
    linkease/linkease:latest
```

 * PUID/PGID：获取方式：终端输入id即可。

![docker1](./docker/docker1.jpeg)
   
比如上图获取的UID和GID都是0。

 * 注意要替换 "<>" 里面的内容，且不能出现 "<>"。

 * 准备工作做好了，那我的终端命令就是：

```
docker run -d \
    -p 8897:8897 \
    --network host \
    --name linkease \
    --restart unless-stopped \
    -v /root/linkease-data:/linkease-data \
    -v /root/linkease-config:/linkease-config \
    -v /etc/localtime:/etc/localtime:ro \
    -e PUID=0 \
    -e PGID=0 \
    linkease/linkease:latest
```

 * Docker在某些Linux发行版，可能要加上“sudo”前缀才能运行，按提示输入Linux的密码，命令如下：

```
sudo docker run -d \
    -p 8897:8897 \
    --network host \
    --name linkease \
    --restart unless-stopped \
    -v /root/linkease-data:/linkease-data \
    -v /root/linkease-config:/linkease-config \
    -v /etc/localtime:/etc/localtime:ro \
    -e PUID=0 \
    -e PGID=0 \
    linkease/linkease:latest
```


 * 某些特殊的Linux发行版，可能选不到存储目录，这样就需要单独挂载出来：
 
/mnt/sda1:/My-storage  把系统的mnt/sda1(根据自身系统路径填写)硬盘路径映射为/My-storage，便于后面绑定存储端。

 若是多个硬盘路径：
``` 
    -v /mnt/sda1:/My-storage \
    -v /mnt/sda2:/My-storage1 \
    -v /mnt/sda3:/My-storage2 \	
```

加上自定义挂载路径后的命令：
```
sudo docker run -d \
    -p 8897:8897 \
    --network host \
    --name linkease \
    --restart unless-stopped \
    -v /root/linkease-data:/linkease-data \
    -v /root/linkease-config:/linkease-config \
    -v /etc/localtime:/etc/localtime:ro \
    -v /mnt/sda1:/My-storage \
    -e PUID=0 \
    -e PGID=0 \
    linkease/linkease:latest
```



**2.安装后第一次打开(访问地址: http://docker设备ip:8897)，需要绑定设备，请查看 [存储端绑定教程](/zh/guide/linkease_app/bind.md)。**

## 常见问题

**注意事项：**

* 易有云尽可能使用点对点进行网络传输，建议网络配置使用host网络，不要使用bridge网络(可能造成samba等协议无法访问)。

[镜像地址](https://hub.docker.com/r/linkease/linkease/)

* 若群晖用docker安装，建议去Docker管理器里，先停用linkease容器，然后编辑，开启`使用高权限执行容器`和`启用自动重新启动`，保存应用。

![docker1](./docker/docker2.jpg)
