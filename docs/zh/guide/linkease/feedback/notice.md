## Q：iStoreOS软件商店无法访问？

1. 打开首页终端执行以下命令；

```
sh -c "$(curl -sSL http://fw.koolcenter.com/iStoreOS/alpha/fix-istore.sh)"
```

## Q：无法访问koolcenter.com下载固件？

1. 下载固件可以到这里下载；

[https://fw.koolcenter.com/](https://fw.koolcenter.com/)

## Q：易有云官网或者DDNSTO官网控制台无法访问？

易有云和DDNSTO 域名正在备案中，请暂时使用以下域名访问官网。

1. [易有云： https://main.linkease.com](https://main.linkease.com)

2. [DDNSTO： https://web.ddnsto.com](https://web.ddnsto.com)

## Q：易有云PC客户端启动后显示网络错误？

遇到这种情况，可能由于www.linkease.com暂时无法访问。

![image](./image/faq/servererror.jpeg)

1. 找到易有云的配置目录。

Windows打开路径：C:\Users\【你的用户名】\LinkEase

macOS打开路径：/Users/【你的用户名】/LinkEase

2. 打开配置文件，将配置文件中的serverAddr：https://www.linkease.com:443 这个改成 https://main.linkease.com:443，保存。

![image](./image/faq/servererror2.png)