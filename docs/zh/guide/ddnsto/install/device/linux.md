### Linux/Ubuntu/Centeros/Debian/Casaos/海纳思NAS

#### 一键安装&运行脚本
``` shell
sh -c "$(curl -sSL http://fw.koolcenter.com/binary/ddnsto/linux/install_ddnsto_linux.sh)"
```
或
``` shell
cd /tmp; wget --no-check-certificate http://fw.koolcenter.com/binary/ddnsto/linux/install_ddnsto_linux.sh; sh ./install_ddnsto_linux.sh
```

#### 手动安装运行
1. 下载ddnsto至Linux环境：[DDNSTO Linux版本下载地址](https://fw.koolcenter.com/binary/ddnsto/linux/)；


 X86 平台设备请下载ddnsto.amd64

 ARM平台（树莓派等设备）请下载ddnsto.arm64  

 2. 后台运行ddnsto
 
 终端执行以下命令
``` shell
#  X86 平台
cp ddnsto.amd64 /usr/local/bin/ddnsto
ddnsto  -u xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx(你的令牌) -daemon
```

``` shell
# ARM平台
cp ddnsto.arm64 /usr/local/bin/ddnsto
ddnsto  -u xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx(你的令牌) -daemon
```

如成功连接服务器，会显示“client init ok, username=xxxxx-xxxxxx-xxxxxx-xxx(你的令牌)....”

3. 停止运行

终端执行以下命令
``` shell
systemctl stop com.linkease.ddnstoshell
```