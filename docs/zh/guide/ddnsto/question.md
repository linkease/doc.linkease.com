---
sidebarDepth: 1
---

## * 控制台显示设备离线

请先检查以下情况
1. 检查插件是否正常运行
    - 令牌是否填写正确
    - 如已离线，请重新运行。
    - 如插件版本低于1.5.0，请升级至最新版本插件。
2. 确认设备能正常访问网络，尝试ping ddnsto.com 或kooldns.cn
3. 确认是否令牌对应的微信账号登录当前浏览器
## * 访问域名失败

请先检查以下情况
1. 确认插件是否在线
2. 确认插件所在设备与目标IP是否在同一网段，或该设备能否访问对应IP及端口，可以尝试ping目标IP
3. 尝试访问该设备下其他域名
4. 如刚编辑域名，请等待生效，在1分钟后尝试
## 域名类

### Q：ddnsto可以用自己的域名吗？

A：不可以，ddnsto会提供域名。


### Q：域名http和https能同时访问吗？

A：可以，如果要同时访问，https和http地址端口不一样，可点击"显示http/https"切换查看。

   ![question](./question/question10.jpg)  
   ![question](./question/question11.jpg)   

   
### Q：特殊设备访问需要填写端口？

A：是的，比如PVE虚拟机，默认端口是8006，就必须加上端口。

   ![question](./question/question9.jpg)


### Q：域名绑定后无法访问内网服务，显示错误？

A: 配置域名、切换套餐后需要等待1分钟左右，如长时间后仍然无法访问，请检查内网服务是否正常运行。



## 登录类

### Q：一定要微信登录验证才能访问，Synology Drive无法用？

A: 为了用户数据安全，目前只允许本人使用！

A: Synology Drive 要用，必须先在浏览器当中验证一次



## 网络类

### Q：提示域名无法访问？

   ![question](./question/wffw.jpg)
   
A: 网络各方面都没问题，但是就是提示域名无法访问。

可能是路由器中某些插件会改变网络规则，需要添加以下地址到白名单。

```
tunnel.ddnsto.com
tunnel.kooldns.cn
tunnel.tocmcc.cn
www.kooldns.cn
www.tocmcc.cn
www.ddnsto.com
```


## 套餐类

### Q：解除设备的套餐？

A：登录进ddnsto控制台，绑定的设备的右边有三个点，点击解除套餐绑定。

   ![question](./question/question2.jpg)


### Q：切换套餐服务器？

 A：登录进ddnsto控制台，绑定的设备的右边有三个点，点击切换服务器，出来的弹窗就可以切换了。

   ![question](./question/question3.jpg)
   ![question](./question/question4.jpg)
  
  
### Q：购买新套餐？

 A：登录进ddnsto控制台，绑定设备后，右边会有切换套餐的图标，点击出现弹窗，点击购买新套餐，按需购买套餐。
 
   ![question](./question/question5.jpg)

   ![question](./question/question8.jpg)

 * 购买完成后，如果要使用新套餐，就在“绑定已有套餐”里绑定。
 
### Q：切换套餐？

 A：帐号已经买过套餐，要绑定新设备，请先解除旧设备的套餐。
 
 登录进ddnsto控制台，绑定好新设备后，右边会有切换套餐的图标，点击出现弹窗，点击绑定已有套餐，就能看到之前购买的套餐，立即绑定。 
   
   ![question](./question/question6.jpg)

   ![question](./question/question7.jpg)

 
 
### Q：套餐续费？

    套餐快到期了，怎么续费呢。
    
   ![question](./question/xf1.jpg) 
    
 A：目前ddnsto的套餐天数不能叠加，所以续费套餐，就是一个“购买新套餐”，然后“切换套餐”的过程。

 * 因为不能叠加，所以建议在套餐快过期1天内，或者过期了，再购买新套餐。 点击绑定套餐——购买新套餐，选择合适的套餐套餐。
 
   ![question](./question/xf2.jpg)
   
   ![question](./question/xf3.jpg)
 
 * 然后，再次点击绑定套餐——绑定已有套餐，就能看到刚刚购买的新套餐，立即绑定即可。
 
   ![question](./question/xf4.jpg)
   
   ![question](./question/xf5.jpg)


### Q：套餐兑换码怎么使用？

A: 登录ddnsto控制台，点击头像——兑换码使用，弹窗输入兑换码激活，即可绑定套餐正常使用。。

   ![question](./question/question12.jpg)
   ![question](./question/question13.jpg)
 
### Q：已购买套餐的设备不小心删除了怎么办？

A: 即使删除了设备，套餐依然还在。重新添加设备后就可以绑定已购买套餐。 
 
 
 
   
## 操作类

### Q：ddnsto插件已配置，但用户中心一直没有出现？

A: 请检查token(令牌)是否配置正确，或设备是否正常连接网络。或检查设备时间，时间不正确会导致连接失败，请同步时间后等待一分钟或重启插件。


### Q：Aria2远程下载无法设备正确？

A: 如果是www.kooldns.cn服务器，则设置为wss www.kooldns.cn。 


### Q：旁路路由无法使用DDNSTO？

A: 确认您旁路路由的内部是否能上网，试着ping www.baidu.com试试。



### Q：设备域名无法转发到小米路由器？

A: 是的，目前还无法解决。小米路由器的网页有特殊性导致无法转发WEB。 


### Q：WordPress访问异常？

A: wordpress需要配置“站点地址”和ddnsto域名相同。

   ![question](./question/question1.jpeg)

### 还有任何问题都可以跟帖提问！
