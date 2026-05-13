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
- **Value**: 您的DDNSTO令牌

### 5. 保存并启动

点击 **APPLY** 保存配置，容器会自动启动。

---

## Docker Compose 方式

如果您在 Unraid 上安装了 Docker Compose 插件，也可以使用以下配置：

```yaml
version: '3'
services:
  ddnsto:
    image: linkease/ddnsto:latest
    container_name: ddnsto
    environment:
      - TOKEN=您的DDNSTO令牌
    restart: always
```

---

## 下一步

- 🟢 [配置外网域名](/zh/guide/ddnsto/quickstart/#第-3-步-配置外网域名) 
