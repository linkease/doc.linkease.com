# Linux 安装指南

> ⏱️ 预计耗时：3 分钟
> 📱 适用系统：Ubuntu / CentOS / Debian / CasaOS 等 Linux 发行版

---

## 一键安装（推荐）

使用官方一键安装脚本：

```bash
sh -c "$(curl -sSL http://fw.koolcenter.com/binary/ddnsto/linux/install_ddnsto_linux.sh)"
```

或使用 wget：

```bash
cd /tmp; wget --no-check-certificate http://fw.koolcenter.com/binary/ddnsto/linux/install_ddnsto_linux.sh; sh ./install_ddnsto_linux.sh
```

---

## 手动安装

### 1. 下载程序

下载 DDNSTO Linux 版本：[下载地址](https://fw.koolcenter.com/binary/ddnsto/linux/)

- **X86 平台**：下载 `ddnsto.amd64`
- **ARM 平台**（树莓派等）：下载 `ddnsto.arm64`

### 2. 安装运行

**X86 平台：**
```bash
cp ddnsto.amd64 /usr/local/bin/ddnsto
ddnsto -u xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx(你的令牌) -daemon
```

**ARM 平台：**
```bash
cp ddnsto.arm64 /usr/local/bin/ddnsto
ddnsto -u xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx(你的令牌) -daemon
```

如成功连接服务器，会显示：
```
client init ok, username=xxxxx-xxxxxx-xxxxxx-xxx(你的令牌)....
```

### 3. 停止运行

```bash
systemctl stop com.linkease.ddnstoshell
```

---

## Arch Linux 安装

可以通过 AUR 仓库或[自建源](https://github.com/taotieren/aur-repo)安装：

```bash
yay -Syu ddnsto-bin
```

---

## 下一步

- 🟢 [配置外网域名](/zh/guide/ddnsto/quickstart/#第-3-步-配置外网域名) 
