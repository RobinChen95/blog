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
本题解仅记录的是我的解法，如果更好的解法，欢迎讨论  
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
所以遍历的时候，不重复的项，便对number+1，并对num\[number\]进行赋值，最后返回number计数器即可
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

### 2. [买卖股票的最佳时机 II](https://leetcode-cn.com/explore/featured/card/top-interview-questions-easy/1/array/22/)
```Java
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

示例 1:
输入: [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
     
示例 2:
输入: [1,2,3,4,5]
输出: 4
解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
     因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
     
示例 3:
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```

**解题思路**

这是典型的贪心法问题，即只要第二天的股票价格高于第一天股票的价格，便选择购入  
本题之所以可以这么解，是因为题目<span style="color:red">没有限定每天的购买次数</span>  
性能优化：分别寻找到附近的极大值与极小值之后再进行买入卖出的操作  
```Java
public int maxProfit(int[] prices) {
if(prices == null || prices.length == 0) return 0;
int i = 0;
int max = 0;
while(i < prices.length){
    //找到附近最小的数
    while(i < prices.length - 1 && prices[i+1] <= prices[i])
        i++;
    int min = prices[i];
    //找到附近最大的数
    while(i < prices.length - 1 && prices[i+1] >= prices[i])
        i++;
    max += (i < prices.length) ? (prices[i++] - min) : 0;
}
return max;
}
```

### 3. [旋转数组](https://leetcode-cn.com/explore/featured/card/top-interview-questions-easy/1/array/23/)

```Java
给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例 1:
输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]

示例 2:
输入: [-1,-100,3,99] 和 k = 2
输出: [3,99,-1,-100]
解释: 
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]

说明:
尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
要求使用空间复杂度为 O(1) 的原地算法。
```

**解题思路**

+ **解法一**  
写一个函数，每次调用时都会将数组向右旋转一位，然后需要几位移动几位  
<span style="color:red">本算法性能较差</span>   
```Java
public void rotate(int[] nums, int k) {
    //当k超过num.length的时候就取余数
    k %= nums.length;
    for (int i = 0; i < k; i++) {
        rotate_one_num(nums);
    }
}

//本函数实现每次调用就将数组向右旋转一位
public void rotate_one_num(int[] nums) {
    int temp = nums[nums.length - 1];
    for (int i = nums.length - 1; i > 0; i--) {
        nums[i] = nums[i - 1];
    }
    nums[0] = temp;
}
```

+ **解法二**    
使用Java自带的System.arraycopy()  
System.arraycopy()可以指定拷贝数组的某一段  
所以需要移动几位都可以直接拷贝到对应的位置  
<span style="color:red">本算法的性能最好，但是不满足O(1)的限制条件</span>  
```Java
public void rotate(int[] nums, int k) {
    k %= nums.length;
    int[] tmp=nums.clone();
    System.arraycopy(tmp,tmp.length-k,nums,0,k);
    System.arraycopy(tmp,0,nums,k,tmp.length-k);
}
```

+ **解法三**  
解法三理解起来相对更困难，设数组长度为length把数组向右旋转k位，等价于  
+ 一、把数组从0到length每个位置依次对换  
+ 二、把数组从0到k-1对换
+ 三、把数组从k到length-1对换  
对换的意思是把`nums[0]`与`nums[length-1]`、`nums[1]`与`nums[length-2]`……对换  
^符号的意思是异或([关于使用异或的解释](https://blog.csdn.net/u010709324/article/details/77963043))，
这里使用异或是为了对换的同时提高性能    
```Java
public void rotate(int[] nums, int k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
}

public void reverse(int[] nums, int l, int r){
    for(int i = l; l < r && i < r; i++){
        nums[i] = nums[r] ^ nums[i];
        nums[r] = nums[r] ^ nums[i];
        nums[i] = nums[r] ^ nums[i];
        r--;
    }
}
```

### 4. [存在重复](https://leetcode-cn.com/explore/featured/card/top-interview-questions-easy/1/array/24/)  

```Java
给定一个整数数组，判断是否存在重复元素。
如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

示例 1:
输入: [1,2,3,1]
输出: true

示例 2:
输入: [1,2,3,4]
输出: false

示例 3:
输入: [1,1,1,3,3,4,3,2,4,2]
输出: true
```

**解题思路**  

设置一个HashSet遍历数组，当HashSet中存在重复的时候，返回true，否则返回false

```Java
public boolean containsDuplicate(int[] nums) {
    HashSet<Integer> hs = new HashSet<>();
    for (int i = 0; i < nums.length; i++) {
        //HashSet是不允许重复的，如果add了一个已经存在的重复项，会返回false
        if (hs.add(nums[i]));
        else return true;
    }
    return false;
}
```  

### 5. [只出现一次的数字](https://leetcode-cn.com/explore/featured/card/top-interview-questions-easy/1/array/25/)  

```Java
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：
你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:
输入: [2,2,1]
输出: 1

示例 2:
输入: [4,1,2,1,2]
输出: 4
```

**解题思路**  
由于有且仅有一个不重复的数，其余数都出现两次  
那么可以使用异或^，相同的值异或值为0，将整个数组一次异或之后就仅剩下那个不重复的数  
([关于使用异或的解释](https://blog.csdn.net/u010709324/article/details/77963043))  
```Java
public int singleNumber(int[] nums) {
    int temp = nums[0];
    for (int i = 1; i < nums.length; i++) {
        temp^=nums[i];
    }
    return temp;
}
```  

## 字符串  

### 4. [有效的字母异位词](https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/35/)

```Java
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的一个字母异位词。
示例 1:
输入: s = "anagram", t = "nagaram"
输出: true

示例 2:
输入: s = "rat", t = "car"
输出: false

说明:
你可以假设字符串只包含小写字母。

进阶:
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
```

+ **解法一**  
最直接的解法就是调用Java自带的API，先将字符串转换为char数组，然后将char数组排序，然后比较即可  
<span style="color:red">本解法性能中等</span>  
```Java
public boolean isAnagram(String s, String t) {
    char[] s_char = s.toCharArray();
    char[] t_char = t.toCharArray();
    Arrays.sort(s_char);
    Arrays.sort(t_char);
    if (Arrays.equals(s_char,t_char))return true;
    else return false;
}
```

+ **解法二**  
由于判断的是异位词，所以每个单词的出现的频率相同，并且由于只有小写字母  
所以可以设置一个计数数组，String s中每一个字符都会使得对应的计数数组中的计数值+1  
而String t中的每一个字符都会使得对应的计数数组中的计数值-1，最后如果该数组所有数都等于0，则表示s与t是异位词  
```Java
public boolean isAnagram(String s, String t) {
    // 如果长度不相等，则不可能是异位词
    if (s.length() != t.length())
        return false;
    //计数数组
    int[] count = new int[128];
    for (int i = 0; i < s.length(); ++i)
        count[s.charAt(i)]++;
    for (int i = 0; i < t.length(); ++i)
        count[t.charAt(i)]--;
    for (int i = 0; i < count.length; ++i)
        if (count[i] != 0)
            return false;
    return true;
}
```