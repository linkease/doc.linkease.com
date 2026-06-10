# 铁威马 NAS 安装指南

> ⏱️ 预计耗时：5 分钟
> 📱 适用设备：铁威马（TerraMaster）全系列 NAS

---

## 安装方式

铁威马安装 DDNSTO 需要使用 Docker 进行安装。

---

## Docker 安装步骤

### 1. 安装 Docker

确保您的铁威马 NAS 已安装 Docker 应用。如未安装，请在应用中心搜索并安装 Docker。

### 2. 拉取镜像

打开 Docker 应用，在注册表/镜像中搜索 `linkease/ddnsto`，下载最新版本镜像。

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

## Docker Compose 方式

```yaml
services:
  ddnsto:
    image: registry.istoreos.com/linkease/ddnsto:latest
    container_name: ddnsto
    restart: always
    network_mode: host
    environment:
      - TOKEN=<填入你的token>
      - DEVICE_NAME=<自定义唯一设备名称ID>
    volumes:
      - /etc/localtime:/etc/localtime:ro
```

---

## 下一步

- 🟢 [配置外网域名](/zh/guide/ddnsto/quickstart/#第-3-步-配置外网域名) 

### Q: 如何升级？
A: 升级需要先删除"ddnsto"容器，再按照之前的步骤部署"ddnsto"容器。
