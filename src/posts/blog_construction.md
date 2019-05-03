---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: en                              # Lang is required
author: 陈国强
title: 博客搭建总结
description:
excerpt: 一篇面向新手的博客搭建文章
cover: false                         # Leave false if the post does not have cover image, if there is set to true
coverAlt:
demo:
categories:
  - Fore_end
  - Back_end
  - Blog
  - Vuejs
tags:
  - vuejs
created_at: 2019-03-07 17:00
updated_at: 2019-05-04 1:00
meta:                                 # If you have cover image
  - property: og:image
    content: /images/posts/my-first-post.png
  - name: twitter:image
    content: /images/posts/my-first-post.png
---

> **[博客地址](https://www.robinchen95.com/)**
## 预备

搭建博客首先要会一点Linux，至少需要会几个常用的命令，[Linux入门教程](http://linux.vbird.org/#)，
搭建博客首先要有自己的云服务器，~~当然也可以自己搭，不推荐~~，服务器可以从阿里云/腾讯云/新浪云购买，
新浪云服务器比较特殊，是三者之中唯一一个提供备案域名的，但是只能用 ~~世界上最辣鸡的语言PHP~~，推荐购买阿里云的服务器，东西比较全，学生优惠9.9/月。  
使用Bash/Zsh操作服务器：  
Mac可以使用自带的Terminal，或者下载iTerm使用：[Mac终端配置教程](https://wyydsb.xin/other/terminal.html)  
Windows可以使用Linux子系统：[WSL安装与cmder配置教程](https://www.robinchen95.com/posts/Windows_Subsystem.html)  
一些复制粘贴就能用的Linux功能：[零碎的Linux笔记](https://www.robinchen95.com/posts/Linux_learning.html)  
SSH连接服务器：  
```bash
ssh root@你的IP //也可以是root之外的其他账户
输入密码之后就进入了对应Linux服务器的root账户文件夹下
```
开始之前，首先部署一下Github的提交脚本。  
先在Github新建一个仓库，在服务器使用`mkdir`命令新建一个文件夹，使用`cd`命令打开，并输入如下命令：  
```bash
git init
git remote add origin 你新仓库的url地址
git pull origin master
```
以上步骤是为了建立与远程仓库的连接，然后在本地目录`vim deploy.sh`新建一个脚本输入：  

```bash
#!/bin/bash

git config --global credential.helper store

echo "git add ."
git add .

echo "acquiring time now"
time=$(date "+%Y-%m-%d %H:%M:%S")
echo "now is $time"

echo "git commit $time updated"
git commit -m "$time updated"

echo "git push origin master"
git push origin master
```
这样，一个自动提交到Github的脚本就建好了，每次写完之后输入命令`sh deploy.sh`就可以自动部署到你的Github仓库了。  

## 后端  

## 前端  

## 其他  

## 问题记录  

1. 制作分享栏的时候，遇到了`yarn run build`与`yarn run dev`的网页效果不一样的问题。在开发的时候`yarn run dev`是没有问题的，
但是`yarn run build`的时候分享列表的图标显示不出来，排查出来的问题是~/theme/components/SharePost.Vue
下面引用了一个异常的类`class="share__item list"`导致了这个问题，原因不明。  
2. 在添加Categories的时候遇到了path错误，这个错误是因为.md文件写错了，以后注意检查。  
3. 在Windwos下使用新建文本文档会乱码，此时需要在Notepad等软件里面制定使用UTF-8的格式编码，猜测是因为Windwos会在txt文件的开头添加一部分东西，
或者指定了GBK编码导致的，[此文章曾经出现乱码](http://101.200.53.152/posts/Federation.html)。  
4. Windows下的截屏软件snippingtool会存储后缀名为.PNG的文件，而.PNG在Linux下编译会报错，需要修改为小写的.png  
5. 服务器安装oh-my-zsh之后，yarn命令报错：ERROR: There are no scenarios; must have at least one.  
解决方法：
```bash
# 此方法也可以用于重新安装yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install yarn
```
6. 域名突然无法访问，查看nginx，报了各种错误，最后通过杀掉占用80端口的进程，重启nginx恢复成功  
相关代码：  
```bash
sudo fuser -k 80/tcp #关闭占用80端口的程序
nginx
```