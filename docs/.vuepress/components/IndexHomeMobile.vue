<template>
    <div id="main" class="mobile">
        <!-- banner部分 -->
        <div class="banner">
            <div class="banner_bg" :style="bannerStyle"></div>
            <div class="banner_content">
                <div class="banner_title">随时随地<br />享受私有云</div>
                <div class="banner_info">易有云提供全平台的数据互通，带你享受P2P的极速体验。随时随地备份你的照片、文件，轻松打造属于你的私有云服务。</div>
                <router-link to="/zh/docs/linkease">
                    <div class="banner_btn">立即体验</div>
                </router-link>
            </div>
        </div>
        <!-- 内容部分1 -->
        <div class="text1">
            <div class="text1_title">
                <div class="text1_tit">易有云能为你做些什么</div>
                <div class="text1_line"></div>
            </div>

            <div class="text1_content">
                <!-- 第一块 -->
                <div class="text1_block">
                    <img :src="img1">
                    <div class="block_tit">更好⽤的相册备份</div>
                    <div class="block_info">⼀键备份、⽅便简单，保证你的数据永不丢失，让易有云保护你的家庭回忆。</div>
                </div>

                <!-- 第二块 -->
                <div class="text1_block">
                    <img :src="img2">
                    <div class="block_tit">强大的文件管理</div>
                    <div class="block_info">⽀持各种⽂件的管理、同步和智能分类，你可以随时随地查看预览设备⽂件。</div>
                </div>

                <!-- 第三块 -->
                <div class="text1_block">
                    <img :src="img3">
                    <div class="block_tit">跨平台设备传输</div>
                    <div class="block_info">⽆障碍联通你的设备，让你的数据来去⾃如，从此以后不再受平台的限制。</div>
                </div>

                <!-- 第四块 -->
                <div class="text1_block">
                    <img :src="img4">
                    <div class="block_tit">⽀持多种网络协议</div>
                    <div class="block_info">易有云⽀持WebDAV、SFTP、SAMBA、S3等多种网络协议。</div>
                </div>
            </div>

        </div>
        <!-- 内容部分2-->
        <div class="text2 text1">
            <div class="text1_title">
                <div class="text1_tit">易有云能在哪些地方使⽤</div>
                <div class="text1_line"></div>
            </div>
            <!-- 第一块 -->
            <div class="text2_block">
                <div class="block_content">
                    <img :src="image1">
                    <div class="block_right">
                        <div class="right_tit">家庭环境</div>
                        <div class="right_info">自动备份手机相册，不再担心⼿机内存的不⾜，让你⼀年365天畅心保留家庭的记忆。随时随地查看照片，影片，即使在公司也可以远程下载电影在家庭设备里。</div>
                    </div>
                </div>
            </div>
            <!-- 第二块 -->
            <div class="text2_block block2">
                <div class="block_content">
                    <div class="block_right">
                        <div class="right_tit">公司环境</div>
                        <div class="right_info">易有云提供的私有云服务，⽀持文件双向同步，同事之间共享办公⽂件，及时且安全性⾼。</div>
                    </div>
                    <img :src="image2">
                </div>
            </div>

            <!-- 第三块 -->
            <div class="text2_block">
                <div class="block_content">
                    <img :src="image3">
                    <div class="block_right">
                        <div class="right_tit">外出环境</div>
                        <div class="right_info">内网穿透，远程下载，⽆论你到哪⾥，易有云⽀持在外⽹环境下随时⾼速访问和管理你的内部⽂件。</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 联系我们 -->
        <div class="contact text1">
            <div class="text1_title">
                <div class="text1_tit">联系我们</div>
                <div class="text1_line"></div>
            </div>
            <div class="contact_content">
                <div class="contact_tit">交流群</div>
                <div class="contact_info">QQ交流群1~5群已满人，请加6群，群号：<a href="https://jq.qq.com/?_wv=1027&k=xEFyCx1h" target="_black">726390063</a>
                </div>
            </div>

        </div>
        <!-- 底部 -->
        <div class="footer" :style="footerStyle">
            <a href="https://beian.miit.gov.cn/" target="_blank" class="footer_info">版权所有2021易有云网络科技有限责任公司 <br />粤ICP备20024441号</a>
        </div>
    </div>
</template>

