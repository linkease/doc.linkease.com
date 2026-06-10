# 绿联 NAS 安装指南

> ⏱️ 预计耗时：5 分钟  
> 📱 适用设备：绿联（UGREEN）全系列 NAS

---

## 安装方式

绿联 NAS 安装 DDNSTO 需要使用 Docker 进行安装。

---

## Docker 安装步骤

### 1. 打开 Docker 应用

在绿联 NAS 的桌面或应用中心找到 Docker 应用并打开。

### 2. 拉取镜像

在 Docker 镜像仓库中搜索 `linkease/ddnsto`，下载最新版本镜像。

### 3. 创建容器

创建容器时配置以下参数：

| 参数 | 值 |
|-----|---|
| 镜像 | linkease/ddnsto |
| 环境变量 | TOKEN=您的DDNSTO令牌 |
| 环境变量 | DEVICE_NAME=自定义唯一设备名称ID |
| 重启策略 | 始终重启 |

- `<自定义唯一设备名称ID>`: 必须是英文字母、数字，不能为中文；比如：`abc9527`

### 4. 启动容器

启动容器后，DDNSTO 会自动连接服务器。

---

## 参考教程

详细的 Docker 安装步骤可参考 [Docker通用安装教程](./docker.md)。

---

## 镜像拉取问题

如遇无法拉取 Docker 镜像的问题，请参考视频教程：[无法拉取易有云&DDNSTO Docker镜像？](https://www.bilibili.com/video/BV1FnUUYeEn9/)

---

## 下一步

- 🟢 [配置外网域名](/zh/guide/ddnsto/quickstart/#第-3-步-配置外网域名) 

### Q: 如何升级？
A: 升级需要先删除"ddnsto"容器，再按照之前的步骤部署"ddnsto"容器。
