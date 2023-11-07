## 如何用 iStoreOS 写出更好的文档网站

大家应该知道，我们的 [文档网站](https://doc.linkease.com ) 其实也是开源的。可以从[源码地址](https://github.com/linkease/doc.linkease.com)下载到我们的源代码。

这个文档写法不是很难，如果是懂前端的，那么就非常容易了。今天这里我用 iStoreOS 来做个教程，如何直接在 iStoreOS 里面来写 iStoreOS 的文档。

TODO 视频链接待定。有了视频之后，一些命令请参考下方教程：

## 准备工作

1. 安装 iStoreOS 的设备有硬盘，并且 Docker 的目录设置到了硬盘的目录
2. 安装 Ubuntu 插件（这个是有界面的 Ubuntu 系统，从浏览器去访问到 Ubuntu 的桌面）
3. 安装 CodeServer 插件，可以在线写代码

## 安装 Nodejs 依赖并下载源代码

进入 Ubuntu 的 Terminal，然后安装 nvm 程序：

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
source ~/.bashrc
```

有了 nvm 程序，我们可以安装任意版本的 node 。那么我们安装 16.15.1 版本的 node：
```
nvm install 16.15.1
nvm use 16.15.1
```

下载源代码：
先到 [源码地址](https://github.com/linkease/doc.linkease.com) fork 代码变成自己的本地代码。
```
# 进到自己的硬盘目录
cd /mnt/xxx/ 
# 下载源代码
git clone git@github.com:你的用户名/doc.linkease.com.git
```

保证 CodeServer 有权限：
```
sudo chmod 777 -R .
```

如果单独某个文件没权限写入，可以参考这样的命令：
```
chmod 777 ./docs/zh/guide/istoreos/practice/HowToWriteDoc.md
```

配置 Git，额外可能还需要配置用户名，邮箱，以及 SSH。保证 Github 能有 SSH 的权限。（这个请自查下教程）

```
git config core.fileMode false
```

安装 Nodejs  依赖并运行：

```
cd doc.linkease.com
npm install --registry=https://registry.npmmirror.com
npm run dev
```

## CodeServer 编译源代码

如开头视频所示，需要打开 CodeServer 网页版本，然后修改 .vuepress/config.js 文件。以及其他对应的文件。