<script>
import banner from "../public/linkease/HomeMobile/banner.png"
import img1 from "../public/linkease/HomeMobile/img1.png"
import img2 from "../public/linkease/HomeMobile/img2.png"
import img3 from "../public/linkease/HomeMobile/img3.png"
import img4 from "../public/linkease/HomeMobile/img4.png"
import image1 from "../public/linkease/HomeMobile/image1.png"
import image2 from "../public/linkease/HomeMobile/image2.png"
import image3 from "../public/linkease/HomeMobile/image3.png"
import footer from "../public/linkease/HomeMobile/footer.png"
export default {
    data() {
        return {
            banner,
            bannerStyle: {
                backgroundImage: ` url(${banner})`,
            },
            img1,
            img2,
            img3,
            img4,
            image1,
            image2,
            image3,
            footer,
            footerStyle: {
                backgroundImage: ` url(${footer})`
            }
        }
    }
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
    // position: relative;
    // margin: 0 auto;
    font-family: Source Han Sans CN;
    .banner {
        position: relative;
        .banner_bg {
            width: 100%;
            height: 315px;
            background-size: cover;
        }
        .banner_content {
            position: absolute;
            top: 80px;
            padding-left: 23px;
            .banner_title {
                width: 192px;
                font-size: 24px;
                font-weight: bold;
                line-height: 32px;
                color: #000000;
            }
            .banner_info {
                width: 150px;
                font-size: 12px;
                font-weight: 400;
                line-height: 20px;
                color: #000000;
                padding: 9px 0;
            }
            .banner_btn {
                width: 79px;
                height: 31px;
                background: #2262f6;
                box-shadow: 3px 3px 6px rgba(34, 98, 246, 0.5);
                border-radius: 5px;
                font-size: 12px;
                font-family: Source Han Sans CN;
                font-weight: 400;
                line-height: 20px;
                color: #ffffff;
                text-align: center;
                line-height: 31px;
            }
        }
    }
    .text1 {
        text-align: center;
        margin: 0 auto;
        .text1_title {
            margin: 0 auto;
            text-align: center;
            .text1_tit {
                font-size: 14px;
                font-weight: 400;
                line-height: 24px;
                color: #000000;
                margin-top: 58px;
            }
            .text1_line {
                width: 70px;
                height: 3px;
                background: #2262f6;
                box-shadow: 3px 3px 6px rgba(34, 98, 246, 0.5);
                border-radius: 5px;
                margin: 0 auto;
                margin-top: 8px;
                margin-bottom: 54px;
            }
        }
        .text1_content {
            padding: 0 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            .text1_block {
                flex: 0 0 100%;
                max-width: calc(50% - 20px);
                height: 244px;
                img {
                    width: 28.93px;
                    height: 28.93px;
                }
                .block_tit {
                    font-size: 12px;
                    font-weight: bold;
                    line-height: 20px;
                    color: #000000;
                    margin: 13px 0 18px;
                }
                .block_info {
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 22px;
                    color: #717171;
                }
            }
        }
    }
    .text2 {
        width: 100%;
        margin-top: -98px;
        .text2_block {
            width: 100%;
            height: 162px;
            background: rgba(34, 98, 246, 0.16);
            .block_content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px;
                img {
                    width: 159.41px;
                    height: 129.07px;
                }
                .block_right {
                    text-align: left;
                    max-width: 153px;
                    margin-top: -58px;
                    .right_tit {
                        font-size: 10px;
                        font-weight: bold;
                        line-height: 17px;
                        color: #000000;
                    }
                    .right_info {
                        width: 153px;
                        height: 41px;
                        font-size: 12px;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        line-height: 16px;
                        color: #717171;
                        padding-top: 8px;
                    }
                }
            }
        }
        .block2 {
            background: #ffffff;
        }
    }
    .contact {
        .contact_content {
            text-align: left;
            margin-left: 32px;
            .contact_tit {
                font-size: 12px;
                font-weight: bold;
                line-height: 20px;
                color: #000000;
            }
            .contact_info {
                font-size: 12px;
                font-weight: 400;
                line-height: 16px;
                color: #717171;
                margin-top: 8px;
                a {
                    color: #717171;
                }
            }
        }
    }
    .footer {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
        height: 213px;
        background-size: cover;
        margin-top: 16px;
        .footer_info {
            font-size: 12px;
            font-weight: 400;
            line-height: 18px;
            color: #ffffff;
            padding-bottom: 16px;
            text-align: center;
        }
    }
}
@media screen and (min-width: 719px) {
    #main {
        display: none;
    }
}
#main {
    width: 100%;
    position: relative;
}
</style>