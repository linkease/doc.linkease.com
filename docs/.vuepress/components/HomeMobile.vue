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
         platformList1:[
          {
            name:'EasePi',
            url:''
          },{
            name:'威联通',
            url:''
          }, {
            name:'iStoreOS',
            url:''
          },{
            name:'Docker',
            url:''
          },{
            name:'华硕NAS',
            url:''
          },{
            name:'爱快',
            url:''
          }, {
            name:'Koolcenter 梅林',
            url:''
          }, {
            name:'Unraid',
            url:''
          }, {
            name:'Koolcenter Lede',
            url:''
          }, {
            name:'铁威马',
            url:''
          }, {
            name:'OpenWrt',
            url:''
          }, {
            name:'Windows',
            url:''
          }, {
            name:'群晖',
            url:''
          }, {
            name:'ReadyNAS',
            url:''
          }, {
            name:'Padavan',
            url:''
          }, {
            name:'极空间',
            url:''
          }
         ],
         platformList2:[
          {
            name:'EasePi',
            url:''
          },{
            name:'威联通',
            url:''
          }, {
            name:'iStoreOS',
            url:''
          },{
            name:'Docker',
            url:''
          },{
            name:'Koolcenter 梅林 ≥386',
            url:''
          },{
            name:'爱快',
            url:''
          }, {
            name:'Koolcenter 梅林 <386',
            url:''
          }, {
            name:'Unraid',
            url:''
          }, {
            name:'Koolcenter Lede',
            url:''
          }, {
            name:'铁威马',
            url:''
          }, {
            name:'OpenWrt',
            url:''
          }, {
            name:'Windows',
            url:''
          }, {
            name:'群晖',
            url:''
          }, {
            name:'ReadyNAS',
            url:''
          }, {
            name:'Padavan',
            url:''
          }, {
            name:'极空间',
            url:''
          }, {
            name:'Linux 通用版',
            url:''
          }
         ],
         platformList3:[
          {
            name:'EasePi',
            url:''
          },{
            name:'威联通',
            url:''
          }, {
            name:'iStoreOS',
            url:''
          },{
            name:'Docker',
            url:''
          },{
            name:'Koolcenter 梅林 ≥386',
            url:''
          },{
            name:'爱快',
            url:''
          }, {
            name:'Koolcenter 梅林 <386',
            url:''
          }, {
            name:'Unraid',
            url:''
          }, {
            name:'Koolcenter Lede',
            url:''
          }, {
            name:'铁威马',
            url:''
          }, {
            name:'OpenWrt',
            url:''
          }, {
            name:'Windows',
            url:''
          }, {
            name:'群晖',
            url:''
          }, {
            name:'ReadyNAS',
            url:''
          }, {
            name:'Padavan',
            url:''
          }, {
            name:'极空间',
            url:''
          }, {
            name:'Linux 通用版',
            url:''
          }
         ],
         question1:[
          {
            name:'在家办公，通过远程桌面控制公司电脑',
            url:''
          },
          {
            name:'如何通过异地互联使用群晖Drive',
            url:''
          },{
            name:'安卓手机资料想传给Mac电脑',
            url:''
          },{
            name:'远程访问Transmission下载',
            url:''
          },{
            name:' 远程访问Aria2下载',
            url:''
          },{
            name:'远程访问qBittorrent下载',
            url:''
          },{
            name:'远程访问Jellyfin 播放器',
            url:''
          },{
            name:'远程访问emby播放器',
            url:''
          },{
            name:'远程访问plex播放器',
            url:''
          },{
            name:'远程访问Navidrome播放器',
            url:''
          },{
            name:'远程硬盘挂载',
            url:''
          },{
            name:'Mac电脑远程挂载NAS硬盘',
            url:''
          },{
            name:'华硕路由器作为 轻NAS 的前期准备',
            url:''
          },{
            name:'华硕路由器搭配易有云实现 轻NAS 教程',
            url:''
          },{
            name:'电视盒子也能当NAS',
            url:''
          }
         ],
         question2:[
          {
            name:'在家办公，通过远程桌面控制公司电脑',
            url:''
          },
          {
            name:'如何通过异地互联使用群晖Drive',
            url:''
          },{
            name:'安卓手机资料想传给Mac电脑',
            url:''
          },{
            name:'远程访问Transmission下载',
            url:''
          },{
            name:' 远程访问Aria2下载',
            url:''
          },{
            name:'远程访问qBittorrent下载',
            url:''
          },{
            name:'远程访问Jellyfin 播放器',
            url:''
          },{
            name:'远程访问emby播放器',
            url:''
          },{
            name:'远程访问plex播放器',
            url:''
          },{
            name:'远程访问Navidrome播放器',
            url:''
          },{
            name:'远程硬盘挂载',
            url:''
          },{
            name:'Mac电脑远程挂载NAS硬盘',
            url:''
          },{
            name:'华硕路由器作为 轻NAS 的前期准备',
            url:''
          },{
            name:'华硕路由器搭配易有云实现 轻NAS 教程',
            url:''
          },{
            name:'电视盒子也能当NAS',
            url:''
          }
         ],   
          question3:[
          {
            name:'在家办公，通过远程桌面控制公司电脑',
            url:''
          },
          {
            name:'如何通过异地互联使用群晖Drive',
            url:''
          },{
            name:'安卓手机资料想传给Mac电脑',
            url:''
          },{
            name:'远程访问Transmission下载',
            url:''
          },{
            name:' 远程访问Aria2下载',
            url:''
          },{
            name:'远程访问qBittorrent下载',
            url:''
          },{
            name:'远程访问Jellyfin 播放器',
            url:''
          },{
            name:'远程访问emby播放器',
            url:''
          },{
            name:'远程访问plex播放器',
            url:''
          },{
            name:'远程访问Navidrome播放器',
            url:''
          },{
            name:'远程硬盘挂载',
            url:''
          },{
            name:'Mac电脑远程挂载NAS硬盘',
            url:''
          },{
            name:'华硕路由器作为 轻NAS 的前期准备',
            url:''
          },{
            name:'华硕路由器搭配易有云实现 轻NAS 教程',
            url:''
          },{
            name:'电视盒子也能当NAS',
            url:''
          }
         ],
         questionTotal:[
          {
            name:'在家办公，通过远程桌面控制公司电脑',
            url:''
          },
          {
            name:'如何通过异地互联使用群晖Drive',
            url:''
          },{
            name:'安卓手机资料想传给Mac电脑',
            url:''
          },{
            name:'远程访问Transmission下载',
            url:''
          },{
            name:' 远程访问Aria2下载',
            url:''
          },{
            name:'远程访问qBittorrent下载',
            url:''
          },{
            name:'远程访问Jellyfin 播放器',
            url:''
          },{
            name:'远程访问emby播放器',
            url:''
          },{
            name:'远程访问plex播放器',
            url:''
          },{
            name:'远程访问Navidrome播放器',
            url:''
          },{
            name:'远程硬盘挂载',
            url:''
          },{
            name:'Mac电脑远程挂载NAS硬盘',
            url:''
          },{
            name:'华硕路由器作为 轻NAS 的前期准备',
            url:''
          },{
            name:'华硕路由器搭配易有云实现 轻NAS 教程',
            url:''
          },{
            name:'电视盒子也能当NAS',
            url:''
          }
         ],
         otherUrl:{
            videoUrl1:'',
            videoUrl2:'',
            videoUrl3:'',
            videoUrl4:'',
            moreUrl1:'',
            moreUrl2:'',
            moreUrl3:'',
            moreUrl4:'',
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