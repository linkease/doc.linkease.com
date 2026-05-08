# 连接问题排查

> 解决设备离线、无法连接等网络相关问题

---

## 设备显示离线

### 症状
- 控制台中设备状态显示"离线"
- 域名无法访问
- 之前正常，突然离线

### 排查步骤

#### 1. 检查 Token 配置

**问题：** Token 填写错误或过期

**检查方法：**
- 登录 [DDNSTO 控制台](https://www.ddnsto.com/app/#/login)
- 查看令牌页面，确认 Token 是否正确
- 对比设备上填写的 Token 是否一致

**解决：**
- 重新复制 Token 填入设备
- 注意：Token 不要有多余空格

---

#### 2. 检查网络连接

**问题：** 设备无法访问外网

**检查方法：**

在设备上执行以下命令：

```bash
# 测试能否访问 DDNSTO 服务器
ping ddnsto.com
ping kooldns.cn
ping tunnel.ddnsto.com
```

**解决：**
- 检查设备网络配置
- 检查路由器是否限制设备访问外网
- 检查防火墙设置

---

#### 3. 检查时间同步

**问题：** 设备时间不正确导致认证失败

**检查方法：**

```bash
# 查看当前时间
date

# 同步时间（OpenWrt/Linux）
ntpd -p ntp.aliyun.com
```

**解决：**
- 同步设备时间后重启 DDNSTO 插件
- 或等待 1-2 分钟后自动同步

---

#### 4. 检查插件版本

**问题：** 插件版本过旧

**解决：**
- 升级到最新版本 DDNSTO
- 各平台升级方法：
  - iStoreOS：iStore 应用商店直接更新
  - 群晖：卸载旧版，安装新版
  - Docker：拉取最新镜像

---

## 刚操作后设备离线

### 症状
- 切换服务器后设备离线
- 编辑域名后设备离线
- 更换套餐后设备离线

### 原因
这是正常现象，插件需要重新初始化连接。

### 解决
1. 等待 1 分钟
2. 刷新控制台页面
3. 如果 5 分钟后仍离线，按上述排查步骤检查

---

## 服务器维护

### 症状
- 所有设备同时离线
- 控制台无法访问

### 原因
DDNSTO 服务器升级维护。

### 解决
1. 查看官方公告
2. 等待维护完成
3. 维护完成后设备会自动上线

---

## 网络白名单设置

### 症状
- 网络正常，但设备无法连接 DDNSTO
- 其他设备可以，特定设备不行

### 原因
路由器或防火墙拦截了 DDNSTO 连接。

### 解决
将以下地址添加到白名单：

```
tunnel.ddnsto.com
tunnel.kooldns.cn
tunnel.tocmcc.cn
www.kooldns.cn
www.tocmcc.cn
www.ddnsto.com
```

---

## 日志收集

当需要技术支持时，请提供以下日志：

### OpenWrt/iStoreOS

```bash
# 查看 DDNSTO 日志
logread | grep ddnsto

# 查看进程状态
ps | grep ddnsto
```

### Docker

```bash
# 查看容器日志
docker logs ddnsto
```

### 群晖

1. 打开套件中心 → DDNSTO → 查看日志
2. 或 SSH 登录后查看：`/var/log/ddnsto.log`

---

## 快速修复流程

```
1. 等待 1-2 分钟
   ↓
2. 刷新控制台页面
   ↓
3. 检查 Token 是否正确
   ↓
4. 重启 DDNSTO 插件
   ↓
5. 检查网络连接（ping ddnsto.com）
   ↓
6. 同步设备时间
   ↓
7. 升级 DDNSTO 版本
   ↓
8. 联系技术支持
```
