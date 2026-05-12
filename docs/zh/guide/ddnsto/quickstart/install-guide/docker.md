# Docker 安装指南

> ⏱️ 预计耗时：3 分钟 
> 📱 适用设备：任何支持 Docker 的设备（群晖、威联通、Unraid、Linux 服务器等）

---

## 安装步骤

### 1. 准备 Token

1. 打开 [DDNSTO 控制台](https://www.ddnsto.com/app/#/login)
2. 微信扫码登录
3. 点击右上角 → "令牌"，复制你的 Token

![获取Token](../../resources/koolshare_merlin/ddnsto1.png)

---

### 2. 运行 Docker 容器

#### 通用 Docker 命令，终端运行以下命令：

```bash
docker run -d \
    --name=ddnsto \
    --restart always \
    --network host \
    -e TOKEN=<填入你的token> \
    -e DEVICE_NAME=<自定义唯一设备名称ID> \
    -v /etc/localtime:/etc/localtime:ro \
    registry.istoreos.com/linkease/ddnsto:4.0.5
```

**参数说明：**
- `<填入你的token>`: 填写从 DDNSTO 控制台拿到的 TOKEN
- `<自定义唯一设备名称ID>`: 必须是英文字母、数字，不能为中文；比如：`abc9527`

**注意：**
- 替换 "<>" 里面的内容，且不能出现 "<>"
- 例如 TOKEN 为 `abcd-8888-7777-6666-efgh`，设备名称 ID 为 `abc9527`
- 某些系统运行 docker，需要“sudo”提权，按提示输入密码，命令如下：

```bash
sudo docker run -d \
    --name=ddnsto \
    --restart always \
    --network host \
    -e TOKEN=abcd-8888-7777-6666-efgh \
    -e DEVICE_NAME=abc9527 \
    -v /etc/localtime:/etc/localtime:ro \
    registry.istoreos.com/linkease/ddnsto:4.0.5
```

---

## Docker Compose 配置

如果你使用 Docker Compose，可以使用以下配置：

```yaml
services:
  ddnsto:
    image: registry.istoreos.com/linkease/ddnsto:4.0.5
    container_name: ddnsto
    restart: always
    network_mode: host
    environment:
      - TOKEN=<填入你的token>
      - DEVICE_NAME=<自定义唯一设备名称ID>
    volumes:
      - /etc/localtime:/etc/localtime:ro
```

- `<填入你的token>`: 填写从 DDNSTO 控制台拿到的 TOKEN
- `<自定义唯一设备名称ID>`: 必须是英文字母、数字，不能为中文；比如：`abc9527`

保存为 `docker-compose.yml`，然后运行：

```bash
docker-compose up -d
```

---

## 下一步

- 🟢 [配置外网域名](/zh/guide/ddnsto/quickstart/#第-3-步-配置外网域名) 

---

## 常见问题

### Q: 容器启动后设备不显示？
A: 检查：
- Token 是否填写正确
- 容器日志是否有错误：`docker logs ddnsto`
- 设备是否能正常访问外网

### Q: 如何更新容器？

```bash
# 停止并删除旧容器
docker stop ddnsto
docker rm ddnsto

# 拉取最新镜像
docker pull linkease/ddnsto

# 重新运行
docker run -d \
    --name ddnsto \
    --restart always \
    --net host \
    -e TOKEN=你的Token \
    linkease/ddnsto
```

### Q: 如何查看日志？

```bash
docker logs ddnsto
```

