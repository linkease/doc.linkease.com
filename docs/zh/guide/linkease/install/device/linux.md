### Linux/Ubuntu/Centeros/Debian/Casaos



#### 1. 获取易有云linux链接： 

点击[易有云下载链接](https://www.linkease.com/download/?platform=更多)，打开易有云存储端下载页面。

根据更新日期，复制最新的版本下载链接。

![liunx21.jpg](./image/linux/liunx1.jpg)


#### 2. 登录您的linux系统 
通过wget命令将易有云储存端程序下载至本地（最终指令以实际下载链接为准）：
```shell
wget http://fw0.koolcenter.com/binary/LinkEase/LinuxStorage/linkease-binary-1.2.0.tar.gz
```

![liunx2.jpg](./image/linux/liunx2.jpg)
 

下载成功后进行解压，命令如下（具体文件名以实际下载为准）：
```shell
tar -zxvf linkease-binary-1.2.0.tar.gz
```

![liunx3.jpg](./image/linux/liunx2-1.jpg)

#### 3.设置权限 

先进入解压后的目录（具体文件名以实际为准）：
```shell 
cd linkease-binary-1.2.0
```

![liunx3.jpg](./image/linux/liunx3.jpg)

文件夹内包含所有架构的二进制文件，只需选择你的设备对应的架构即可，如：

x86_64架构给予软件运行权限：

```shell 
chmod 755 linkease.x86_64
```

arm架构给予软件运行权限：：

```shell 
chmod 755 linkease.arm
```


#### 4.运行软件 

x86_64架构:

```shell 
./linkease.x86_64 --serviceControl installAndStart
```

arm架构:

```shell 
./linkease.arm --serviceControl installAndStart
```
  
运行成功后会显示
```
Run in daemon result: OK
waiting configuration, web config link is: http://172.17.0.2:8897
```

#### 5. 绑定

使用浏览器打开管理页面，如 http://172.17.0.2:8897 （具体链接请以终端提示为准）

**7.安装后第一次打开，需要绑定设备，请查看 [易有云绑定教程](/zh/guide/linkease/install/cloud.md)。**
