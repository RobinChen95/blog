---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: en                              # Lang is required
author: 陈国强
title: 工作汇报
description:
excerpt: 
cover: true                         # Leave false if the post does not have cover image, if there is set to true
coverAlt:                 # Explaining the Pic
demo:
categories:
  - Linux
  - Blog
  - Back_end
tags:
  - vue.js
created_at: 2019-11-20 00:00
updated_at: 2019-11-20 00:00
meta:                                 # If you have cover image
  - property: og:image
    content: /share/windows-version.png  
  - name: twitter:image
    content: ../img/windows-version.png  
---

## 研二上工作汇报  

---  
### 第一次工作汇报  
---  

|日期|待办|预计完成时间|
|:----:|:----:|:----:|
|第一周|部署好前端，服务器，搭建好通信，一周|已完成|
|第二周|在服务器上运行AI模型，构建好服务器的调用机制|已完成|
|第三周|改进并复现一个AI模型，使其能够精准测量|待完成|
|第四周|将AI的模型与数睿平台结合，使其能够运行在数睿上|待完成|
---  

### 第二次工作汇报  

---  
**完成预定工作，项目已经上线**  
成果：  
![](../img/wx.jpg)  
本周的工作内容：  
+ 构建服务器与前端的通信机制  
+ 搭建服务器端的AI的运行环境  
+ 基于py2.7运行了AI模型并返回结果  
+ 调试性能，调试前端，发布程序上线  
---

### 第三次工作汇报  

---
经过调研，实现预定效果主要有两种方法：  

+ 第一种 通过`AR`（增强现实）实现，预计AR能够提供静态物体的识别功能  

||优势|
|:----:|:----:|
|1|对静态物体的识别较为精准|
|2|对手机的支持较好|
|3|理论上能够实现用户交互|

||缺点|
|:----:|:----:|
|1|学习AR的人太少，资料过少，需要从英文文献开始摸索，耗时长|
|2|AR仅能用于静态物体追踪|
|3|`运行AR需要指定的手机机型，中心没有`|
|4|`需要重新构建AR应用，一切从0开始`|
|5|因为对AR技术不熟悉，耗时无法估计|
---  

+ 第二种 通过`AI`实现，AI实现的效果相当于百度APP里的实现效果，正在调研百度实现的方法与路径，因为是最新的技术，百度可能并没有开源，
但是已知他们是基于百度的飞浆开源框架开发  

||优势|
|:----:|:----:|
|1|能够动态追踪，并且不需要某一种特定机型|
|2|自己对AI相对AR更加熟悉，而且AI的开发社区更加成熟|
|3|百度已经于今年7月展示了成熟的Demo，技术上肯定是能完成的，但是`未开源`|

||缺点|
|:----:|:----:|
|1|AI不一定能实现用户交互|
|2|AI最后部署在手机上比较困难|
|3|AI的实现相对很复杂，预计完成时间`至少`半年以上|

+ ~~第三种 通过微信小程序，因为可能需要小程序企业认证，否定~~  
