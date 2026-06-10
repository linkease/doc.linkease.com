# Unraid 安装指南

> ⏱️ 预计耗时：5 分钟
> 📱 适用设备：Unraid NAS 系统

---

## 安装方式

Unraid 安装 DDNSTO 推荐使用 Docker 方式。

---

## Docker 安装步骤

### 1. 打开 Docker 页面

在 Unraid 管理界面，点击顶部菜单的 **Docker**

### 2. 添加容器

点击 **ADD CONTAINER** 按钮添加新容器

### 3. 配置容器参数

| 参数 | 值 |
|-----|---|
| Name | ddnsto |
| Repository | linkease/ddnsto |
| Network Type | Bridge |

### 4. 添加环境变量

点击 **Add another Path, Port, Variable, Label or Device**，添加环境变量：

- **Config Type**: Variable
- **Name**: TOKEN
- **Key**: TOKEN
- **Value**: 你的DDNSTO令牌

### 5. 保存并启动

点击 **APPLY** 保存配置，容器会自动启动。

---

## Docker Compose 方式

如果您在 Unraid 上安装了 Docker Compose 插件，也可以使用以下配置：

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
- `<填入你的token>`: 填写从 [DDNSTO 控制台](https://www.ddnsto.com/app/#/login) 拿到的令牌
- `<自定义唯一设备名称ID>`: 必须是英文字母、数字，不能为中文；比如：`abc9527`
- 替换 "<>" 里面的内容，且不能出现 "<>"
---

## 下一步

- 🟢 [配置外网域名](/zh/guide/ddnsto/quickstart/#第-3-步-配置外网域名) 

### Q: 如何升级？
A: 升级需要先删除"ddnsto"容器，再按照之前的步骤部署"ddnsto"容器。
