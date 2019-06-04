---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: en                              # Lang is required
author: 陈国强
title: Nachos修改记录
description:
excerpt: 记录对Nachos内核的修改内容
cover: true                         # Leave false if the post does not have cover image, if there is set to true
coverAlt:
demo:
categories:
  - Os_course
  - Linux
tags: 
  - Os_course
created_at: 2019-04-30 15:00
updated_at: 2019-04-30 15:00
meta:                                 # If you have cover image
  - property: og:image
    content: /images/posts/watermark-logo.png
  - name: twitter:image
    content: /images/posts/watermark-logo.png
---

## Docker安装32bit/ubuntu  

如果你是Linux/Unix系统那么不用看这一条  
1、[Windows Docker安装教程](https://www.runoob.com/docker/windows-docker-install.html)  
2、[Windows如何打开Hyper-V？（家庭版没有Hyper-V功能）](https://jingyan.baidu.com/article/f96699bbf2b889894f3c1b6f.html) 

---

以下以ubuntu 16.04为例安装docker：  
```bash
# 1.选择国内的云服务商，这里选择阿里云为例
curl -sSL http://acs-public-mirror.oss-cn-hangzhou.aliyuncs.com/docker-engine/internet | sh -
# 2.安装所需要的包
sudo apt-get install linux-image-extra-$(uname -r) linux-image-extra-virtual
# 3.添加使用 HTTPS 传输的软件包以及 CA 证书
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates
# 4.添加GPG密钥
sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
# 5.添加软件源
echo "deb https://apt.dockerproject.org/repo ubuntu-xenial main" | sudo tee /etc/apt/sources.list.d/docker.list
# 6.添加成功后更新软件包缓存
sudo apt-get update
# 7.安装docker
sudo apt-get install docker-engine
# 8.开机启动 docker
sudo systemctl enable docker
sudo systemctl start docker
# 9.测试docker
docker -v
```
使用docker安装32bit/ubuntu镜像（因为实验需要32位环境）：  
```bash
# docker拉取32bit/ubuntu:16.04镜像
docker pull 32bit/ubuntu:16.04
# docker使用容器运行镜像，此时已经可以运行镜像的bash了
docker run -it 32bit/ubuntu:16.04 /bin/bash
# 退出
exit
```
开启容器，每次本机重启之后需要执行：  
```bash
# 以下是为了每次都进入同一个容器，而不是每次docker run -it都新建
# 查看已运行的容器CONTIANER ID，找到32bit/ubuntu所对应的容器ID，例如0f6d789c5df9
docker ps -a
# 开启容器
docker start [ID]
```
每次输入以下命令进入docker：  
```bash
# 进入容器
docker exec -it [ID] /bin/bash
# 可以使用docker rm + 容器ID来删除多余容器
```


## 安装Nahcos

### 1. [MakeFile](https://seisman.github.io/how-to-write-makefile/overview.html#id2)  

> makefile关系到了整个工程的编译规则。一个工程中的源文件不计其数，并且按类型、功能、模块分 别放在若干个目录中，
makefile定义了一系列的规则来指定，哪些文件需要先编译，哪些文件需要后编译， 哪些文件需要重新编译，甚至于进行更复杂的功能操作，
因为makefile就像一个Shell脚本一样，其中也可 以执行操作系统的命令。  

> makefile带来的好处就是——“自动化编译”，一旦写好，只需要一个make命令，整个工程完全自动编译，极 大的提高了软件开发的效率。
 make是一个命令工具，是一个解释makefile中指令的命令工具，一般来说， 大多数的IDE都有这个命令，
 比如：Delphi的make，Visual C++的nmake，Linux下GNU的make。可见 ，makefile都成为了一种在工程方面的编译方法。  
 
C源码文件会先生成中间目标文件，再由中间文件生成执行文件，makefile文件就是告诉make命令怎么样去编译与链接程序   
### 2. make, make install, configure的区别  

./configure用于检测安装平台，是一个shell脚本  
./configure一般用于生成MakeFile，为下一步编译做准备，例如代码：<label style="color:red">./configure --prefix=/usr</label>意为将软件安装到/usr下面  
make：用于编译，从MakeFile中读取指令，然后编译  
make install：用于安装，从MakeFile中读取指令，安装到特定位置，可以用make uninstall来卸载  

### 3. 拷贝文件  
Linux系统之间拷贝文件可以用scp命令：
```bash
# 例1：将服务器的pull.sh脚本拷贝到C盘
scp root@101.200.53.152:/myblog/pull.sh /mnt/c
# 例2：将服务器的/myblog脚本拷贝到C盘，加一个-r即可
scp -r root@101.200.53.152:/myblog /mnt/c
# 上传文件就是将scp后的参数倒过来就行
```

### 4. 错误解决  
由于使用的是docker的最小化安装，所以部分软件如g++与ed没有，所以应该先行安装部分软件。
安装软件之前先换源到阿里云，不过由于vim与nano也没有，编辑/etc/apt/sources.list时应该使用linux自带的vi编辑器编辑文本

```bash
# 先换源
sudo vi /etc/apt/sources.list
# 将以下内容覆盖原内容，然后保存退出
deb http://mirrors.aliyun.com/ubuntu/ xenial main
deb-src http://mirrors.aliyun.com/ubuntu/ xenial main

deb http://mirrors.aliyun.com/ubuntu/ xenial-updates main
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-updates main

deb http://mirrors.aliyun.com/ubuntu/ xenial universe
deb-src http://mirrors.aliyun.com/ubuntu/ xenial universe
deb http://mirrors.aliyun.com/ubuntu/ xenial-updates universe
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-updates universe

deb http://mirrors.aliyun.com/ubuntu/ xenial-security main
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-security main
deb http://mirrors.aliyun.com/ubuntu/ xenial-security universe
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-security universe
# 更新源
sudo apt-get update
```
然后开始安装缺少的软件与安装nachos：  
```bash
# 安装开发必备软件
sudo apt-get install build-essential
# 安装ed
sudo apt-get install ed
# 可以make，完成安装
make
# 进入 threads 子目录 cd threads
make depend
# 编译生成 nachos
make nachos
# 运行 nachos
./nachos
```
## Nachos概论  
1、Nachos 是建立在一个软件模拟的虚拟机之上的，采用 R2/3000 指令集的原因是该指令集为 RISC 指令集，其指令数目比较少。  
2、Nachos 只是一个在宿主机上运行的一个进程。在同一个宿主机上可以运行多个 Nachos 进程，各个进程可以相互通讯，
作为一个全互连网络的一个节点；进程之间通过 Socket 进行通讯，模拟了一个全互连网络。  
3、不确定性是操作系统所必须具有的特征，Nachos 采用了随机因子模拟了真实操作系统的不确定性。  

## Nachos机器模拟   
Machine 类用来模拟计算机主机。它提供的功能有：读写寄存器。读写主存、运行一条用户程序的汇编指令、运行用户程序、
单步调试用户程序、显示主存和寄存器状态、将虚拟内存地址转换为物理内存地址、陷入 Nachos 内核等等。  

Interrupt 类用来模拟硬件中断系统。Interrupt 类中有一个记录即将发生中断的队列，称为中断等待队列。  
中断系统提供了一个模拟机器时钟，机器时钟在下列情况下前进:  
+ 用户程序打开中断
+ 执行一条用户指令
+ 处理机没有进程正在运行

Timer 类模拟定时器。定时器每隔 X 个时钟周期就向 CPU 发一个时钟中断。它是时间片管理必不可少的硬件基础。
它的实现方法是将一个即将发生的时钟中断放入中断队列，到了时钟中断应发生的时候，中断系统将处理这个中断，
在中断处理的过程中又将下一个即将发生的时钟中断放入中断队列，这样每隔 X 个时钟周期，就有一个时钟中断发生。


## 用户程序和虚拟内存  
问题：用户程序的启动过程  
1.Nachos中关于用户程序启动主要在于userprog/protest.cc的StartProcess方法  
2.主要的执行逻辑：  
    （1）打开文件，如果能够打开，则进行第2步，否则输出无法打开文件  
    （2）创建user address space，初始化用户程序的运行空间  
    （3）从Nachos的文件系统中加载进内存  
    （4）关闭文件，初始化寄存器  
    （5）调用machine->Run()方法，转到用户程序的空间执行  
3.部分步骤的详细执行内容：  
    （1）打开文件：使用传入的filename作为指针，从Nachos的文件系统中加载进内存(具体的函数定义与修改在filesys/filesys.cc的OpenFile * FileSystem::Open(char *name)中)  
	（2）创建user address space，初始化用户程序的运行空间，函数定义在userprog/addrspace.cc的AddrSpace::AddrSpace(OpenFile *executable)方法  
			AddrSpace::AddrSpace(OpenFile *executable)方法执行过程：  
			1）判断打开文件是否符合可执行代码的格式，如果不符合，出错返回  
			2）将用户程序的正文段、数据段以及栈段一起考虑，计算需要空间大小。如果大于整个模拟的物理内存空间，出错返回。  
			3）生成用户程序线性页表。  
			4）将用户程序的正文段和数据段依次调入内存，栈段记录的是用户程序的运行状态，它的位置紧接于数据段之后。  
    （3）machine->Run()方法的功能： 执行在模拟内存内的用户程序。  
			machine->Run()方法执行过程：  
			1）将系统当前状态设置为用户模式  
			2）调用OneInstruction方法取出一条指令  
			3）将该指令进行解码，分析出其中的操作代码、寄存器和立即数  
			4）根据操作代码将该指令模拟执行  
			5）调用Onetick方法，使时钟前进一个单位  
			6）转向2，直到用户程序执行完毕。  

## Lab1  
1、 这是整个Nachos系统的入口

## 参考文章  
[1] [Linux scp命令](https://www.cnblogs.com/webnote/p/5877920.html)