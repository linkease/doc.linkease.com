# Padavan 安装指南

> ⏱️ 预计耗时：2 分钟  
> 📱 适用设备：Padavan 固件路由器

---

## 安装步骤

1. 进入路由器管理界面，找到**扩展功能 → 花生壳内网**

2. 右侧选择 **DDNSTO**，启用并设置 Token

![Padavan配置](../../resources/koolshare_merlin/image-2021022400000009.png)

---

## 注意事项

- 并不是所有的 Padavan 固件都会带 DDNSTO，这个要看固件作者是否加入 DDNSTO

---

## 常见问题

### 重启后 DDNSTO 无法使用

若 Padavan 内置二进制版本 < 0.2.9 版本，可能导致重启后 DDNSTO 无法使用，需自己[更新二进制](https://fw.koolcenter.com/binary/ddnsto/mipsel/ddnsto)。

### 多台设备 ID 识别相同

如果多台设备 ID 识别相同，可以在令牌后加：(空格) + "-x" + 编号，来区别设备。

![多设备配置](../../resources/koolshare_merlin/laomaizi-ddnsto.png)

---

## 下一步

安装完成后，请前往 [DDNSTO 控制台](https://www.ddnsto.com/app/#/devices) 添加域名映射。
