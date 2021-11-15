---
title: Let's Encrypt根证书已于9月30日过期,导致DDNSTO无法显示二维码。
date: 2021-10-18
tag: 证书过期
tags: 
  - 证书过期
description: 部分老版本Windows用户缺少证书无法显示二维码，请安装Let’s Encrypt最新证书 
---

# 部分老版本Windows用户缺少证书,导致无法显示二维码

## 先下载证书：
[ISRG Root X1](https://letsencrypt.org/certs/isrgrootx1.pem)

[ISRG Root X2](https://letsencrypt.org/certs/isrg-root-x2.pem)

[Let’s Encrypt R3](https://letsencrypt.org/certs/lets-encrypt-r3.pem)
 
如因证书问题导致以上链接无法下载， 可在如下仓库下载

[fw.koolcenter.com](https://fw.koolcenter.com/binary/certs/)


## 在浏览器内安装
![](/assets/posts/install-cert1.jpg)
![](/assets/posts/install-cert2.png)


安装后刷新页面即可。

参考资料：

[DST Root CA X3 Expiration (September 2021)](https://letsencrypt.org/zh-cn/docs/dst-root-ca-x3-expiration-september-2021/)

[Let's Encrypt根证书将过期，请在9月30日前及时更新](https://www.163.com/dy/article/GL2TBL7205527E9J.html)