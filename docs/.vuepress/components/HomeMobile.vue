<template>
  <div id="page" class="mobile">
       <!-- 标题 -->
      <div class="mobile_top">
        <div class="title">万物皆可做网盘</div>
        <div class="subtext">你用手机电脑电视等来当私人网盘，那你应该用易有云；
你只想用拥有自己的域名，从浏览器来访问你的路由、NAS、电脑桌面、文件等，你应该用 DDNSTO；<br>
你想有个更稳定，更轻便，7x24小时运行的低功耗私人网盘或路由系统，那你应该选择 iStoreOS；</div>
<div class="video-box" @click="openModal(otherUrl.videoUrl1)"><span>观看视频</span><img class="icon" :src="logo_video"/></div>
      </div>
      <!-- 产品介绍 -->
      <div class="mobile_title">- 产品介绍 -</div>
      <div class="mobile_product">
        <div class="product">
          <div class="product_top">
            <div class="title">易有云</div>
            <div class="right_tab">
              <div :class="tabIndex1===0?'item activeItem':'item'" @click="setTabIndex(1,0)">产品简介</div>
              <div :class="tabIndex1===1?'item activeItem':'item'"  @click="setTabIndex(1,1)">安装指南</div>
              <div :class="tabIndex1===2?'item activeItem':'item'"   @click="setTabIndex(1,2)">常用问答</div>
            </div>
          </div>
          <div class="product_content" v-if="tabIndex1===0">
            <img  class="logo" :src="icon_linkease"/>
            <ul>
              <li> 安装易有云的手机、电脑等设备均可成为网盘</li>
              <li> 所有易有云网盘都互联互通，随时随地访问</li>
              <li> 手机端非常方便的备份相片，释放手机空间</li>
              <li> 网盘可挂载成电脑上的硬盘，直接从电脑硬盘上访问</li>
              <li> 所有设备数据均可互相备份多份到其他设备上</li>
            </ul>
          </div>
          <div class="product_bottom"  v-if="tabIndex1===0">
            <div class="video-box" @click="openModal(otherUrl.videoUrl2)"><span>观看视频</span><img class="icon" :src="logo_video"/></div>
          </div>
          <div class="product_guide" v-if="tabIndex1===1">
            <ul>
              <li v-for="(item,index) in platformList1" v-if="!(!moreStatus1&&index>2)" :key="index" @click="openUrl(item.url)"><span>{{ item.name }} </span><img :src="icon_arrow" class="arrow"/></li>
              <div class="readMore" v-if="!moreStatus1" @click="moreStatus1=true">查看全部</div>
            </ul>
          </div>
          <div class="product_question" v-if="tabIndex1===2">
            <ul>
              <li v-for="(item,index) in question1" :key="index"  v-if="!(!moreStatus2&&index>2)"   @click="openUrl(item.url)"><span>{{ item.name }} </span><img :src="icon_arrow" class="arrow"/></li>
              <div class="readMore" v-if="!moreStatus2" @click="moreStatus2=true">查看全部</div>
            </ul>
          </div>
        </div>
        <div class="product">
          <div class="product_top">
            <div class="title">DDNSTO</div>
            <div class="right_tab">
              <div :class="tabIndex2===0?'item activeItem':'item'" @click="setTabIndex(2,0)">产品简介</div>
              <div :class="tabIndex2===1?'item activeItem':'item'"  @click="setTabIndex(2,1)">安装指南</div>
              <div :class="tabIndex2===2?'item activeItem':'item'"   @click="setTabIndex(2,2)">常用问答</div>
            </div>
          </div>
          <div class="product_content" v-if="tabIndex2===0">
            <img  class="logo" :src="icon_ddnsto"/>
            <ul>
              <li> 无需公网IP，无需购买域名，代替传统DD</li>
              <li> DDNSTO 分配多个域名给到您的不同服务</li>
              <li> 只需要浏览器就可以远程NAS，远程下载，远程桌面等</li>
              <li> 支持路由器、NAS、Docker、电脑等众多设备</li>
              <li> 只有 512KB，非常小巧。而且基于 http2，响应很快</li>
            </ul>
          </div>
          <div class="product_bottom"  v-if="tabIndex2===0">
            <div class="video-box" @click="openModal(otherUrl.videoUrl3)"><span>观看视频</span><img class="icon" :src="logo_video"/></div>
          </div>
          <div class="product_guide" v-if="tabIndex2===1">
            <ul>
              <li v-for="(item,index) in platformList2" :key="index"  v-if="!(!moreStatus3&&index>2)"   @click="openUrl(item.url)"><span>{{ item.name }} </span><img :src="icon_arrow" class="arrow"/></li>
              <div class="readMore" v-if="!moreStatus3" @click="moreStatus3=true">查看全部</div>
            </ul>
          </div>
          <div class="product_question" v-if="tabIndex2===2" >
            <ul>
              <li v-for="(item,index) in question2" :key="index"  v-if="!(!moreStatus4&&index>2)"   @click="openUrl(item.url)"><span>{{ item.name }} </span><img :src="icon_arrow" class="arrow"/></li>
              <div class="readMore" v-if="!moreStatus4" @click="moreStatus4=true">查看全部</div>
            </ul>
          </div>
        </div>
        <div class="product">
          <div class="product_top">
            <div class="title">iStoreOS</div>
            <div class="right_tab">
              <div :class="tabIndex3===0?'item activeItem':'item'" @click="setTabIndex(3,0)">产品简介</div>
              <div :class="tabIndex3===1?'item activeItem':'item'"  @click="setTabIndex(3,1)">安装指南</div>
              <div :class="tabIndex3===2?'item activeItem':'item'"   @click="setTabIndex(3,2)">常用问答</div>
            </div>
          </div>
          <div class="product_content" v-if="tabIndex3===0">
            <img  class="logo" :src="icon_iStoreOS"/>
            <ul>
              <li> 一个更简单轻量的存储网关系统</li>
              <li> 有多款皮肤，操作界面美观，交互简单</li>
              <li> 稳定，安全，开源。基于 OpenWRT 稳定分支，遇到问题可以找到很多解决方案</li>
              <li> 有软件中心，有配套的多种场景的软件服务</li>
            </ul>
          </div>
          <div class="product_bottom"  v-if="tabIndex3===0">
            <div class="video-box" @click="openModal(otherUrl.videoUrl4)"><span>观看视频</span><img class="icon" :src="logo_video"/></div>
          </div>
          <div class="product_guide" v-if="tabIndex3===1">
            <ul>
              <li v-for="(item,index) in platformList3" :key="index" v-if="!(!moreStatus5&&index>2)"  @click="openUrl(item.url)"><span>{{ item.name }} </span><img :src="icon_arrow" class="arrow"/></li>
              <div class="readMore" v-if="!moreStatus5" @click="moreStatus5=true">查看全部</div>
            </ul>
          </div>
          <div class="product_question" v-if="tabIndex3===2">
            <ul>
              <li v-for="(item,index) in question3" :key="index" v-if="!(!moreStatus6&&index>2)" @click="openUrl(item.url)"><span>{{ item.name }} </span><img :src="icon_arrow" class="arrow"/></li>
              <div class="readMore" v-if="!moreStatus6" @click="moreStatus6=true">查看全部</div>
            </ul>
          </div>
        </div>
      </div>
 <!-- 最佳实践 -->

 <div class="mobile_title">- 最佳实践 -</div>
   <div class="mobile_operate">
      <div class="content_left">
          <div class="item">
            <div class="title">文件互传</div>
            <ul>
              <li> 操作简单，学习成本低，不需要改变拷老的拷贝习惯</li>
              <li> 支持除手机、电脑以外的更多互传场景</li>
              <li> 内网外网都保证最好的传输速度</li>
            </ul>
            <div class="more" @click="openUrl(otherUrl.moreUrl1)">了解更多</div>
          </div>
          <div class="item">
            <div class="title">相册备份</div>
            <ul>
              <li> 支持手机备份到电脑、路由、NAS甚至阿里云盘上</li>
              <li> 支持备份之后快速清理是手机上的相片</li>
              <li> 支持快速查看另外的手机备份</li>
              <li> 支持按日期等方式浏览相片</li>
            </ul>
            <div class="more"  @click="openUrl(otherUrl.moreUrl2)">了解更多</div>
          </div>
      </div>
      <div class="content_center">
        <div class="item">
            <div class="title">远程桌面</div>
            <ul>
              <li> DDNSTO 支持在浏览器中远程电脑桌面</li>
              <li> 易有云的异地互联，支持用微软 RDP 原生的远程桌面</li>
              <li> 支持异地组网，让多个地域组成一个内网</li>
            </ul>
            <div class="more"  @click="openUrl(otherUrl.moreUrl3)">了解更多</div>
          </div>
          <div class="item">
            <div class="title">文件同步备份</div>
            <ul>
              <li> 支持文件在电脑上的两个硬盘做备份</li>
              <li> 支持文件在多个易有云网盘设备上同步</li>
              <li> 有历史版本，可以从历史版本恢复数据</li>
              <li> 增量数据同步，同步速度快</li>
            </ul>
            <div class="more"  @click="openUrl(otherUrl.moreUrl4)">了解更多</div>
          </div>
      </div>
      <div class="content_right">
        <div class="title">更多实践</div>
        <ul>
          <li v-for="(item,index) in questionTotal" :key="index"  v-if="!(!moreStatus7&&index>2)"  @click="openUrl(item.url)"><span>{{ item.name }} </span><img :src="icon_arrow" class="arrow"/></li>
          <div class="readMore" v-if="!moreStatus7" @click="moreStatus7=true">查看全部</div>
        </ul>
      </div>
   </div>
    <!-- 联系我们 -->
 <div class="mobile_title">- 联系我们 -</div>
 <div class="mobile_contact">
  <div class="contont_left">
    <div class="title">商务合作邮箱</div>
    <div class="bottom">
      <span class="name">欢迎使用邮件联系我们：</span>
      <span class="email" @click="openEmail()">admin@linkease.com</span>
    </div> 
  </div>
  <div class="contont_right">
    <div class="title">社交媒体</div>
    <div class="btn-box">
    <div class="btn">iStoreOS公众号</div>
    <div class="btn">易有云公众号</div>
    <div class="btn">B站易有云网络</div>
    <div class="btn">B站 酷友社</div>
  </div>
  </div>
 </div>
 <div class="mobile_kong"></div>
 <div class="video-moban" v-if="dialogVisible">
            <img
                :src="close_icon"
                class="close"
                @click="handleClose()"
            />
            <iframe
                :src="videoUrl"
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true"
            ></iframe>
        </div>
  </div>
