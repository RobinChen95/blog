---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: en                              # Lang is required
author: 陈国强
title: Nachos修改记录
description:
excerpt: 使用Docker的ubuntu镜像自制的Nachos系统
cover: false                         # Leave false if the post does not have cover image, if there is set to true
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
    content: /images/posts/my-first-post.png
  - name: twitter:image
    content: /images/posts/my-first-post.png
---

## Docker安装32bit/ubuntu  

---  
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
# 以下是为了每次都进入同一个容器，而不是每次docker run -it都新建
# 查看已运行的容器ID，找到32bit/ubuntu所对应的容器ID，例如0f6d789c5df9
docker ps -a
# 开启容器
docker start [ID]
# 进入容器
docker exec -it [ID] /bin/bash
# 可以使用docker rm + 容器ID来删除多余容器
```

## Lab0

### 1. [MakeFile](https://seisman.github.io/how-to-write-makefile/overview.html#id2)  

> makefile关系到了整个工程的编译规则。一个工程中的源文件不计其数，并且按类型、功能、模块分 别放在若干个目录中，
makefile定义了一系列的规则来指定，哪些文件需要先编译，哪些文件需要后编译， 哪些文件需要重新编译，甚至于进行更复杂的功能操作，
因为makefile就像一个Shell脚本一样，其中也可 以执行操作系统的命令。  

> makefile带来的好处就是——“自动化编译”，一旦写好，只需要一个make命令，整个工程完全自动编译，极 大的提高了软件开发的效率。
 make是一个命令工具，是一个解释makefile中指令的命令工具，一般来说， 大多数的IDE都有这个命令，
 比如：Delphi的make，Visual C++的nmake，Linux下GNU的make。可见 ，makefile都成为了一种在工程方面的编译方法。  
 
C源码文件会先生成中间目标文件，再由中间文件生成执行文件，makefile文件就是告诉make命令怎么样去编译与链接程序   
### 2. make, make install, configure的区别  

+ ./configure用于检测安装平台，是一个shell脚本  
./configure一般用于生成MakeFile，为下一步编译做准备，例如代码：<label style="color:red">./configure --prefix=/usr</label>意为将软件安装到/usr下面  
+ make：用于编译，从MakeFile中读取指令，然后编译  
+ make install：用于安装，从MakeFile中读取指令，安装到特定位置，可以用make uninstall来卸载  

## Lab1