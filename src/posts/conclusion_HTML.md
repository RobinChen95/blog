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
  - Software_course
  - HTML
  - Fore_end
tags: 
  - vuejs
  - vuepress
  - static site
created_at: 2019-03-05 17:00
updated_at: 2019-03-10 16:00
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

### 1.HTML的乱码问题：
由于HTML页面的汉字经常乱码，一般会在`<head>`标签内加入：`<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />`
### 2.HTML的表格：
`<table>`标签定义表格，一般可以用例如border="1"指定边框宽度为1。每个表格均有若干行（由` <tr>` 标签定义），每行被分割为若干单元格（由 `<td>` 标签定义）。字母 td 指表格数据（table data），即数据单元格的内容。表格的表头使用` <th>` 标签进行定义。数据单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等。
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

### 3. HTML内置框架iframe，可以用于在网页内展示网页
+ 代码：
```
<iframe src="http://101.200.53.152/posts/conclusion_HTML.html" frameborder="0"></iframe>
```
> 显示效果为：
<iframe src="http://101.200.53.152/posts/conclusion_HTML.html" frameborder="0" width="800" height="400"></iframe>

### 4. `<del>`标签可以用于删除文本，特定场合比较有用，如；
```
<del>PHP是世界上最辣鸡的语言</del>
```
~~PHP是世界上最辣鸡的语言~~

### 5. HTML5的音频与视频播放器：

> 今天，大多数音频是通过插件（比如 Flash）来播放的。然而，并非所有浏览器都拥有同样的插件。

> HTML5 规定了一种通过 audio 元素来包含音频的标准方法。

> audio 元素能够播放声音文件或者音频流。

> 今天，大多数视频是通过插件（比如 Flash）来显示的。然而，并非所有浏览器都拥有同样的插件。

> HTML5 规定了一种通过 video 元素来包含视频的标准方法。
```
HTML音频插件使用方法如下：
<audio src="http://www.w3school.com.cn/i/song.ogg" controls="controls">
Your browser does not support the audio element.
</audio>
```
> 效果如下：
<audio src="http://www.w3school.com.cn/i/song.ogg" controls="controls">
Your browser does not support the audio element.
</audio>

```
HTML视频插件使用方法用法如下：
<video src="http://www.w3school.com.cn/i/movie.ogg"  width="320" height="240" controls="controls">
Your browser does not support the video tag.
</video>
```
> 效果如下：
<video src="http://www.w3school.com.cn/i/movie.ogg"  width="320" height="240" controls="controls">
Your browser does not support the video tag.
</video>

### 6. HTML实现点击按钮切换页面
实现效果如下：
![系统截图](../img/MultiSelect.png)

代码如下：

