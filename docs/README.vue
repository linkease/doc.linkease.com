<template>
    <div id="home">
        <NavLayout></NavLayout>
        <!-- pc -->
        <HomeDesktop />
        <!-- 移动端 -->
        <HomeMobile />
    </div>
</template>
<script>
export default {
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

