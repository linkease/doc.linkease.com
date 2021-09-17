## OpenWRT 应用程序元数据

更多参考Github [源代码](https://github.com/linkease/openwrt-app-meta)

OpenWRT 的所有插件，都需要元数据来提供插件的信息。有了元数据提供的依赖，就可以具体去安装插件。
信息如下：

## 目录结构

* `applications`
    * `app-meta-*`
        * `Makefile` - 描述文件，参考下文约定
        * `logo.png` - 图标文件，目前只支持png
* `fake-top` - 辅助文件，无需关注
* `Makefile` - 辅助文件，无需关注
* `meta.mk` - 辅助文件，无需关注

## Makefile书写约定

1. `META_TITLE:=` 使用官方名称，如果有中文就用中文
2. `META_AUTHOR:=` 是作者名称，如果是非个人作者则填组织或者公司名称
3. `META_DEPENDS:=` 的第一个应该是能代表这个APP的主包，方便作为版本更新的依据
4. `META_ARCH:=` 用来填写支持的处理器架构，如果是架构无关的应用则不需要这一行


# 在线提交流程

**以下操作都在github上进行**

## 准备工作

1. Fork 本项目，如果之前Fork过，那先删掉自己的项目重新Fork

## 修改元数据

1. 切换到 `main` 分支
2. 同步上游仓库：点击 `Fetch upstream`，再点击 `Fetch and merge` 即可，è¿一步如有疑问请参考[官方文档](https://docs.github.com/en/github/collaborating-with-pull-requests/working-with-forks/syncing-a-fork#syncing-a-fork-from-the-web-ui) 
3. 创建PR用的临时分支：切换到 `main` 分支，点击分支下拉菜单，在输入框输入新分支的名称（也就是不存在的分支名称），例如 `add_app_jellyfin` ，搜索结果会变成 `Create branch: *** from 'main'` ，点这个搜索结果，稍等会自动创建并切换到新分支
4. 在新分支中进行更改，完成以后提交PR
5. 等PR合并以后，可以在 `branches` 页面删除临时分支，也可以保留临时分支，但是不要再进行变更和PR