```HTML
<!-- Right Panel -->
<div id="right-panel" class="right-panel">
    <!-- Header-->
    <header id="header" class="header">
        <div class="top-left">
            <div class="navbar-header">
                <a class="navbar-brand"><img src="/resources/images/logo_v5.png" alt="Logo"></a>
                <a id="menuToggle" class="menutoggle"><i class="fa fa-bars"></i></a>
            </div>
        </div>
    </header>
    <!-- /#header -->

    <div class="content">
        <div class="animated fadeIn">
            <div class="row">

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                          <div >
                            <strong class="card-title" style="float:left;">待修改数据</strong>
                            <div class="row" style="float:left;width:25%;margin-right:5%;margin-left:4.75%; overflow:hidden; text-overflow:ellipsis;">
                                <button type="button" class="btn btn-outline-danger btn-lg btn-block" name="r"
                                        id="Page1">固定车辆入校须知
                                </button>
                            </div>
                            <div class="row" style="float:left;width:25%;margin-right:2%;margin-left:2%;overflow:hidden; text-overflow:ellipsis;">
                                <button type="button" class="btn btn-outline-danger btn-lg btn-block" name="r"
                                        id="Page2">临时车辆入校须知
                                </button>
                            </div>
                            <div class="row" style="float:left;width:25%;margin-left:5%; overflow:hidden; text-overflow:ellipsis;">
                                <button type="button" class="btn btn-outline-danger btn-lg btn-block" name="r"
                                        id="Page3">临时人员入校须知
                                </button>
                            </div>
                           </div>
                            <div name="pages">

                                <div class="card-body">
                                    <div>
                                        <form role="form" action="{:url('plugin_content/doModify')}" method="post">
                                            <div class="row form-group">
                                                <div class="col col-md-1"><label for="password-input"
                                                                                 class=" form-control-label">标题</label>
                                                </div>
                                                <div class="col-12 col-md-11">
                                                    <input type="hidden" id="Page0" name="Page0" value="Page0"/>
                                                    <textarea id="title" name="title" rows="1" cols="30"
                                                              class="form-control">{$data[0]['title']}</textarea>
                                                    <small id="modified_time" name="modified_time"
                                                           class="help-block form-text"><span>上次修改时间：</span>{$data[0]['modified_time']}
                                                    </small>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-1"><label for="textarea-input"
                                                                                 class=" form-control-label">内容</label>
                                                </div>
                                                <div class="col-12 col-md-11"><textarea id="content" name="content"
                                                                                        rows="20" cols="100"
                                                                                        class="form-control">{$data[0]['content']}</textarea>
                                                    <button type="submit"
                                                            class="btn btn-outline-danger btn-lg btn-block"
                                                            style="margin-top:15px">修改
                                                    </button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div name="pages" style="display:none">
                                <div class="card-body">
                                    <div>
                                        <form role="form" action="{:url('plugin_content/doModify')}" method="post">
                                            <div class="row form-group">
                                                <div class="col col-md-1"><label for="password-input"
                                                                                 class=" form-control-label">标题</label>
                                                </div>
                                                <div class="col-12 col-md-11">
                                                    <input type="hidden" id="Page1" name="Page1" value="Page1"/>
                                                    <textarea id="title" name="title" rows="1" cols="30"
                                                              class="form-control">{$data[1]['title']}</textarea>
                                                    <small id="modified_time" name="modified_time"
                                                           class="help-block form-text"><span>上次修改时间：</span>{$data[1]['modified_time']}
                                                    </small>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-1"><label for="textarea-input"
                                                                                 class=" form-control-label">内容</label>
                                                </div>
                                                <div class="col-12 col-md-11"><textarea id="content" name="content"
                                                                                        rows="20" cols="100"
                                                                                        class="form-control">{$data[1]['content']}</textarea>
                                                    <button type="submit"
                                                            class="btn btn-outline-danger btn-lg btn-block"
                                                            style="margin-top:15px">修改
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div name="pages" style="display:none">
                                <div class="card-body">
                                    <div>
                                        <form role="form" action="{:url('plugin_content/doModify')}" method="post">
                                            <div class="row form-group">
                                                <div class="col col-md-1"><label for="password-input"
                                                                                 class=" form-control-label">标题</label>
                                                </div>
                                                <div class="col-12 col-md-11">
                                                    <input type="hidden" id="Page2" name="Page2" value="Page2"/>
                                                    <textarea id="title" name="title" rows="1" cols="30"
                                                              class="form-control">{$data[2]['title']}</textarea>
                                                    <small id="modified_time" name="modified_time"
                                                           class="help-block form-text"><span>上次修改时间：</span>{$data[2]['modified_time']}
                                                    </small>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-1"><label for="textarea-input"
                                                                                 class=" form-control-label">内容</label>
                                                </div>
                                                <div class="col-12 col-md-11"><textarea id="content" name="content"
                                                                                        rows="20" cols="100"
                                                                                        class="form-control">{$data[2]['content']}</textarea>

                                                    <button type="submit"
                                                            class="btn btn-outline-danger btn-lg btn-block"
                                                            style="margin-top:15px">修改
                                                    </button>

                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div><!-- .animated -->
    </div><!-- .content -->

    <div class="clearfix"></div>
</div>
<!-- /#right-panel -->
```
```JavaScript
<!-- /#right-panel -->
<script>
      window.onload = function ()
      {
          var rs = document.getElementsByName('r');
          var divs = document.getElementsByName('pages');
          var index = 0;
          var anonymous = function (i)
          {
              rs[i].onclick = function ()
              {
                  divs[index].style.display = "none";
                  divs[i].style.display = "block";
                  index = i;
              };
          };

          for ( var i = 0; i < rs.length; i++)
          {
              anonymous (i);
          }
          rs[index].checked = true;
          divs[index].style.display = "block";
      };
    
</script>
```
实现解析：使用JS判断，将不需要显示的`<div>`的`style`设置为`display:none`，从而实现只显示一个页面
```
未完待续
这篇文档是现学vuepress主题vuepress-theme-ktquez
https://github.com/ktquez/vuepress-theme-ktquez
和markdown文法写的
以后有时间会完善
感谢ktquez提供主题
```
