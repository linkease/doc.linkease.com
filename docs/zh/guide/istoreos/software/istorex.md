# 使用说明

istorex 目前朝着 Unraid 的方向发展，提供一个平板风格的 UI 界面，把应用，虚拟机，Docker 模板铺开，让用户更快的找到自己的应用。  

目前 iStoreX 还没完全做好对老版本的 iStoreOS 的兼容，未来老版本，则会自动沿用老的 UI 界面。  
今天更新的版本，必须更新到最新固件，才能更新到最新的 quickstart，最新的 istorex UI 界面才能正常工作。
大家可以用这里的教程更新到最新版本，不满意也可以用这里的教程回退到老版本。

## 如果不想更新固件,也想更新体验最新的 istorex

首先不推荐这个方法，但是如果你冒着出问题的风险，可以尝试下更新到最新的 quickstart

```
is-opkg install 'quickstart' 'luci-app-quickstart'
```


## 更新到老版本的方法

如果发现不好用，目前有个参考的方法更新到老版本的 istorex：

```

is-opkg remove 'luci-app-istorex' 'app-meta-istorex'
rm -f /tmp/a.ipk
wget -c --no-check-certificate https://fw0.koolcenter.com/iStoreOS/alpha/istorex/luci-app-istorex_0.6.1_all.ipk -O /tmp/a.ipk
opkg install --force-downgrade /tmp/a.ipk
is-opkg install 'luci-app-istorex' 'app-meta-istorex'

```

## 如果推出登录，重新登陆不自动进入 istorex

那么你必须更新到最新固件，才有这个特性。推出登录之后，重新登录，就进入了 istorex 默认的页面。（但是如果安装了路由狗，则还是默认到了路由狗的界面）