<template>
    <div id="main" class="desktop">

        <!-- banner部分 -->
        <div class="bj" :style="bannerStyle">
            <div class="banner">
                <div class="info">
                    <div class="title">
                        随时随地享受私有云
                    </div>
                    <div class="words">易有云提供全平台的数据互通，带你享受P2P的极速体验。随时随地备份你的照片、文件，轻松打造属于你的私有云服务。</div>
                    <router-link to="/zh/docs/linkease">
                        <div class="btn">立即体验</div>
                    </router-link>

                </div>
            </div>
        </div>

        <!-- 内容部分1 -->
        <div class="text">
            <div class="title">
                <div class="title_tit">易有云能为你做些什么</div>
                <div class="title_line"></div>
            </div>
            <div class="block">
                <div class="description">
                    <div class="description_content">
                        <img :src="img">
                        <img :src="imgs" class="image">
                        <div class="description_tit">更好用的相册备份</div>
                        <div class="description_info">⼀键备份、⽅便简单，保证你的数据永不丢失，让易有云保护你的家庭回忆。</div>
                    </div>
                </div>

                <div class="description">
                    <div class="description_content">
                        <img :src="file">
                        <img :src="files" class="image">
                        <div class="description_tit">强大的文件管理</div>
                        <div class="description_info">支持各种文件的管理、同步和智能分类，你可以随时随地查看预览设备文件。</div>
                    </div>
                </div>

                <div class="description">
                    <div class="description_content">
                        <img :src="platform">
                        <img :src="platforms" class="image">
                        <div class="description_tit">跨平台设备传输
                        </div>
                        <div class="description_info">⽆障碍联通你的设备，让你的数据来去自如，从此以后不再受平台的限制。
                        </div>
                    </div>
                </div>

                <div class="description">
                    <div class="description_content">
                        <img :src="collaterals">
                        <img :src="collateralss" class="image">
                        <div class="description_tit">支持多种网络协议 </div>
                        <div class="description_info">易有云⽀持WebDAV、SFTP、SAMBA、S3等多种网络协议。</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 内容部分2 -->
        <div class="text t2">
            <div class="title">
                <div class="title_tit">易有云能在哪些地方使用</div>
                <div class="title_line"></div>
            </div>
        </div>
        <div class="where where-2262f629">
            <div class="where_content">
                <div class="where_left">
                    <img :src="img1">
                </div>
                <div class="where_right">
                    <div class="right_content">
                        <div class="where_tit">家庭环境</div>
                        <div class="where_info">自动备份手机相册，不再担心手机内存的不⾜，让你⼀年365天畅心保留家庭的记忆。随时随地查看照片，影片，即使在公司也可以远程下载电影在家庭设备里。</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="where where-fff">
            <div class="where_content">
                <div class="where_right left">
                    <div class="where_tit">公司环境</div>
                    <div class="where_info">易有云提供的私有云服务，⽀持文件双向同步，同事之间共享办公文件，及时且安全性⾼。</div>
                </div>
                <div class="where_left right">
                    <img :src="img2">
                </div>
            </div>
        </div>
        <div class="where where-2262f629">
            <div class="where_content">
                <div class="where_left">
                    <img :src="img3">
                </div>

                <div class="where_right">
                    <div class="right_content">
                        <div class="where_tit">外出环境</div>
                        <div class="where_info">内网穿透，远程下载，无论你到哪⾥，易有云支持在外网环境下随时⾼速访问和管理你的内部文件。</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 联系我们 -->
        <div class="contact">
            <div class="text">
                <div class="title">
                    <div class="title_tit">联系我们</div>
                    <div class="title_line"></div>
                </div>
            </div>
            <div class="contact_txt">
                <div class="contact_tit">交流群</div>
                <div class="contact_info">QQ交流群1~5群已满人，请加6群，群号：<a href="https://jq.qq.com/?_wv=1027&k=xEFyCx1h" target="_black">726390063</a>
                </div>
            </div>

        </div>

        <!-- 底部 -->
        <div class="footer" :style="footerStyle">

            <a href="https://beian.miit.gov.cn/" target="_blank" class="footer_info">
                <div class="copy">版权所有 2021 易有云网络科技有限责任公司 | 粤ICP备20024441号</div>

            </a>

        </div>
    </div>
</template>
<script>
import banner from "../public/linkease/home/banner.png"
import collateralss from "../public/linkease/home/collateralss.png"
import collaterals from "../public/linkease/home/collaterals.png"
import files from "../public/linkease/home/files.png"
import file from "../public/linkease/home/file.png"
import imgs from "../public/linkease/home/imgs.png"
import img from "../public/linkease/home/img.png"
import platforms from "../public/linkease/home/platforms.png"
import platform from "../public/linkease/home/platform.png"
import img1 from "../public/linkease/home/img1.png"
import img2 from "../public/linkease/home/img2.png"
import img3 from "../public/linkease/home/img3.png"
import footer from "../public/linkease/home/footer.png"

