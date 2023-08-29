### 远程访问Aria2下载？
当你在外网想要远程访问你公司的NAS上的Aria2下载电影，  
我们可以使用易有云APP的应用导航。  
还可以通过易有云电脑客户端的异地互联快速实现。  
下面我们来看看如何操作吧。  

### 前置条件：
公司NAS [安装并配置易有云](/zh/guide/linkease/install/device/istoreos.md)

### 配置Aria2
[查看Aria2配置教程](/zh/guide/wiki/downloads.md#aria2下载器)

#### 现在我们来实现外网远程访问你公司的NAS使用Aria2下载电影

### 方式一：使用易有云APP的应用导航实现
#### 第一步：安装易有云
- 手机安装易有云APP，并且登录同一账号。

#### 第二步：配置易有云APP应用导航的远程下载
- 打开易有云APP，【首页】——【应用列表】里点击【立即添加】。

![image](./image/aria2/1.jpg)

- 跳板设备 选择公司NAS。

![image](./image/aria2/2.jpg)

- 应用类型：选择【远程下载】；
- 应用名称：可以随便填；
- 远程地址：填你公司NAS的内网地址加上Aria2的端口号；
- 远程密钥：填你Aria2设置的RPC令牌；
- 最后点击【保存】。

![image](./image/aria2/3.jpg)

- 现在你只需要点击【应用导航中心】的aria2 ；
- 就可以通过手机APP远程访问公司NAS使用 Aria2来下载电影了。

![image](./image/aria2/4.jpg)

![image](./image/aria2/5.jpg)


### 方式二：通过易有云电脑客户端的异地互联实现
#### 第一步：安装易有云
- 家里电脑安装易有云电脑客户端，并且登录同一账号。

#### 第二步：开启易有云电脑客户端的异地互联
- 打开家里电脑易有云客户端，开启[异地互联](/zh/guide/linkease/function/remote_connects.md)；
- 点击【添加远程设备】。

![image](./image/aria2/24.jpg)

- 私有域名：一定要填小写的英文字母；
- 跳板设备：选公司NAS；
- 远程设备IP：填公司NAS的内网IP；
- 点击【保存修改】，易有云会自动帮你生成一个【私有IP】。

![image](./image/aria2/14.jpg)


#### 第三步：复制【私有IP】或者【私有域名】到浏览器中打开
- 复制这个【私有IP】或者【私有域名】到浏览器中打开；
- 就可以远程访问你公司的NAS。

![image](./image/aria2/15.jpg)

#### 第四步：在【私有IP】或者【私有域名】后面加上Aria2的访问地址
- 在【私有IP】或者【私有域名】后面加上Aria2的访问地址；
- 就可以在家里远程访问你公司的NAS使用Aria2下载电影了。

![image](./image/aria2/22.jpg)

![image](./image/aria2/23.jpg)




