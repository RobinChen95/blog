---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: en                              # Lang is required
author: 陈国强
title: 人脸识别程序的搭建
description:
excerpt: 包含三部分：微信小程序(html,css,js)、后台(nginx,uwsgi,supervisord,flask,python等)、AI模型(Inception-Resnet、IMDB、dlib、opencv)
cover: true                         # Leave false if the post does not have cover image, if there is set to true
coverAlt: 
demo:
categories:
  - Linux
tags: 
  - Linux
created_at: 2020-02-19 00:00
updated_at: 2020-02-19 00:00
meta:                                 # If you have cover image
  - property: og:image
    content: https://ktquez.com/share/essential-guide-to-improve-seo-in-single-page-application-vuejs.png
  - name: twitter:image
    content: https://ktquez.com/share/essential-guide-to-improve-seo-in-single-page-application-vuejs.png
---

## 实现效果  

(感谢吴彦祖同学提供的测试照)  
![](../img/test_result.jpg)  

## 项目结构  

![](../img/AI_Structure.png)  

## 准备工作  
1.微信小程序申请  
> **[微信小程序的申请及开发工具的使用](https://robinchen95.com/documents/wx02.pdf)**  

2.备案域名的处理  
+ 有备案域名  
有备案域名请跳过本节  
+ 无备案域名  
无备案域名可以从新浪云购买服务器，为什么选择新浪云？因为据了解仅有新浪云提供带备案的域名，而其他云服务仅提供公网IP，而微信小程序添加备案过的
域名作为request请求域，不可以直接使用公网IP，但是，新浪云仅提供带PHP环境的服务器，所以，需要用PHP做一次请求转发，而图片保存在本地。  
```php
<?php
header('Content-Type:application/json');  //此声明非常重要
//----------------------------------------------------------------  
// 本节处理微信端上传图片，上传成功保存则到本地，失败则返回失败消息
if(is_uploaded_file($_FILES['file']['tmp_name'])) {
    //把文件转存到目录
    $uploaded_file=$_FILES['file']['tmp_name'];
    $username =  "min_img";
    //给每个用户动态的创建一个文件夹
    $user_path="./weixin/";
    //判断该用户文件夹是否已经有这个文件夹
    if(!file_exists($user_path)) {
        mkdir($user_path);
        echo $user_path;
    }
    $file_true_name=$_FILES['file']['name'];
    // 这是新浪云提供的本机域名
    $base_name = 'http://1.e2321.sc2yun.com';
    $user_overwrite_path="/weixin";
    $random_pre_name = "/".time().rand(1,1000)."-".date("Y-m-d").substr($file_true_name,strrpos($file_true_name,"."));
    $file_name_combined = $base_name."".$user_overwrite_path."".$random_pre_name;
    $move_to_file=$user_path."/".$random_pre_name;
    $age = 25;
    $gender = 'Male';
 	if(move_uploaded_file($uploaded_file,$move_to_file)) {
        $tempFile= $move_to_file;
        $post_data = array('pic'=>$file_name_combined);
        //此处应该将IP改为目标机器的IP
        $return_data = send_post('http://47.75.137.198:5002/employees',json_encode($post_data));
        $info['age'] = $age;
        $info['gender']= $gender;
        echo json_encode($info);
    } else {
        echo "上传失败1".date("Y-m-d H:i:sa");
    }
} else {
    echo "上传失败2".date("Y-m-d H:i:sa");
}
//----------------------------------------------------------------  

// 本节为发送http请求的函数
function send_post($url, $post_data) {
	$postdata = http_build_query($post_data);
	$options = array(
		'http' => array(
			'method' => 'POST',
			'header' => 'Content-type:application/json',
			'content' => $postdata,
			'timeout' => 15 * 60 // 超时时间（单位:s）
		)
	);
	$context = stream_context_create($options);
	$result = file_get_contents($url, false, $context);
	return $result;
}
?>
```
3.为域名部署https证书  
> **[阿里云的证书部署](https://www.cnblogs.com/SemiconductorKING/p/9106971.html)**  

## 微信前端  


## 后端服务  

## AI实现  

## 性能优化  

## 项目测试  

