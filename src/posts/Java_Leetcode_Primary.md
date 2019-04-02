---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: en                              # Lang is required
author: 陈国强
title: Leetcode初级算法题解
description: 使用Java语言的Leetcode解题记录
excerpt: 使用Java语言的Leetcode解题记录
cover: false                         # Leave false if the post does not have cover image, if there is set to true
coverAlt:
demo:
categories:
  - Leetcode
  - Software_course
tags: 
  - Leetcode
created_at: 2019-04-02 01:00
updated_at: 2019-04-02 01:00
meta:                                 # If you have cover image
  - property: og:image
    content: /images/posts/my-first-post.png
  - name: twitter:image
    content: /images/posts/my-first-post.png
---

## 题解说明

> 本片文章是为了方便实验班的同学们查阅所作的题解  
本文提供的是Java语言的解法，可能会调用Java自带的API  
因为算法笔试的时候就是这么要求的，不要重复造轮子  
如果本文有错误的地方，~~那我也是不会负责的~~  
欢迎其他同学补充更好的解法或者提供其他语言的题解  


## 数组

### 1. [从排序数组中删除重复项](https://leetcode-cn.com/explore/featured/card/top-interview-questions-easy/1/array/21/)
```Java
给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

示例 1:
给定数组 nums = [1,1,2],  
函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。  
你不需要考虑数组中超出新长度后面的元素。  

示例 2:  
给定 nums = [0,0,1,1,1,2,2,3,3,4],  
函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。  
你不需要考虑数组中超出新长度后面的元素。  

说明:
为什么返回数值是整数，但输出的答案是数组呢?  
请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。  
你可以想象内部操作如下:  

// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝  
int len = removeDuplicates(nums);  
// 在函数里修改输入数组对于调用者是可见的。  
// 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。  
for (int i = 0; i < len; i++) {  
    print(nums[i]);  
}  
```

**解题思路**

可以只用一次循环和O(1)的额外空间达到效果  
使用一个number计数器，从0开始遍历数组，由于数组是<span style="color:red">有序</span>的
所以遍历的时候，每当遇到与当前number不一致的，便对number+1，并对num\[number\]进行赋值，最后返回number计数器即可
```Java
public int removeDuplicates(int[] nums) {
    // 声明number计数器
    int number = 0;
    for (int i = 0; i < nums.length; i++) {
        // 如果遍历的时候遇到了不重复的数
        if (nums[i] != nums[number]) {
            // number计数器右移一位
            number++;
            // 赋值
            nums[number] = nums[i];
        }
    }
    return number + 1;
}
```

### 2. 买卖股票的最佳时机 II