# ⚫ 开发文档

> **专为固件作者和开发者设计** —— 插件集成规范、API 文档、二次开发指南

---

## 文档导航

| 文档 | 内容 | 适用对象 |
|------|------|---------|
| [集成指南](./integration-guide.md) | 如何将 DDNSTO 集成到固件 | 固件开发者 |
| [API 参考](./api-reference.md) | DDNSTO API 接口文档 | 二次开发者 |
| [设备适配指南](./device-support.md) | 新设备适配说明 | 硬件厂商 |
| [更新日志](./changelog.md) | 版本更新记录 | 所有开发者 |

---

## 快速开始

### 如果你是固件作者

想要将 DDNSTO 集成到你的固件中？

→ 阅读 [集成指南](./integration-guide.md)

### 如果你是二次开发者

想要开发基于 DDNSTO 的应用？

→ 阅读 [API 参考](./api-reference.md)

### 如果你是硬件厂商

想要在新设备上适配 DDNSTO？

→ 阅读 [设备适配指南](./device-support.md)

---

## 技术架构

### DDNSTO 工作原理

```
┌─────────────┐      HTTPS/WSS      ┌─────────────┐      TCP/HTTP      ┌─────────────┐
│   用户浏览器  │ ◄────────────────► │  DDNSTO 服务器 │ ◄──────────────► │  DDNSTO 客户端 │
│  (任意网络)  │                    │  (云端转发)   │                  │  (内网设备)   │
└─────────────┘                    └─────────────┘                  └─────────────┘
                                                                          │
                                                                          ▼
                                                                    ┌─────────────┐
                                                                    │  内网服务    │
                                                                    │ (NAS/路由器等)│
                                                                    └─────────────┘
```

### 客户端组件

| 组件 | 功能 | 技术栈 |
|------|------|--------|
| 核心引擎 | 建立隧道连接 | C/C++ |
| Web 界面 | 本地配置管理 | Lua/HTML |
| 远程应用 | SSH/RDP/VNC 代理 | Go |
| 文件管理 | Samba/SFTP/WebDAV 桥接 | Go |

---

## 支持平台

### 已支持平台

| 平台 | 架构 | 包格式 | 维护状态 |
|------|------|--------|---------|
| OpenWrt | mips/arm/x86 | ipk | ✅ 活跃 |
| iStoreOS | arm/x86 | ipk | ✅ 活跃 |
| 群晖 DSM | x86/arm | spk | ✅ 活跃 |
| 威联通 QTS | x86 | qpkg | ✅ 活跃 |
| Docker | 全平台 | image | ✅ 活跃 |
| Windows | x86/x64 | exe | ✅ 活跃 |
| Linux | x86/arm | binary | ✅ 活跃 |

### 计划支持平台

| 平台 | 预计时间 | 状态 |
|------|---------|------|
| macOS | 待定 | 📋 规划中 |
| FreeNAS/TrueNAS | 待定 | 📋 规划中 |

---

## 开发资源

### 源码仓库

- 客户端源码：暂不开放
- Docker 镜像：[docker_ddnsto](https://github.com/linkease/docker_ddnsto)
- 文档仓库：[doc.linkease.com](https://github.com/linkease/doc.linkease.com)

### 下载地址

- 固件下载：[fw.koolcenter.com/binary/ddnsto](https://fw.koolcenter.com/binary/ddnsto/)
- Docker Hub：[hub.docker.com/r/linkease/ddnsto](https://hub.docker.com/r/linkease/ddnsto)

### 社区支持

- 论坛：[koolcenter.com](https://www.koolcenter.com)
- GitHub Issues：[github.com/linkease](https://github.com/linkease)

---

## 贡献指南

### 提交设备适配

如果你为新的设备/平台适配了 DDNSTO，欢迎提交：

1. Fork 文档仓库
2. 添加设备安装指南
3. 提交 Pull Request

### 报告问题

发现 Bug 或有功能建议：

1. 搜索现有 Issues
2. 如无重复，创建新 Issue
3. 提供详细的复现步骤和环境信息

---

## 许可证

DDNSTO 客户端采用商业许可证，具体条款请联系官方获取。

---

## 联系我们

- 商务合作：business@linkease.com
- 技术支持：[koolcenter.com](https://www.koolcenter.com)
