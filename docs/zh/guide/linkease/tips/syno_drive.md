### 如何通过异地互联使用群晖Drive
在外面想要远程公司的群晖使用Drive，  
可以通过易有云的异地互联。  
因为易有云是点对点通信，速度快。  
来看看具体操作。

### 安装易有云
- [群晖安装易有云并配置](/zh/guide/linkease/install/device/synology.md)
- [电脑安装易有云客户端](/zh/guide/linkease/install/device/windows.md)
- 登录同一易有云账号，并且群晖要在线

### 开启异地互联

打开易有云客户端，[开启异地互联](/zh/guide/linkease/function/remote_connects.md)

- 点击【添加远程设备】

![image](./image/syno_drive/1.jpg)


- 私有域名：可以自己随意填（最好填英文名）
- 跳板设备：选群晖（群晖需要安装易有云开启网盘并且在线）
- 远程设备IP：填群晖的内网IP地址

![image](./image/syno_drive/2.jpg)

- 点击保存修改，易有云会自动帮你生成一个【私有IP】

![image](./image/syno_drive/3.jpg)


- 只需要复制这个【私有IP】或【已有域名】到浏览器打开

![image](./image/syno_drive/4.jpg)


- 就可以在家里远程访问你公司的群晖了

![image](./image/syno_drive/5.jpg)


- 要访问群晖的Drive，我们可以在浏览器【私有IP】或者【私有域名】后面加上群晖Drive的地址就可以了

![image](./image/syno_drive/6.jpg)


