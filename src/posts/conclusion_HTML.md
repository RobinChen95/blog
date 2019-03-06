---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: en                              # Lang is required
author: 陈国强
title: HTML总结
description:
excerpt:
cover: false                         # Leave false if the post does not have cover image, if there is set to true
coverAlt:
demo:
categories:
  - HTML
tags: 
  - vuejs
  - vuepress
  - static site
created_at: 2019-03-05 17:00
updated_at: 2019-03-05 17:00
meta:                                 # If you have cover image
  - property: og:image
    content: /images/posts/my-first-post.png
  - name: twitter:image
    content: /images/posts/my-first-post.png
---

# HTML标签学习总结
---
## 什么是 HTML？


+ HTML 是用来描述网页的一种语言。
+ HTML 指的是超文本标记语言 (Hyper Text Markup Language)
+ HTML 不是一种编程语言，而是一种标记语言 (markup language)
+ 标记语言是一套标记标签 (markup tag)
+ HTML 使用标记标签来描述网页

## HTML 各标签的作用

>由于之前学过HTML，所以在这里只总结自己生疏的HTML标签

1. 由于HTML页面的汉字经常乱码，一般会在`<head>`标签内加入：`<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />`，防止乱码
2. `<table>标签定义表格，一般可以用例如border="1"指定边框宽度为1。每个表格均有若干行（由 <tr> 标签定义），每行被分割为若干单元格（由 <td> 标签定义）。字母 td 指表格数据（table data），即数据单元格的内容。表格的表头使用 <th> 标签进行定义。数据单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等。`
+ 举例，代码：
```
<table border="1">
<tr>
<th>内容1</th>
<th>内容2</th>
</tr>
<tr>
<td>row 1, cell 1</td>
<td>row 1, cell 2</td>
</tr>
<tr>
<td>row 2, cell 1</td>
<td>row 2, cell 2</td>
</tr>
</table>
```
> 显示效果为：
<table border="1">
<tr>
<th>内容1</th>
<th>内容2</th>
</tr>
<tr>
<td>row 1, cell 1</td>
<td>row 1, cell 2</td>
</tr>
<tr>
<td>row 2, cell 1</td>
<td>row 2, cell 2</td>
</tr>
</table>

3. HTML内置框架iframe，可以用于在网页内展示网页
+ 代码：
```
<iframe src="http://101.200.53.152/posts/conclusion_HTML.html" frameborder="0"></iframe>
```
> 显示效果为：
<iframe src="http://101.200.53.152/posts/conclusion_HTML.html" frameborder="0" width="800" height="400"></iframe>

4. `<del>`标签可以用于删除文本，特定场合比较有用，如；
```
<del>PHP是世界上最辣鸡的语言</del>
```
<del>PHP是世界上最辣鸡的语言</del>

5. HTML5的音频与视频播放器：