</template>

<script>
import logo_video from "../public/home/icon_video.png"
import close_icon from "../public/home/close-icon.png"
import icon_linkease from "../public/home/icon_linkease_new.png"
import icon_ddnsto from "../public/home/icon_ddnsto_new.png"
import icon_iStoreOS from "../public/home/icon_iStoreOS_new.png"
import icon_arrow from "../public/home/icon_arrow.png"


export default {
  data() {
      return {
         logo_video,
         icon_linkease,
         icon_ddnsto,
         icon_iStoreOS,
         icon_arrow,
         close_icon,
         tabIndex1:0,
         tabIndex2:0,
         tabIndex3:0,
         dialogVisible: false,
         moreStatus1:false,
         moreStatus2:false,
         moreStatus3:false,
         moreStatus4:false,
         moreStatus5:false,
         moreStatus6:false,
         moreStatus7:false,
        platformList1: [
          {
            name: 'Windows',
            url: '/zh/guide/linkease/install/device/windows.html'
          }, {
            name: 'macOS',
            url: '/zh/guide/linkease/install/device/mac.html'
          }, {
            name: 'iStoreOS',
            url: '/zh/guide/linkease/install/device/istoreos.html'
          }, {
            name: 'OpenWrt',
            url: '/zh/guide/linkease/install/device/openwrt.html'
          }, {
            name: '华硕路由器',
            url: '/zh/guide/linkease/install/device/koolcenter_merlin.html'
          }, {
            name: 'Docker',
            url: '/zh/guide/linkease/install/device/docker.html'
          }, {
            name: '群晖',
            url: '/zh/guide/linkease/install/device/synology.html'
          }, {
            name: '威联通',
            url: '/zh/guide/linkease/install/device/qnap.html'
          }, {
            name: 'Unraid',
            url: '/zh/guide/linkease/install/device/unraid.html'
          }, {
            name: '极空间',
            url: '/zh/guide/linkease/install/device/zspace.html'
          }, {
            name: '绿联NAS',
            url: '/zh/guide/linkease/install/device/docker.html'
          }, {
            name: '联想NAS',
            url: '/zh/guide/linkease/install/device/docker.html'
          }, {
            name: '华硕NAS',
            url: ''
          }, {
            name: 'TrueNAS',
            url: '/zh/guide/linkease/install/device/docker.html'
          }, {
            name: '爱快',
            url: '/zh/guide/linkease/install/device/ikuai.html'
          }, {
            name: '电视盒子(海纳思)',
            url: '/zh/guide/linkease/install/device/histb.html'
          }, {
            name: 'Linux/Ubuntu/Debian/CentOS/CasaOS',
            url: '/zh/guide/linkease/install/device/linux.html'
          }
        ],
        platformList2: [
          {
            name: 'Windows',
            url: '/zh/guide/ddnsto/install/device/windows.html'
          }, {
            name: 'iStoreOS',
            url: '/zh/guide/ddnsto/install/device/istoreos.html'
          }, {
            name: 'OpenWrt',
            url: '/zh/guide/ddnsto/install/device/openwrt.html'
          }, {
            name: '华硕路由器',
            url: '/zh/guide/ddnsto/install/device/koolcenter_merlin.html'
          }, {
            name: 'Padavan',
            url: '/zh/guide/ddnsto/install/device/padavan.html'
          }, {
            name: 'Docker',
            url: '/zh/guide/ddnsto/install/device/docker.html'
          }, {
            name: '群晖',
            url: '/zh/guide/ddnsto/install/device/synology.html'
          }, {
            name: '威联通',
            url: '/zh/guide/ddnsto/install/device/qnap.html'
          }, {
            name: 'Unraid',
            url: '/zh/guide/ddnsto/install/device/unraid.html'
          }, {
            name: '极空间',
            url: '/zh/guide/ddnsto/install/device/zspace.html'
          }, {
            name: '绿联NAS',
            url: '/zh/guide/ddnsto/install/device/docker.html'
          }, {
            name: '联想NAS',
            url: '/zh/guide/ddnsto/install/device/docker.html'
          }, {
            name: '华硕NAS',
            url: ''
          }, {
            name: 'TrueNAS',
            url: '/zh/guide/ddnsto/install/device/docker.html'
          }, {
            name: '爱快',
            url: '/zh/guide/ddnsto/install/device/ikuai.html'
          }, {
            name: '电视盒子(海纳思)',
            url: '/zh/guide/ddnsto/install/device/histb.html'
          }, {
            name: 'Linux/Ubuntu/Debian/CentOS/CasaOS',
            url: '/zh/guide/ddnsto/install/device/linux.html'
          }
        ],
        platformList3: [
          {
            name: 'EasePi',
            url: '/zh/guide/istoreos/install_ars2.html'
          }, {
            name: 'X86物理机',
            url: '/zh/guide/istoreos/install_x86.html'
          }, {
            name: 'PVE',
            url: '/zh/guide/istoreos/install_pve.html'
          }, {
            name: 'ESXI',
            url: '/zh/guide/istoreos/install_esxi_8.html'
          }, {
            name: 'R86S',
            url: '/zh/guide/istoreos/install_x86.html'
          }, {
            name: 'R2S/R2C',
            url: '/zh/guide/istoreos/install_r2s.html'
          }, {
            name: 'R5S/R5C',
            url: '/zh/guide/istoreos/install_r5s.html'
          }, {
            name: 'R6S/R6C',
            url: '/zh/guide/istoreos/install_r6s.html'
          }, {
            name: 'R66S',
            url: '/zh/guide/istoreos/install_r66s.html'
          }, {
            name: 'R68S',
            url: '/zh/guide/istoreos/install_rockchip_sysupgrade.html'
          }, {
            name: 'H66K/H68K/H69K',
            url: '/zh/guide/istoreos/install_h68k.html'
          }, {
            name: 'H88K',
            url: '/zh/guide/istoreos/install_h88k.html'
          }, {
            name: 'T68M',
            url: '/zh/guide/istoreos/install_t68m.html'
          }, {
            name: '树莓派4',
            url: '/zh/guide/istoreos/install_rpi4.html'
          }
        ],
        question1: [
          {
            name: '删除设备后，如何找回设备套餐？',
            url: '/zh/guide/linkease/feedback/faq.html#q-%E5%88%A0%E9%99%A4%E8%AE%BE%E5%A4%87%E5%90%8E-%E5%A6%82%E4%BD%95%E6%89%BE%E5%9B%9E%E8%AE%BE%E5%A4%87%E5%A5%97%E9%A4%90'
          },
          {
            name: 'Windows客户端被检测出风险？',
            url: '/zh/guide/linkease/feedback/faq.html#q-windows%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%A2%AB%E6%A3%80%E6%B5%8B%E5%87%BA%E9%A3%8E%E9%99%A9'
          }, {
            name: 'Windows客户端显示没网络？',
            url: '/zh/guide/linkease/feedback/faq.html#q-windows%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%98%BE%E7%A4%BA%E6%B2%A1%E7%BD%91%E7%BB%9C'
          }, {
            name: '无法连接服务器',
            url: '/zh/guide/linkease/feedback/faq.html#q-%E6%97%A0%E6%B3%95%E8%BF%9E%E6%8E%A5%E6%9C%8D%E5%8A%A1%E5%99%A8'
          }, {
            name: '为何没传输数据-看监控还占用流量',
            url: '/zh/guide/linkease/feedback/faq.html#q-%E4%B8%BA%E4%BD%95%E6%B2%A1%E4%BC%A0%E8%BE%93%E6%95%B0%E6%8D%AE-%E7%9C%8B%E7%9B%91%E6%8E%A7%E8%BF%98%E5%8D%A0%E7%94%A8%E6%B5%81%E9%87%8F'
          }
        ],
        question2: [
          {
            name: '控制台显示设备离线',
            url: '/zh/guide/ddnsto/question.html#%E6%8E%A7%E5%88%B6%E5%8F%B0%E6%98%BE%E7%A4%BA%E8%AE%BE%E5%A4%87%E7%A6%BB%E7%BA%BF'
          },
          {
            name: '访问域名失败',
            url: '/zh/guide/ddnsto/question.html#%E8%AE%BF%E9%97%AE%E5%9F%9F%E5%90%8D%E5%A4%B1%E8%B4%A5'
          }, {
            name: '远程windows桌面失败',
            url: '/zh/guide/ddnsto/question.html#%E8%BF%9C%E7%A8%8Bwindows%E6%A1%8C%E9%9D%A2%E5%A4%B1%E8%B4%A5'
          }, {
            name: '域名相关问题汇总',
            url: '/zh/guide/ddnsto/question.html#%E5%9F%9F%E5%90%8D%E7%B1%BB'
          }, {
            name: 'IP验证相关问题汇总',
            url: '/zh/guide/ddnsto/question.html#%E9%AA%8C%E8%AF%81%E7%B1%BB'
          }, {
            name: '套餐丢失等问题汇总',
            url: '/zh/guide/ddnsto/question.html#%E5%A5%97%E9%A4%90%E7%B1%BB'
          }, {
            name: '操作失败问题汇总',
            url: '/zh/guide/ddnsto/question.html#%E6%93%8D%E4%BD%9C%E7%B1%BB'
          }
        ],
        question3: [
          {
            name: '安装系统失败？',
            url: '/zh/guide/istoreos/question.html#%E5%AE%89%E8%A3%85%E7%B3%BB%E7%BB%9F'
          },
          {
            name: '软件中心安装失败？',
            url: '/zh/guide/istoreos/question.html#%E5%AE%89%E8%A3%85%E8%BD%AF%E4%BB%B6'
          }, {
            name: '网络配置问题汇总',
            url: '/zh/guide/istoreos/question.html#%E6%9B%B4%E5%A4%9A%E7%BD%91%E7%BB%9C'
          }, {
            name: '硬盘挂载失败？',
            url: '/zh/guide/istoreos/question.html#%E7%A1%AC%E7%9B%98%E6%8C%82%E8%BD%BD'
          }, {
            name: '界面自动变成英文？',
            url: '/zh/guide/istoreos/question.html#%E7%95%8C%E9%9D%A2%E5%8F%98%E8%8B%B1%E6%96%87'
          }, {
            name: 'Docker安装或者下载失败？',
            url: '/zh/guide/istoreos/question.html#docker-%E7%9B%B8%E5%85%B3'
          }, {
            name: 'iStoreOS是否违反开源协议？',
            url: '/zh/guide/istoreos/question.html#%E5%85%B6%E5%AE%83'
          }
        ],
        questionTotal: [
          {
            name: '多人共享文件',
            url: 'http://192.168.88.18:8080/zh/guide/linkease/function/home_share.html'
          },
          {
            name: '多地域组网',
            url: 'http://192.168.88.18:8080/zh/guide/linkease/function/remote_connects.html'
          },
          {
            name: '在家办公，用微软原生RDP远程Windows',
            url: 'http://192.168.88.18:8080/zh/guide/linkease/tips/remote.html'
          },{
            name: '手机资料快速传给电脑',
            url: 'http://192.168.88.18:8080/zh/guide/linkease/tips/device.html'
          }, {
            name: '手机远程下载',
            url: 'http://192.168.88.18:8080/zh/guide/linkease/tips/transmission.html'
          }, {
            name: 'DDNSTO更好的身份验证',
            url: 'http://192.168.88.18:8080/zh/guide/ddnsto/Authentication.html'
          }, {
            name: '仅用浏览器完成远程桌面',
            url: 'http://192.168.88.18:8080/zh/guide/ddnsto/remote_control.html'
          }, {
            name: '仅用浏览器完成远程下载',
            url: 'http://192.168.88.18:8080/zh/guide/ddnsto/remote_download.html#aria2%E8%BF%9C%E7%A8%8B%E4%B8%8B%E8%BD%BD'
          }
        ],
         otherUrl:{
          videoUrl1: '//player.bilibili.com/player.html?aid=408377232&bvid=BV1cG411X7gy&cid=1331074770&p=1',
          videoUrl2: '//player.bilibili.com/player.html?aid=730900638&bvid=BV17D4y1173J&cid=843076396&page=1',
          videoUrl3: '//player.bilibili.com/player.html?aid=730900638&bvid=BV17D4y1173J&cid=843076396&page=1',
          videoUrl4: '//player.bilibili.com/player.html?aid=730900638&bvid=BV17D4y1173J&cid=843076396&page=1',
          moreUrl1: '/zh/guide/linkease/function/file_transfer.html',
          moreUrl2: '/zh/guide/linkease/function/photo_backup.html',
          moreUrl3: '/zh/guide/linkease/tips/remote.html',
          moreUrl4: '/zh/guide/linkease/function/file_backup.html',
         }
      }
  },
  methods: {
      // 判断是否移动端
      isMobile() {
          let info = window.navigator.userAgent;
          let agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod", "iPad"];
          for (let i = 0; i < agents.length; i++) {
              if (info.indexOf(agents[i]) >= 0) return true;
          }
          return false;
      },
      setTabIndex (tab,index){
        if(tab===1){
          this.tabIndex1=index;
        }
        if(tab===2){
          this.tabIndex2=index;
        }
        if(tab===3){
          this.tabIndex3=index;
        }
      },
    openEmail() {
      window.location.href =
        "mailto:admin@linkease.com?subject=Subject&body=message%20goes%20here";
    },
    openUrl(url){
     window.open(url);
    },
    openModal(url) {
            this.videoUrl=url
            this.dialogVisible = true;
        },
        handleClose() {
            this.dialogVisible = false;
            this.videoUrl=''
        },
  },
  mounted() {
      // 非移动端的时候添加
      this.$nextTick(() => {
          if (document.body.clientWidth > 718) {
              let viewport = document.querySelector(`meta[name="viewport"]`)
              if (viewport) {
                  viewport.content = "width=1400, initial-scale=1.0";
              } else {
                  let head = document.querySelector("head");
                  let meta = document.createElement('meta');
                  meta.name = 'viewport';
                  meta.content = "width=1400, initial-scale=1.0";
                  head.appendChild(meta);
              }
          }
      })

  },
  destroyed() {
      let viewport = document.querySelector('meta[name="viewport"]')
      if (viewport) {
          viewport.content = "width=device-width"
      }
  },
}
</script>

