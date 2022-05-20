import pic1 from "../.vuepress/public/downloads/pic1.png"
import pic2 from "../.vuepress/public/downloads/pic2.png"
import pic3 from "../.vuepress/public/downloads/pic3.png"
import pic4 from "../.vuepress/public/downloads/pic4.png"
import pic5 from "../.vuepress/public/downloads/pic5.png"

import IosQrcode from "../.vuepress/public/downloads/ios.png"
import AndroidQrcode from "../.vuepress/public/downloads/android.png"

const LinkeaseStore = {
    title: "易有云存储端",
    guide: "https://doc.linkease.com/zh/guide/linkease_storage/",
    thumbnail: pic1,
    list: [
        {
            title: "群晖Synology",
            url: "https://fw.koolcenter.com/binary/LinkEase/Synology/",
        },
        {
            title: "Qnap",
            url: "https://fw.koolcenter.com/binary/LinkEase/QNAP/",
        },
        {
            title: "Openwrt",
            url: "https://fw.koolcenter.com/binary/LinkEase/Openwrt/",
        },
        {
            title: "Linux",
            url: "https://fw.koolcenter.com/binary/LinkEase/LinuxStorage/",
        },
        {
            title: "脚本/Docker",
            url: "/zh/guide/linkease_storage/store.html#_10-docker",
        },
        {
            title: "更多",
            url: "https://doc.linkease.com/zh/guide/linkease_storage/store.html#%E5%90%84%E7%A7%8D%E8%AE%BE%E5%A4%87%E5%AE%89%E8%A3%85%E5%AD%98%E5%82%A8%E7%AB%AF",
        },
    ]
}
const LinkeaseClient = {
    title: "易有云APP",
    thumbnail: pic2,
    guide: "/zh/guide/linkease_app/",
    list: [
        {
            title: "Windows",
            url: "https://fw.koolcenter.com/binary/LinkEase/Client/LinkEaseWin.zip",
        },
        {
            title: "Mac",
            url: "https://fw.koolcenter.com/binary/LinkEase/Client/LinkEase.dmg",
        },
        {
            title: "iOS",
            url: "https://apps.apple.com/cn/app/id1526441128",
            qrcode: IosQrcode,
        },
        {
            title: "Android",
            url: "https://fw.koolcenter.com/binary/LinkEase/Client/linkease.apk",
            qrcode: AndroidQrcode,
        },
        {
            title: "TV",
            url: "https://fw.koolcenter.com/binary/LinkEase/Client/Android-tv.apk",
        },
    ]
}
const DDNSTO = {
    title: "DDNSTO",
    guide: "/zh/guide/ddnsto/",
    thumbnail: pic3,
    list: [
        {
            title: "群晖Synology",
            url: "https://fw.koolcenter.com/binary/ddnsto/synology/",
        },
        {
            title: "Qnap",
            url: "https://fw.koolcenter.com/binary/ddnsto/qnap/",
        },
        {
            title: "Openwrt",
            url: "https://fw.koolcenter.com/binary/ddnsto/openwrt/",
        },
        {
            title: "Readynas",
            url: "https://fw.koolcenter.com/binary/ddnsto/readynas/",
        },
        {
            title: "脚本/Docker",
            url: "/zh/guide/ddnsto/koolshare_merlin.html#_6-unraid-%E7%88%B1%E5%BF%AB-docker",
        },
    ]
}
const IStoreOs = {
    title: "iStoreOs",
    guide: "/zh/guide/istoreos/",
    thumbnail: pic4,
    list: [
        {
            title: "最新固件",
            url: "https://fw.koolcenter.com/iStoreOS/"
        },

        {
            title: "EasePi ARS2",
            url: "https://fw.koolcenter.com/iStoreOS/ars2/"
        },

        {
            title: "X86",
            url: "https://fw.koolcenter.com/iStoreOS/x86_64/"
        },
        {
            title: "更多",
            url: "https://fw.koolcenter.com/iStoreOS/"
        }
    ]
}
const EasePi = {
    title: "EasePi",
    guide: "/zh/guide/easepi/",
    thumbnail: pic5,
    list: [
        {
            title: "最新固件",
            url: "https://fw.koolcenter.com/binary/ars2/"
        }
    ]
}
export default [
    LinkeaseClient,
    LinkeaseStore,
    DDNSTO,
    IStoreOs,
    EasePi,
]