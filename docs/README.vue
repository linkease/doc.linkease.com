<template>
    <div id="home">
        <NavLayout></NavLayout>
        <!-- pc -->
        <HomeDesktop />
        <!-- 移动端 -->
        <HomeMobile />
        <FooterComponent />
    </div>
</template>
<script>
import FooterComponent from "./.vuepress/components/FooterComponent.vue"
export default {
    components: {
        FooterComponent
    }
}
</script>
<style lang="scss" scoped>
// #home {
//     background: #fff;
//     ::v-deep header.navbar {
//         background: rgba(0, 0, 0, 0.85);
//         border-bottom: none;
//         .sidebar-button {
//             path {
//                 fill: #fff;
//             }
//         }
//         .links {
//             background: none;
//         }
//         .nav-links {
//             .nav-item {
//                 span.title,
//                 > a.nav-link {
//                     color: #fff;
//                 }
//             }
//         }
//     }
// }
</style>

