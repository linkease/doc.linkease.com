### iStoreOS PVE 实现显卡直通，显示到 HDMI

#### 一. 配置启动项：

* 最新版本界面配置（但是最新是 5.10 内核）

```
intel_iommu=on iommu=pt initcall_blacklist=sysfb_init video=simplefb:off video=vesafb:off video=efifb:off video=vesa:off kvm.ignore_msrs=1
```

![网络桥接](./picture/enable-iommu.jpg)

* 5.15 内核早期 alpha 版本只能命令行 vim /boot/grub/grub.cfg

```
menuentry "iStoreOS" {
        linux /boot/vmlinuz root=PARTUUID=b2afd150-a264-94f5-c679-f49fb631eb02 rootwait noinitrd intel_iommu=on iommu=pt initcall_blacklist=sysfb_init video=simplefb:off video=vesafb:off video=efifb:off video=vesa:off kvm.ignore_msrs=1
}
```

#### 二. 检测驱动（无需配置，看看是否有驱动）

```
lsmod|grep vfio
irqbypass              16384  2 vfio_pci_core,kvm
vfio                   24576  3 vfio_pci_core,mdev,vfio_iommu_type1
vfio_iommu_type1       36864  0
vfio_pci               16384  0
vfio_pci_core          45056  1 vfio_pci
vfio_virqfd            16384  1 vfio_pci_core
```

```
dmesg|grep -i iommu
```

```
dmesg|grep -i vfio
```

#### 三.（可选择）参考下面内容，在这个文件后面追击：/etc/modules.conf
#blacklist i915
#blacklist snd_hda_intel
#blacklist snd_hda_codec_hdmi
blacklist radeon
blacklist nouveau
blacklist nvidia
blacklist nvidiafb
blacklist nvidia-gpu

#### 四. 这里可以不修改
/etc/modules.d/vfio-pci

如果有疑问，或者看到网络上各种改发，可以参考改为（xxx替换成自己的 lspci -nn 得到的 id）：
vfio-pci ids=xxx:xxx,ids=xxx:xxx disable_vga=1

#### 五. 软件中心安装 PVE 插件

不会就看 B 站视频

#### 六. 安装 Windows
* 下载 Windows 10
* 下载 virtio 驱动
* 下载 N100 显卡驱动（如果是其他机器，则是其他机器的驱动）

#### 七. 参考 PVE 教程完成 Windows 安装

建议做好快照

- [PVE显卡直通教程](https://3os.org/infrastructure/proxmox/windows-vm-configuration/)

#### 八. 添加核显 rom，参考如下：

先手动添加 pcie，选择显卡、声卡。

进入 docker 的方法：

```
docker exec -it pve bash
```

然后到 pve docker 里面修改文件：/etc/pve/qemu-server/100.conf

100.conf 是你得虚拟机名字，自己确认名字是啥

下面内容重要的是：
* args
* hostpci0
* hostpci1
* CWWK.bin 已经内置，支持常见的一个 Intel 主板以及带核显的 CPU

```
args: -set device.hostpci0.addr=02.0 -set device.hostpci0.x-igd-gms=0x2 -set device.hostpci0.x-igd-opregion=on
bios: ovmf
boot: order=scsi0;ide0;ide2;net0
cores: 2
cpu: host
efidisk0: local:100/vm-100-disk-0.qcow2,efitype=4m,pre-enrolled-keys=1,size=528K
hostpci0: 0000:00:02.0,romfile=CWWK.bin
hostpci1: 0000:00:1f.3
ide0: local:iso/virtio-win-0.1.240.iso,media=cdrom,size=612812K
ide2: local:iso/intel_gfx_drivers_20241229.iso,media=cdrom,size=1907962K
machine: pc-i440fx-9.0
memory: 4096
meta: creation-qemu=9.0.2,ctime=1735804039
name: win10
net0: virtio=BC:24:11:A3:BE:AF,bridge=br-lan,firewall=1
numa: 0
ostype: win10
parent: install-ok
scsi0: local:100/vm-100-disk-1.qcow2,iothread=1,size=64G
scsihw: virtio-scsi-single
smbios1: uuid=3b6b0e31-0b2f-4a76-ab47-b7661361f372
sockets: 2
tpmstate0: local:100/vm-100-disk-3.raw,size=4M,version=v2.0
vga: none
vmgenid: de790490-8784-4794-b006-712fa0e73c24
```

重新启动虚拟机，显示器显示了 Windows。最后建议关闭休眠