export default {
    data() {
        return {
            banner,
            bannerStyle: {  // 驼峰命名 
                backgroundImage: ` url(${banner})`,
            },
            img,
            imgs,
            file,
            files,
            platform,
            platforms,
            collaterals,
            collateralss,
            img1,
            img2,
            img3,
            footer,
            footerStyle: {
                backgroundImage: ` url(${footer})`,

            }



        }
    },
}
</script>
<style lang="scss" scoped>
#main * {
    -webkit-box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    word-wrap: break-word;
    outline: 0;
}
#main {
    position: relative;
    margin: 0 auto;
    .bj {
        width: 100%;
        height: 684px;
        background-size: cover;
        position: relative;
    }
    .banner {
        max-width: 1174px;
        margin: 0 auto;
        .info {
            max-width: 392px;
            padding-top: 209px;
            .title {
                // margin-top: 209px;
                font-size: 42px;
                font-family: Source Han Sans CN;
                font-weight: bold;
                line-height: 71px;
                color: #000000;
            }
            .words {
                font-size: 18px;
                font-family: Source Han Sans CN;
                font-weight: 400;
                line-height: 31px;
                color: #717171;
                margin-top: 21px;
            }
            a {
                width: 198px;
                height: 68px;
                background: #2262f6;
                box-shadow: 3px 3px 6px rgba(34, 98, 246, 0.5);
                border-radius: 5px;
                text-decoration: none;
                font-size: 24px;
                font-family: Source Han Sans CN;
                font-weight: 400;
                line-height: 68px;
                color: #ffffff;
                text-align: center;
                margin-top: 41px;
                display: block;
            }
        }
    }
    .text {
        max-width: 1174px;
        margin: 0 auto;
        text-align: center;
        margin-top: 94px;

        .title {
            text-align: center;
            .title_tit {
                font-size: 30px;
                font-family: Source Han Sans CN;
                font-weight: 400;
                line-height: 51px;
                color: #000000;
            }
            .title_line {
                width: 72px;
                height: 5px;
                background: #2262f6;
                box-shadow: 3px 3px 6px rgba(34, 98, 246, 0.5);
                border-radius: 5px;
                margin: 0 auto;
                margin-top: 18px;
            }
        }

        .block {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-content: center;
            margin-top: 78px;
            .description {
                width: 294px;
                height: 336px;
                border-radius: 5px;
                flex: 0 0 100%;
                max-width: calc(25% - 20px);
                margin: 0 auto;

                .description_content {
                    padding: 38px 18px;
                    img {
                        width: 50.49px;
                        height: 50.49px;
                    }
                    .image {
                        margin: 0 auto;
                        display: none;
                    }
                    .description_tit {
                        padding: 22px;
                        font-size: 18px;
                        font-family: Source Han Sans CN;
                        font-weight: bold;
                        line-height: 31px;
                        color: #000000;
                    }
                    .description_info {
                        font-size: 16px;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        line-height: 27px;
                        color: #717171;
                    }
                }
            }
        }
    }
    .t2 {
        margin-top: 168px;
    }
    .where {
        width: 100%;
        margin-top: 18px;
        height: 552px;

        .where_content {
            width: 1174px;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;

            .where_left {
                padding-top: 42px;
                img {
                    max-width: 554px;
                    max-height: 448.55px;
                }
            }
            .where_right {
                width: 34%;
                .right_content {
                    max-width: 272px;
                }
            }
        }
    }
    .where-2262f629 {
        background: #2262f629;
    }
    .where-fff {
        background: #ffffff;
    }

    .contact {
        max-width: 1174px;
        margin: 0 auto;
        .contact_txt {
            margin-top: 88px;
            .contact_tit {
                font-size: 18px;
                font-family: Source Han Sans CN;
                font-weight: bold;
                line-height: 31px;
                color: #000000;
                padding-bottom: 22px;
            }
            .contact_info {
                font-size: 16px;
                font-family: Source Han Sans CN;
                font-weight: 400;
                line-height: 27px;
                color: #717171;
                a {
                    color: #717171;
                }
            }
        }
    }
    .footer {
        width: 100%;
        height: 440px;
        background-size: 100% 100%;
        margin-top: 65px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        .copy {
            font-size: 16px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            line-height: 27px;
            padding-top: 342px;
            color: #fff;
            padding-bottom: 16px;
        }
    }
}

//公共样式
.left {
    max-width: 272px;
}
.where_tit {
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    line-height: 31px;
    color: #000000;
}
.where_info {
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 27px;
    color: #717171;
    margin-top: 30px;
}

// 鼠标移动事件
#main .banner .info a:hover {
    opacity: 0.9;
}

#main .text .block .description:hover {
    background: #2262f6;
    box-shadow: 3px 3px 6px rgba(34, 98, 246, 0.5);
    img {
        display: none;
    }
    .image {
        display: block;
    }
    .description_tit {
        color: #ffffff;
    }
    .description_info {
        color: #ffffff;
    }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 719px) {
    #main {
        display: none;
    }
}
@media screen and (max-width: 1440px) {
    #main {
        .banner {
            max-width: 1080px;
        }
        .text {
            max-width: 1080px;
            .block {
                .description {
                    overflow: hidden;
                }
            }
        }
        .where {
            .where_content {
                max-width: 1080px;
                .where_left {
                    img {
                        width: 424px;
                    }
                }
                .where_right {
                    width: 40%;
                }
            }
        }
        .contact {
            max-width: 1080px;
        }
    }
}
@media screen and (max-width: 1024px) {
    #main {
        .banner {
            max-width: 862px;
        }
        .text {
            max-width: 862px;
            .block {
                .description {
                    overflow: hidden;
                }
            }
        }
        .where {
            .where_content {
                max-width: 862px;
                .where_left {
                    img {
                        width: 424px;
                    }
                }
                .where_right {
                    width: 40%;
                }
            }
        }
        .contact {
            max-width: 862px;
        }
    }
}
</style>