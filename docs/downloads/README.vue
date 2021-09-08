<template>
    <div id="home">
        <NavLayout></NavLayout>
        <Download :list="DownloadData" />
    </div>
</template>
<script>
import DownloadData from "./data.js"
export default {
    data() {
        return {
            DownloadData,
        }
    }
}
</script>
<style lang="scss" scoped>
// #home {
//     background: #fff;
//     ::v-deep header.navbar {
//         background: rgba(0, 0, 0, 0.85);
//         border-bottom: none;
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
