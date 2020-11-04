---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: en                              # Lang is required
author: 陈国强
title: 研三工作汇报
description:
excerpt: 
cover: true                         # Leave false if the post does not have cover image, if there is set to true
coverAlt:                 # Explaining the Pic
demo:
categories:
  - Blog
  - Back_end
tags:
  - vue.js``
created_at: 2020-11-04 12:00
updated_at: 2020-11-04 12:00
meta:                                 # If you have cover image
  - property: og:image
    content: /share/windows-version.png  
  - name: twitter:image
    content: ../img/windows-version.png  
---

## 研三上工作汇报  

---  
### 第一次工作汇报  2020/11/05  
---  

#### 本周工作内容  

本周的主要工作：
+ 1.阅读论文，总结出设计的模式  
    + 总体的设计目标：使智能合约能够支持数据分析第三方库的运行    
        + ~~1）最简单的设计：仅为其构建通信机制~~   
            + AI程序与python后台运行在一个容器中，yjs代码运行在另一个容器中  
            + 他们分别都是可用的，然后为他们构建一个通信环境，包括参数传递、图片传输  
            + 缺点是每一次需求的改变，两边的代码都需要进行改变
        + 2）进一步的设计：  

