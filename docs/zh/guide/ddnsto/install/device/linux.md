### Linux 通用版


1. 下载ddnsto至Linux环境；

前往[DDNSTO下载地址](https://fw.koolcenter.com/binary/ddnsto/)；

选择下载最新的二进制文件压缩包，如`ddnsto-binary-3.0.2.tar.gz`。

解压后根据运行环境选择`ddnsto.x86_64`或`ddnsto.aarch64`，复制对应程序至运行环境。

2. 运行ddnsto。

以x86环境举例,先cd至ddnsto所在目录，然后终端执行以下命令：
``` shell
#赋予执行权限
chmod +x ./ddnsto.x86_64

#配置令牌参数并运行
./ddnsto.x86_64 -u xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx(你的令牌)
```
如成功连接服务器，会显示“client init ok, username=xxxxx-xxxxxx-xxxxxx-xxx(你的令牌)....”