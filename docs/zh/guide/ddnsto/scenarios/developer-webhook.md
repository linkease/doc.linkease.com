# 开发者 Webhook 测试

> 💻 将本地开发环境暴露到外网，方便接收 Webhook 回调

> ⏱️ 预计配置时间：3 分钟

> 📱 适用：前端开发、后端开发、API 调试

---

## 适用场景

| 场景 | 说明 |
|------|------|
| **Webhook 调试** | 接收微信支付、GitHub、钉钉等平台的 Webhook 回调 |
| **团队协作** | 让团队成员访问你本地的开发环境 |
| **移动开发** | 手机真机调试本地后端 API |
| **第三方集成** | 对接需要固定回调地址的第三方服务 |
| **演示分享** | 临时将本地项目分享给他人预览 |

---

## 方案对比

| 方案 | 域名 | 带宽 | 稳定性 | 适用场景 |
|------|------|------|--------|---------|
| **DDNSTO** | 固定 | 4-8Mbps | ⭐⭐⭐ | 长期开发、团队协作 |
| ngrok 免费版 | 随机 | 1Mbps | ⭐⭐ | 临时测试 |
| ngrok 付费版 | 固定 | 高 | ⭐⭐⭐ | 企业级应用 |

**DDNSTO 优势：**
- ✅ 固定域名，重启不变
- ✅ 支持 WebSocket，热更新无问题
- ✅ 无需安装客户端，浏览器配置
- ✅ 自动 HTTPS 证书

---

## 配置步骤

### 1. 安装 DDNSTO

在开发机器上安装 DDNSTO：

#### Windows

1. 下载 [Windows 客户端](https://fw.koolcenter.com/binary/ddnsto/pc/ddnsto-win.zip)
2. 解压运行 `ddnsto.exe`
3. 填入 Token


#### Linux

```bash
# 下载对应架构的二进制文件
wget https://fw.koolcenter.com/binary/ddnsto/linux/x86_64/ddnsto
chmod +x ddnsto

# 运行
./ddnsto -t YOUR_TOKEN
```

#### Docker

```bash
docker run -d \
  --name ddnsto \
  --net host \
  -e TOKEN=YOUR_TOKEN \
  linkease/ddnsto
```

---

### 2. 添加域名映射

1. 登录 [DDNSTO 控制台](https://www.ddnsto.com/app/#/login)
2. 等待开发机设备上线
3. 点击 **"+"** 添加映射

| 配置项 | 值 | 说明 |
|-------|-----|------|
| 域名前缀 | 自定义 | 如 `dev-project` |
| 目标主机 | `http://127.0.0.1:3000` | 本地开发服务器地址 |

**常见开发端口：**

| 框架/工具 | 默认端口 |
|---------|---------|
| React/Vue/Angular | 3000/8080 |
| Node.js/Express | 3000 |
| Python/Django | 8000 |
| Python/Flask | 5000 |
| Java/Spring Boot | 8080 |
| PHP/Laravel | 8000 |

---

### 3. 访问本地开发环境

1. 浏览器访问 `https://dev-project.ddnsto.com`
2. 首次访问需要微信验证
3. 即可看到本地开发环境

---

## Webhook 配置示例

### GitHub Webhook

1. GitHub 仓库 → Settings → Webhooks → Add webhook
2. Payload URL: `https://dev-project.ddnsto.com/webhook`
3. Content type: `application/json`
4. 选择触发事件

### 微信支付回调

1. 微信支付商户平台 → 产品中心 → 开发配置
2. 支付回调 URL: `https://dev-project.ddnsto.com/api/pay/callback`

### 钉钉机器人

1. 钉钉群 → 群设置 → 智能群助手 → 添加机器人
2. Webhook 地址: `https://dev-project.ddnsto.com/api/dingtalk`

---

## WebSocket 支持

DDNSTO 支持 WebSocket，以下场景可以正常使用：

- ✅ React/Vue/Angular 热更新（HMR）
- ✅ WebSocket 实时通信
- ✅ Socket.io 应用
- ✅ 在线协作工具

**无需额外配置**，直接使用即可。

---

## 多环境管理

如果你同时开发多个项目，可以配置多个域名：

| 项目 | 本地端口 | DDNSTO 域名 |
|------|---------|------------|
| 项目 A | 3000 | `https://dev-a.ddnsto.com` |
| 项目 B | 3001 | `https://dev-b.ddnsto.com` |
| API 服务 | 8080 | `https://dev-api.ddnsto.com` |

---

## 团队协作

### 共享开发环境

1. 将 DDNSTO 域名分享给团队成员
2. 团队成员访问时需要你的微信验证
3. 或让团队成员使用同一 WiFi（同一公网 IP 只需验证一次）

### 配合易有云使用

如果需要频繁传输文件，可以：
1. 开发机安装易有云
2. 通过 DDNSTO 穿透易有云网页端
3. 团队成员可以下载/上传文件

---

## 常见问题

### Q: WebSocket 连接失败？

A: 检查：
- 本地开发服务器是否支持 WebSocket
- WebSocket 地址是否使用了 wss://（DDNSTO 自动处理）

### Q: 热更新不生效？

A: 确保：
- 开发服务器配置允许外部访问
- webpack/vite 配置 `host: '0.0.0.0'`

### Q: 如何查看访问日志？

A: DDNSTO 控制台提供访问日志功能，可以查看：
- 访问时间
- 访问 IP
- 请求路径

### Q: 支持自定义子域名吗？

A: 目前不支持完全自定义域名，但可以在前缀部分自定义，如 `yourname-project.ddnsto.com`。

### Q: 开发机关机后域名还能用吗？

A: 不能，DDNSTO 域名指向你的开发机，开发机关机后域名会无法访问。

---

## 最佳实践

### 1. 使用环境变量

在代码中使用环境变量配置 API 地址：

```javascript
// .env.development
VUE_APP_API_URL=http://localhost:8080

// .env.production
VUE_APP_API_URL=https://dev-api.ddnsto.com
```

### 2. 配置 CORS

后端服务需要配置跨域：

```javascript
// Node.js/Express
app.use(cors({
  origin: ['https://dev-project.ddnsto.com', 'http://localhost:3000']
}));
```

### 3. 使用 HTTPS

DDNSTO 自动提供 HTTPS，确保你的应用也能正确处理 HTTPS：

```javascript
// 检查协议
if (location.protocol === 'https:') {
  // HTTPS 特定逻辑
}
```

---

## 下一步

- 🖥️ [SSH远程管理](./remote-ssh.md) —— 远程管理开发服务器
- 📁 [文件管理](./file-management.md) —— 远程传输代码文件
- 🎬 [Jellyfin](./jellyfin.md) —— 搭建个人媒体中心放松一下吧
