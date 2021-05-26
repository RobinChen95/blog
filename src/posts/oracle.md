---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: en                              # Lang is required
author: 陈国强
title: 预言机技术文档
description:    本文的参考文献目录：https://robinchen95.com/documents/Refer/
excerpt: 
cover: true                         # Leave false if the post does not have cover image, if there is set to true
coverAlt: 
demo:
categories:
  - Linux
  - Fore_end
  - Back_end
  - Python
  - Java
tags: 
  - Linux
created_at: 2021-05-26 15:30
updated_at: 2021-05-26 15:30
meta:                                 # If you have cover image
  - property: og:image
    content: https://ktquez.com/share/essential-guide-to-improve-seo-in-single-page-application-vuejs.png
  - name: twitter:image
    content: https://ktquez.com/share/essential-guide-to-improve-seo-in-single-page-application-vuejs.png
---

## 一、预言机及其作用介绍  
### 预言机介绍

> 预言机是一种为图灵机解答无法通过计算得到结果的问题的机器，由图灵提出  
> 区块链系统是封闭的，无法获取外界数据，而区块链预言机就是为区块链节点获取外部世界数据的工具  
    
### 为什么会在北大数瑞中引入预言机  

+ 最初的目的是为了向北大数瑞拓展python预言的支持，之前北大数瑞的做法是反射  
+ 在研究过程中发现，使用预言机将深度学习等计算场景复杂的技术放在预言机中进行是一个解决问题的好方法  
+ 本次设计的预言机达到了以下的目的：  

    1. 可以直接在数瑞合约IDE中编写python代码，并通过预言机运行  
    2. 可以通过预言机提供的API执行写好的深度学习模型  
    3. 根据协议设计了预言机的通信、运行、拓展与安全机制  

### 文献阅读    
[参考文献地址，建议从中文开始](https://robinchen95.com/documents/Refer)  
> 重要参考文献  

|编号|摘要|重要性|地址|
|:----:|:----:|:----:|:----:|
|01|提出预言机的概念，p172-p173|重要|[SYSTEMS OF LOGIC BASED ON ORDINALS](https://robinchen95.com/documents/Refer/01-SYSTEMS%20OF%20LOGIC%20BASED%20ON%20ORDINALS.pdf)|
|02|RSA加密算法|简单了解原理|[RFC2246](https://robinchen95.com/documents/Refer/12-rfc2246.pdf)|
|03|TLS协议|简单了解原理|[RFC4346，tls1.1](https://robinchen95.com/documents/Refer/13-rfc4346.pdf)|
|04|TLS-Notary协议|重要文献|[TLS-Notary](https://robinchen95.com/documents/Refer/05-TLSNotary.pdf)|
|05|预言机综述|重要文献|[Trustworthy Blockchain](https://robinchen95.com/documents/Refer/03-Trustworthy%20Blockchain.pdf)|
|06|区块链与AI结合的方式|重要文献|[Blockchain for AI](https://robinchen95.com/documents/Refer/06-Blockchain%20for%20AI-%20Review%20and%20%20Open%20Research%20Challenges.pdf)|
|07|XAI的设计|参考文献|[Blockchain for explainable and trustworthy artificial intelligence](https://robinchen95.com/documents/Refer/07-Blockchain%20for%20explainable%20and%20trustworthy%20artificial%20intelligence.pdf)|
|08|预言机综述|参考文献|[Reliability analysis for blockchain oracles](https://robinchen95.com/documents/Refer/04-Reliability%20analysis%20for%20blockchain%20oracles.pdf)|
|09|预言机综述|参考文献|[From Oracles to Trustworthy Data](https://robinchen95.com/documents/Refer/11-From%20Oracles%20to%20Trustworthy%20Data%20%20On-chaining%20Systems%20.pdf)|
|10|一种更好的TLS-N协议|改进参考|[TLS-N](https://robinchen95.com/documents/Refer/09-TLS-N-%20Non-repudiation%20over%20TLS.pdf)|

### 预言机涉及到的协议与技术  
> 主要的实现技术是Nginx-uWSGI-Flask-Supervisord，一种web服务的框架  

|技术类型|用途|备注|
|:----:|:----:|:----:|
|RSA加密算法|预言机密钥协商阶段的算法|简单了解原理|
|TLS/SSL协议|预言机的工作基础协议|简单了解原理|
|TLS-Notary协议|预言机的工作协议|重要文献|
|Nginx|服务端框架|/|
|uWSgi|服务与应用的中间件|/|
|flask|一种应用框架|/|
|python2.7-subprocess标准库|预言机的执行功能构建|/|
