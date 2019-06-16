---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: en                              # Lang is required
author: 陈国强
title: 报错记录
description:
excerpt: 汇总在各种情况下值得记录的Bug
cover: true                         # Leave false if the post does not have cover image, if there is set to true
coverAlt:                 # Explaining the Pic
demo:
categories:
  - Linux
  - Blog
  - Back_end
tags:
  - vue.js
created_at: 2019-04-30 04:00
updated_at: 2019-04-30 04:00
meta:                                 # If you have cover image
  - property: og:image
    content: /share/windows-version.png  
  - name: twitter:image
    content: ../img/windows-version.png  
---

## 报错记录  

> 1、Linux子系统修改Windows计算机名称时报了一个错误：WslRegisterDistribution failed with error: 0x800703fa  


解决方法：在运行窗口中执行“services.msc”指令，在本地服务中重启 LxssManager 服务 

> 2、当想用脚本cd打开到工作目录的时候，出现了一直执行`sh start.sh`还是在原目录的情况  

解决方法：这是因为Shell会fork一个子进程，然后子进程通过exec执行程序，所以每次执行完都会停留在原目录。  
如果要强制父bash执行呢？加入修饰符`source`或者`.`，即使用指令`. ./start.sh`或者`source start.sh`  

> 3、WSL想用`docker run hello-world`报错：docker: failed to register layer: Error processing tar file(exit status 1): invalid argument.  

报错原因：docker不兼容NTFS文件系统  

> 4、服务器安装oh-my-zsh之后，yarn命令报错：ERROR: There are no scenarios; must have at least one.  

解决方法：  
```bash
# 此方法也可以用于重新安装yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install yarn
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```
> 5、yarn报错  
```bash
/usr/share/yarn/lib/cli.js:45703 let { ^ SyntaxError: Unexpected token {
```
解决方法：  
```bash
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```
> 6、pycharm中升级pip，不能直接一步升级到19.1，会报错，需要先升级到18.0作为中介，很多东西都需要一步一步的升级，不能一步升级到位。   

> 7、本地时间与服务器时间对不上会导致https失效，会报一个时钟错误  

> 8、制作分享栏的时候，遇到了`yarn run build`与`yarn run dev`的网页效果不一样的问题。在开发的时候`yarn run dev`是没有问题的，
但是`yarn run build`的时候分享列表的图标显示不出来，排查出来的问题是~/theme/components/SharePost.Vue
下面引用了一个异常的类`class="share__item list"`导致了这个问题，原因不明。  

> 9、在Windwos下使用新建文本文档乱码

解决方法：此时需要在Notepad等软件里面制定使用UTF-8的格式编码，猜测是因为Windwos会在txt文件的开头添加一部分东西，
或者指定了GBK编码导致的。

> 10、Windows下的截屏软件snippingtool会存储后缀名为.PNG的文件，而.PNG在Linux下编译会报错，需要修改为小写的.png  

> 11、域名突然无法访问，查看nginx，报了各种错误，最后通过杀掉占用80端口的进程，重启nginx恢复成功  

相关代码：  
```bash
sudo fuser -k 80/tcp #关闭占用80端口的程序
nginx
```