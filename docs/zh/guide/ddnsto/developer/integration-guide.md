# DDNSTO 插件集成指南

> 面向固件开发者的集成规范

---

## 概述

本文档描述如何将 DDNSTO 客户端集成到各类固件和系统中。

### 集成方式

| 方式 | 适用场景 | 复杂度 |
|------|---------|--------|
| 预编译二进制 | 大多数 Linux 系统 | 低 |
| Docker 容器 | 支持 Docker 的系统 | 低 |
| 源码编译 | 特殊架构/系统 | 高 |

---

## 客户端要求

### 系统要求

- Linux 内核 2.6.32+
- glibc 2.12+ 或 musl libc
- 至少 8MB 可用存储空间
- 至少 16MB 可用内存

### 网络要求

- 能够访问以下域名：
  - `tunnel.ddnsto.com`
  - `tunnel.kooldns.cn`
  - `www.ddnsto.com`
- 出站端口：443 (HTTPS/WSS)

### 依赖项

DDNSTO 客户端为静态链接，通常无额外依赖。

---

## 集成步骤

### 1. 获取客户端

#### 下载预编译版本

从官方仓库下载对应架构的客户端：

```bash
# 下载地址格式
https://fw.koolcenter.com/binary/ddnsto/openwrt/{arch}/ddnsto

# 支持的架构
- aarch64_cortex-a53  # 主流 ARM64 路由器
- aarch64_cortex-a72  # 高性能 ARM64
- arm_cortex-a7        # 部分 ARM 路由器
- arm_cortex-a9        # 旧款 ARM 路由器
- mipsel_24kc          # MT7621 等
- x86_64               # x86 软路由
```

#### Docker 方式

```bash
docker pull linkease/ddnsto:latest
```

---

### 2. 配置管理

#### 配置文件位置

建议配置文件路径：

```
/etc/ddnsto/config.json
```

#### 配置格式

```json
{
  "token": "your_token_here",
  "device_name": "MyRouter",
  "server": "tunnel.ddnsto.com",
  "log_level": "info"
}
```

#### 配置项说明

| 配置项 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| token | string | 是 | 用户令牌 |
| device_name | string | 否 | 设备显示名称 |
| server | string | 否 | 服务器地址，默认 tunnel.ddnsto.com |
| log_level | string | 否 | 日志级别：debug/info/warn/error |

---

### 3. 启动脚本

#### OpenWrt 风格 init 脚本

```bash
#!/bin/sh /etc/rc.common

START=99
STOP=10

USE_PROCD=1

start_service() {
    local token=$(uci get ddnsto.config.token 2>/dev/null)
    [ -z "$token" ] && return 1
    
    procd_open_instance
    procd_set_param command /usr/bin/ddnsto
    procd_append_param command -t "$token"
    procd_set_param respawn
    procd_close_instance
}

stop_service() {
    killall ddnsto 2>/dev/null
}
```

#### Systemd 服务

```ini
# /etc/systemd/system/ddnsto.service
[Unit]
Description=DDNSTO Client
After=network.target

[Service]
Type=simple
ExecStart=/usr/bin/ddnsto -t YOUR_TOKEN
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

---

### 4. Web 界面集成

#### LuCI 界面（OpenWrt）

参考现有实现：
- 模型文件：`luCI/model/cbi/ddnsto.lua`
- 控制器：`luCI/controller/ddnsto.lua`

#### 其他 Web 框架

提供简单的 HTTP API 供 Web 界面调用：

```bash
# 获取状态
curl http://127.0.0.1:4040/api/status

# 更新配置
curl -X POST http://127.0.0.1:4040/api/config \
  -H "Content-Type: application/json" \
  -d '{"token":"new_token"}'

# 重启服务
curl -X POST http://127.0.0.1:4040/api/restart
```

---

## 扩展功能集成

### 文件管理功能

启用扩展功能需要在配置中添加：

```json
{
  "token": "your_token",
  "enable_webdav": true,
  "webdav_port": 3344,
  "webdav_username": "admin",
  "webdav_password": "password",
  "shared_disk": "/mnt/sda1"
}
```

### 远程开机功能

需要系统支持 `ether-wake` 或 `wakeonlan` 命令。

---

## 打包规范

### OpenWrt IPK

#### Makefile 模板

```makefile
include $(TOPDIR)/rules.mk

PKG_NAME:=ddnsto
PKG_VERSION:=3.0.0
PKG_RELEASE:=1

PKG_SOURCE:=ddnsto-$(PKG_VERSION).tar.gz
PKG_SOURCE_URL:=https://fw.koolcenter.com/binary/ddnsto/openwrt/$(ARCH)/
PKG_HASH:=skip

include $(INCLUDE_DIR)/package.mk

define Package/ddnsto
  SECTION:=net
  CATEGORY:=Network
  TITLE:=DDNSTO - Intranet Penetration
  DEPENDS:=+libc
  URL:=https://www.ddnsto.com/
endef

define Package/ddnsto/description
  DDNSTO is a fast and easy-to-use intranet penetration tool.
endef

define Package/ddnsto/install
	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/ddnsto $(1)/usr/bin/
	$(INSTALL_DIR) $(1)/etc/config
	$(INSTALL_CONF) ./files/ddnsto.config $(1)/etc/config/ddnsto
	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_BIN) ./files/ddnsto.init $(1)/etc/init.d/ddnsto
endef

$(eval $(call BuildPackage,ddnsto))
```

### 群晖 SPK

#### 目录结构

```
ddnsto/
├── INFO
├── PACKAGE_ICON.PNG
├── package.tgz
│   ├── bin/ddnsto
│   ├── conf/resource
│   └── scripts/
│       ├── start-stop-status
│       ├── installer
│       └── common
```

#### INFO 文件示例

```ini
package="ddnsto"
version="3.0.0-001"
arch="noarch"
description="DDNSTO - Intranet Penetration Tool"
maintainer="Linkease"
maintainer_url="https://www.ddnsto.com/"
distributor="Linkease"
distributor_url="https://www.linkease.com/"
```

---

## 测试清单

集成完成后，请进行以下测试：

### 基础功能
- [ ] 客户端正常启动
- [ ] 使用 Token 成功连接服务器
- [ ] 设备在控制台显示在线
- [ ] 域名映射正常工作
- [ ] 重启后自动启动

### 扩展功能（如启用）
- [ ] 文件管理功能正常
- [ ] WebDAV 服务可访问
- [ ] 远程开机功能正常

### 稳定性
- [ ] 长时间运行不崩溃
- [ ] 网络断开后自动重连
- [ ] 内存占用稳定

---

## 常见问题

### Q: 客户端启动后立即退出？

检查：
- Token 是否正确
- 系统架构是否匹配
- 是否有执行权限

### Q: 设备显示离线？

检查：
- 设备能否访问外网
- 防火墙是否放行
- 时间是否正确

### Q: 如何调试？

启动时添加 `-v` 参数开启详细日志：

```bash
ddnsto -t YOUR_TOKEN -v
```

---

## 技术支持

- 论坛：https://www.koolcenter.com
- 邮箱：support@linkease.com
