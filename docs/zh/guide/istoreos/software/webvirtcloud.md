# 在 iStoreOS 安装虚拟机平台

我们可以通过 iStoreOS 来安装 KVM 虚拟机平台：webvirtcloud。 
在虚拟机平台基础上，可以设置网卡直通，显卡直通来安装 Windows，或者群晖。 
未来软件中心我们也会上架更多的插件，比如 Windows 插件，群晖插件。敬请期待！

## 第一步，iStoreOS 安装相关 KVM 依赖
```
opkg update

opkg install libffi glib2 libjpeg libpng libsasl2 pixman uclibcxx kmod-tun \
   qemu-firmware-pxe qemu-firmware-seabios  qemu-firmware-seavgabios qemu-keymaps \
   qemu-firmware-efi qemu-x86_64-softmmu \
   qemu-nbd qemu-img qemu-ga  qemu-bridge-helper virtio-console-helper
```

## 第二步，安装为 iStoreOS 定制的 webvirtcloud Docker

先准备一个村配置的文件夹，注意换成自己的路径
```
mkdir -p /mnt/usb2-2/webvirtcloud-configs
```

运行 Docker:
```
docker run -it --cgroupns=host \
	--tmpfs /tmp \
	--tmpfs /run \
	--tmpfs /run/lock \
	-v /sys/fs/cgroup:/sys/fs/cgroup \
	-v /mnt:/mnt:rslave \
	-v /mnt/usb2-2/webvirtcloud-configs:/srv/webvirtcloud/dbconfig \
	-p 6009:80 \
	--privileged -d \
	--name webvirtcloud linkease/webvirtcloud:0.2
```
	
初始化 IP 等等信息
```
docker exec webvirtcloud /srv/startup.sh 192.168.9.242 6009
```

主意把 IP：192.168.9.242 换成自己的 IP。
路径：/mnt/usb2-2/webvirtcloud-configs 换成自己的路径

## 开启 DEBUG 模式
另外发现还有问题，需要开启 DEBUG 模式才行。具体开启  DEBUG 模式的办法：

修改 /mnt/usb2-2/webvirtcloud-configs/local_settings.py，往里面加一行代码：

DEBUG = True

重新启动:

docker exec webvirtcloud /etc/init.d/supervisor restart

## 其他参考链接：

* [PVE 安装Windows 虚拟机并显卡直通](https://3os.org/infrastructure/proxmox/windows-vm-configuration/)