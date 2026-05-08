# 🔵 场景指南

> **专为进阶用户设计** —— 针对具体使用场景，提供详细的操作指南

---

## 场景速查表

| 场景 | 适用用户 | 难度 | 文档链接 |
|------|---------|------|---------|
| 🏠 NAS 远程访问 | 家庭用户 | ⭐⭐ | [查看详情](./nas-remote-access.md) |
| ⬇️ 远程下载 | 下载爱好者 | ⭐⭐⭐ | [查看详情](./remote-download.md) |
| 🖥️ 远程桌面 | 远程办公 | ⭐⭐⭐ | [查看详情](./remote-desktop.md) |
| 🖥️ SSH 远程管理 | 运维人员 | ⭐⭐ | [查看详情](./remote-ssh.md) |
| 📁 文件管理 | 所有用户 | ⭐⭐ | [查看详情](./file-management.md) |
| ⚡ 远程开机 | 进阶用户 | ⭐⭐⭐ | [查看详情](./remote-wol.md) |
| 🎬 影音服务器 | 影音爱好者 | ⭐⭐ | [查看详情](./jellyfin.md) |
| 🖥️ PVE/ESXi 管理 | 虚拟化用户 | ⭐⭐ | [查看详情](./pve-esxi.md) |
| 💻 开发测试 | 开发者 | ⭐⭐ | [查看详情](./developer-webhook.md) |

---

## 用户故事

### 场景一：家庭 NAS 远程访问

**用户：** 张先生（家庭用户）  
**需求：** 在外访问家中群晖 NAS  
**痛点：** 没有公网 IP，无法远程访问

**解决方案：**
1. 在路由器安装 DDNSTO 插件
2. 扫码绑定设备
3. 添加域名映射：`nas.zhanghome.ddnsto.com`
4. 手机随时访问 NAS 照片和视频

[查看详细教程 →](./nas-remote-access.md)

---

### 场景二：开发者本地测试

**用户：** 小李（前端开发者）  
**需求：** 将本地开发环境暴露给团队测试  
**痛点：** ngrok 免费版限制多，域名经常变化

**解决方案：**
1. 在 Mac 安装 DDNSTO 客户端
2. 配置固定域名：`dev.li.ddnsto.com`
3. 映射到 `localhost:3000`
4. 团队随时访问，支持 WebSocket 热更新

[查看详细教程 →](./developer-webhook.md)

---

### 场景三：企业远程运维

**用户：** 王工（IT 运维工程师）  
**需求：** 安全远程管理分散的服务器  
**痛点：** TeamViewer 有授权限制，无法集中管理

**解决方案：**
1. 在各服务器安装 DDNSTO
2. 配置企业版集中管理
3. 设置 IP 白名单限制访问
4. 开启操作审计日志

[查看详细教程 →](./remote-ssh.md)

---

## 按功能分类

### 🌐 远程访问
- [NAS 远程访问](./nas-remote-access.md) —— 群晖、威联通等 NAS 外网访问
- [PVE/ESXi 管理](./pve-esxi.md) —— 虚拟机管理平台远程访问
- [开发测试环境](./developer-webhook.md) —— 本地开发环境暴露

### ⬇️ 远程控制
- [远程下载](./remote-download.md) —— Aria2、qBittorrent、Transmission
- [远程桌面](./remote-desktop.md) —— Windows RDP、VNC
- [SSH 远程管理](./remote-ssh.md) —— 服务器远程维护
- [远程开机](./remote-wol.md) —— Wake On Lan 远程唤醒

### 📁 文件管理
- [文件管理](./file-management.md) —— Samba、SFTP、WebDAV 远程访问

### 🎬 媒体服务
- [Jellyfin 影音服务器](./jellyfin.md) —— 个人媒体中心远程访问

---

## 快速开始

选择一个你想实现的场景，点击对应链接查看详细步骤：

1. **刚装好 DDNSTO？** → 先实现 [NAS 远程访问](./nas-remote-access.md)
2. **想远程下载？** → 查看 [远程下载配置](./remote-download.md)
3. **要远程办公？** → 学习 [远程桌面](./remote-desktop.md)
4. **管理服务器？** → 掌握 [SSH 远程管理](./remote-ssh.md)

---

## 遇到问题？

- 🔴 [故障排查](../troubleshooting/README.md) —— 常见问题和解决方法
- 🔴 [连接问题](../troubleshooting/connection-issues.md) —— 设备离线、访问失败
- 🔴 [域名问题](../troubleshooting/domain-issues.md) —— 域名解析、访问异常