<style scoped lang="scss">
.mobile{
  background: #F5F5F5;
  padding-top: 83px;
  ul {
    cursor: pointer;
   li::marker{
    color: rgba(0,0,0,0.63);
    font-size: 6px;
    padding-top: -100px;
    li{
      cursor: pointer;
    }
  }
    // list-style:none;
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0,0,0,0.63);
  } 
  .video-box{
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #0060FF;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .icon{
      margin-left: 6px;
      width: 22px;
      height: 22px;
    }
  }
  &_top{
    margin:0 auto 32px;
    .title{
      text-align: center;
      font-size: 28px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #000000;
    }
    .subtext{
      margin: 16px auto 12px;
      text-align: center;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(0,0,0,0.63);
      line-height: 22px;
      width: 350px ;
    }
  }
  &_title{
    margin: 0 auto;
    text-align: center;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
    line-height: 25px;
  }
  &_product{
    margin: 16px auto 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .product{
      width: 392px;
      background: #FFFFFF;
      border-radius: 12px;
      padding: 20px 10px 20px 20px;
      box-sizing: border-box;
      position: relative;
      margin-bottom: 12px;
      &:last-child{
        margin-right:0;
      }
      &_top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title{
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #000000;
        }
        .right_tab{
          width: 216px;
          height: 26px;
          margin-right: 10px;
          background: #E9ECF1;
          border-radius: 2px;
          font-size: 12px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(0,0,0,0.8);
          display: flex;
          cursor: pointer;
          .item{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 72px;
            height: 26px;
          }
          .activeItem{

            background: #0060FF;
            border-radius: 2px;
            color: #FFFFFF;
          }
        }
      }
      &_content{
        margin-top: 24px;
        display: flex;
        .logo{
          width: 68px;
          height: 68px;
        }
        ul{
          margin-left: 10px;
          margin-top: 0px;
         li{
          line-height: 30px;
         }
        }
      }
      &_bottom{
        margin-top: 15px;
        display: flex;
        justify-content: end;
      }
      &_guide{
       margin-left: -20px;
       ul{
          list-style: none;
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #000000;
          display: flex;
          flex-wrap: wrap;
          li{
            width: 100%;
            line-height: 40px;
            border-bottom:1px solid #F8F8F8 ;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .arrow{
              width: 16px;
              height: 16px;
            }
          }
        }
      }
      &_question{
        margin-left: -20px;
        ul{
          list-style: none;
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #000000;
          display: flex;
          flex-wrap: wrap;
          li{
            width: 100%;
            line-height: 40px;
            border-bottom:1px solid #F8F8F8 ;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .arrow{
              width: 16px;
              height: 16px;
            }
          }
        }
      }
      .video-box{
       position: absolute;
       bottom: 20px;
       right: 20px;
    }
    }
   
  }
  &_operate{
    margin: 16px auto 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .content_left{
     margin-bottom: 12px;
    }
    .content_center{
     margin-bottom: 12px;
    }
    .content_right{
      width: 392px;
      background: #FFFFFF;
      border-radius: 12px;
      padding:20px ;
      box-sizing: border-box; 
    .title{
          font-size: 22px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #000000;
        }
        ul{
          margin-left: -20px;
          list-style: none;
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #000000;
          display: flex;
          flex-wrap: wrap;
          li{
            width: 100%;
            line-height: 40px;
            border-bottom:1px solid #F8F8F8 ;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .arrow{
              width: 16px;
              height: 16px;
            }
          }
        }
    }
    .item{
      padding:20px ;
      box-sizing: border-box;
      width: 392px;
      background: #FFFFFF;
      border-radius: 12px;
      margin-bottom: 12px;
      &:last-child{
        margin-bottom: 0;
      }
      .title{
        font-size: 22px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #000000;
      }
      .more{
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #0060FF;
        text-align: center;
      }
    }
  }
  &_contact{
    margin: 16px auto 32px;
    // width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title{
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #000000;
    }
    .contont_left{
      width: 390px;
      height: 92px;
      background: #FFFFFF;
      border-radius: 8px;
      padding: 20px;
      box-sizing: border-box;
      .bottom{
          margin-top: 10px;
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(0,0,0,0.63);

        .email{
          color: #0060FF;
          cursor: pointer;
        }
      }
    }
    .contont_right{
      margin-top: 20px;
      width: 390px;
      background: #FFFFFF;
      border-radius: 8px;
      padding: 20px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .title{
        margin-right: 54px;
        margin-bottom: 12px;
      }
      .btn-box{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
     .btn{
      width: 170px;
      height: 38px;
      margin-bottom: 10px;
      line-height: 38px;
      text-align: center;
      background: #F9F9F9;
      border-radius: 4px;
      font-size: 13px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #0060FF;
     }
    }
  }
  &_kong{
    height: 100px;
  }
  .readMore{
    font-size: 28px;
    width: 100%;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #0060FF;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    margin-bottom: -30px;
  }
  .video-moban {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden !important;
    flex-direction: column;
    .close {
        width: 40ox;
        height: 40px;
        margin-left: 550px;
        cursor: pointer;
    }
    iframe {
        width: 500px;
        height: 285px;
        border-radius: 10px;
    }
}
}
</style>
<style>

@media screen and (max-width: 719px) {
    #page.desktop {
        display: none;
    }

    #page.mobile {
        display: block;
    }
}
</style>
