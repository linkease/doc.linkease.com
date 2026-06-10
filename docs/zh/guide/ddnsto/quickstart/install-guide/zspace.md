# 极空间 NAS 安装指南

> ⏱️ 预计耗时：5 分钟  
> 📱 适用设备：极空间 ZSpace NAS

---

## 安装步骤

### 1. 搜索 DDNSTO 镜像

在极空间系统中，打开 Docker，并搜索 "ddnsto"：

![搜索镜像](../../resources/koolshare_merlin/zspace1.jpg)

---

### 2. 下载镜像

找到 "ddnsto"，并下载，选择 "latest" 下载最新镜像。

---

### 3. 创建容器

下载完成后，创建 "ddnsto" 容器，配置文件夹路径：

```
装载路径：
/ddnsto-config

真实路径：(可以自定义，只要能映射装载路径就可以)
/高速存储/config/ddnsto-config
```

![配置路径](../../resources/koolshare_merlin/zspace2.jpg)

---

### 4. 配置环境变量

配置环境，Token 处填入你的令牌（从 [DDNSTO 控制台](https://www.ddnsto.com/app/#/login) 获取）：

![配置Token](../../resources/koolshare_merlin/zspace3.jpg)

- DEVICE_NAME 处填入你`<自定义唯一设备名称ID>`: 必须是英文字母、数字，不能为中文；比如：`abc9527`

---

### 5. 启动容器

配置完成后，启动 "ddnsto" 容器。

---

## 视频教程

- [无法拉取易有云&DDNSTO Docker 镜像？](https://www.bilibili.com/video/BV1FnUUYeEn9/)
- [利用极空间对局域网内电脑进行远程桌面](https://www.bilibili.com/video/BV11CC1YpEW7/)

---

## 下一步

- 🟢 [配置外网域名](/zh/guide/ddnsto/quickstart/#第-3-步-配置外网域名) 

### Q: 如何升级？
A: 升级需要先删除"ddnsto"容器，再按照之前的步骤部署"ddnsto"容器。
