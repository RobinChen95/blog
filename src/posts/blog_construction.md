---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: en                              # Lang is required
author: 陈国强
title: 博客搭建总结
description:
excerpt:
cover: false                         # Leave false if the post does not have cover image, if there is set to true
coverAlt:
demo:
categories:
  - Blog
  - vuejs
  - HTML
tags:
  - vuejs
created_at: 2019-03-07 17:00
updated_at: 2019-03-07 17:00
meta:                                 # If you have cover image
  - property: og:image
    content: /images/posts/my-first-post.png
  - name: twitter:image
    content: /images/posts/my-first-post.png
---


# 博客搭建相关

> **[博客地址](http://101.200.53.152)**

> 一篇面向新手的服务器搭建攻略
同时也是对自己的总结

## 预备

> 搭建博客首先要有自己的云服务器，~~当然也可以自己搭，不推荐。~~
服务器可以从阿里云/腾讯云/新浪云购买
新浪云服务器比较特殊，是三者之中唯一一个提供备案域名的，但是只能用 ~~世界上最辣鸡的语言PHP~~
推荐购买阿里云的服务器，东西比较全，学生优惠9.9/月。

> 连接服务器一般使用SSH，Mac可以使用自带的Terminal，或者下载iTerm使用，iTerm配置教程：
[Mac终端配置教程 By 惠强dalao](https://wyydsb.xin/other/terminal.html)
Windows可以使用PowerShell或者使用Fluent Terminal，配置教程：
[Windows PowerShell改造教程](https://zhuanlan.zhihu.com/p/56808199)

打开终端或者PowerShell，输入：
```bash
ssh root@你的IP //也可以是root之外的其他账户
输入密码之后就进入了对应Linux服务器的root账户文件夹下
```
大部分人第一次面对Linux纯命令行的界面都是懵逼的（~~包括我~~），但是没办法也需要适应，Linux常用的命令其实也只有几十个，习惯了命令行编程之后会自然的而然地习惯Linux与Shell编程，[Linux入门教程](http://linux.vbird.org/#)，如果实在不习惯，可以安装宝塔Linux面板，这个图形化的界面可以让Linux像Windows一样简单易使用，不过使用图形化面板之类的也存在诸多不便，还是推荐使用SSH的命令行界面进行开发。

开始之前，首先部署一下Github的提交脚本。现在Github新建一个仓库，然后进入Linux主机，进入主目录，输入

```bash
git init
git remote add origin master 你新仓库的url地址
git pull
```
以上步骤是为了建立与远程仓库的连接，然后在主目录`vim deploy.sh`新建一个脚本输入：

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

1. 制作分享栏的时候，遇到了`yarn run build`与`yarn run dev`的网页效果不一样的问题。在开发的时候`yarn run dev`是没有问题的，但是`yarn run build`的时候分享列表的图标显示不出来，排查出来的问题是~/theme/components/SharePost.Vue下面引用了一个异常的类`class="share__item list"`导致了这个问题，原因不明。

2. 在添加Categories的时候遇到了path错误，这个错误是因为.md文件写错了，以后注意检查