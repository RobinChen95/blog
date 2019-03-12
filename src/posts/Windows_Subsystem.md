---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: en                              # Lang is required
author: 陈国强
title: Windows Linux子系统安装总结
description:
excerpt:
cover: false                         # Leave false if the post does not have cover image, if there is set to true
coverAlt:
demo:
categories:
  - Linux
  - Blog
tags:
  - vue.js
created_at: 2019-03-13 00:00
updated_at: 2019-03-13 00:00
meta:                                 # If you have cover image
  - property: og:image
    content: /images/posts/my-first-post.png
  - name: twitter:image
    content: /images/posts/my-first-post.png
---

# Windows Linux子系统安装总结

---

> 今天和Ubuntu鏖战了一天，早上发现Windows的PowerShell还是太难用了，无论装什么插件都拯救不了PowerShell，所以下午刚吃完饭就打起了装个Linux的主意。

+ 首先试了试Vmware，Vmware安装倒是挺方便的，但是在安装Vmware Tools的时候，软件已经提示我安装正确了，但是关闭Terminal之后还是(~~屎~~)一样的分辨率，遂放弃。
+ 后来又打起了装个双系统的主意，装双系统其实还是挺简单的，但是Ubuntu总是默认会覆盖掉我的Windows Boot Manager，而不会乖乖的呆在机械硬盘里，~~作为一个肥宅，没人能动我的Windows~~，遂把Ubuntu整个连根拔起，连Ubuntu的MBR都一起删了

+ 在打算放弃的时候，偶然间发现Windows可以运行Linux子系统，惊闻微软爸爸的操作，于是一顿谷歌加百度，在MicroSoft Store中找到了Ubuntu 16.04，喜出望外，一顿安装，竟然能用，不仅能用，还挺好用，唯一出了一个问题就是网络连接老是出问题，为了能联网更新apt-get安装软件，期间想了无数解决办法：
1. 尝试过更换阿里/清华/网易/中科大源，都不行
2. 还尝试过以上四者都写入source.list，最后会报一堆的 Ing:xxx
3. 还想过转换http和https、打开VPN等等的骚操作

---
+ ~~没想到最后是连上了室友的移动热点解决了问题~~

微软是一个人民的好公司，不仅做出了在Windwos10里面塞一个完整的Linux子系统的骚操作，还收购了Github提供了私有仓库，~~感谢微软爸爸~~。今天的遭遇再次印证了当初的那个想法，Windows其实比Mac更适合编程，(~~Linus本人也夸过微软的姿势水平高~~)只是我等菜鸡还没有达到那个水平，把Mac高度集成的系统错认为了好用。
