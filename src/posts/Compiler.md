---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: en                              # Lang is required
author: 陈国强
title: Compiler Remake
description:
excerpt:
cover: false                         # Leave false if the post does not have cover image, if there is set to true
coverAlt:
demo:
categories:
  - Software_course
tags: 
  - vuejs
created_at: 2019-04-14 15:00
updated_at: 2019-04-14 15:00
meta:                                 # If you have cover image
  - property: og:image
    content: /images/posts/my-first-post.png
  - name: twitter:image
    content: /images/posts/my-first-post.png
---

## 第一章 引论  
+ 编译器：阅读某一种源语言并把该程序翻译为目标语言的程序  
解释器：不翻译语言，直接利用用户提供的输入执行源程序中指定的操作

+ 编译器结构：  
![编译器结构](../img/compiler_components.png)![赋值语句的翻译](../img/translate_sentence.png)  
+ 1. 词法分析器：以**词为单位**，词法分析器分析句子中的每个单词，包括分号，等号等  
例如 position = initial + rate +60  
position被映射成<id, 1>，其中id代表identifier，1代表符号表中id所对应的条目，也可以用position代替  
= 被映射成<=>，不需要第二个分量，因为=是**一词一码**的  
initial被映射成<id, 2>，2代表initial对应符号表的条目  
\+、\*均会被映射为<\+>、<\*>  
空格会被词法分析器忽略  
+ 2. 语法分析

+ 上下文无关文法：所有的产生式左边只有一个非终结符  
上下文有关文法：产生式左边可能有终结符  
 解释：  
``` 
在应用一个产生式进行推导时，前后已经推导出的部分结果就是上下文。  
 上下文无关的意思的，只要文法的定义里有某个产生式，不管一个非终结符前后的串是什么，就可以应用相应的产生式进行推导。  
 （从形式上来看，就是产生式的左边都是单独一个非终结符，即形如 S-> ...，而不是非终结符左右还有别的东西，例如 aSb -> ...）
举例：  
**上下文无关文法的产生式：**：  
    Sent -> S V O  
    S -> 人 | 天  
    V -> 吃 | 下  
    O -> 雨 | 雪 | 饭 | 肉  
其中英文字母都是非终结符（SVO 分别表示主谓宾），汉字都是终结符.  
这个文法可以生成如下句子：｛人吃饭，天下雨，人吃肉，天下雪，人下雪，天下饭，天吃肉，……｝
可以看到，其中有一些搭配在语义上是不恰当的，例如“天吃肉”。  
其（最左）推导过程为：Sent -> SVO -> 天VO -> 天吃O -> 天吃肉但是上下文无关文法里，因为有“V -> 吃 | 下”
这样一条产生式，V 就永远都可以推出“吃”这个词，它并不在乎应用“V -> 吃 | 下”这个产生式进行推导时 V 所在的上下文
（在这个例子里，就是”天VO“中 V 左右两边的字符串”天“和”O“）。
事实上，在 V 推出“吃”这一步，它的左边是“天”这个词，而”天“和”吃“不搭配，导致最后的句子读起来很奇怪。

**上下文有关文法的产生式：**：  
     Sent -> S V 
     OS -> 人 | 天
     人V -> 人吃
     天V -> 天下
     下O -> 下雨 | 下雪
     吃O -> 吃饭 | 吃肉
 可以看到，这里对 V 的推导过程施加了约束：虽然 V 还是能推出”吃“和”下“两个词，但是仅仅当 V 左边是”人“时，才允许它推导出”吃“；
 而当 V 左边是”天“时，允许它推导出”下“。这样通过上下文的约束，就保证了主谓搭配的一致性。
 类似地，包含 O 的产生式也约束了动宾搭配的一致性。这样一来，这个语言包含的句子就只有｛人吃饭，天下雨，人吃肉，天下雪｝这四条，都是语义上合理的。
 以”人吃饭“为例，推导过程为：Sent -> SVO -> 人VO -> 人吃O -> 人吃饭其中第三步推导是这样的：非终结符 V 的上文是“人”。
 因此可以应用“人V -> 人吃”这条产生式，得到“人VO -> 人吃O”。第四步也类似。
```  


## 参考文章  
[知乎：应该如何理解「上下文无关文法」？](https://www.zhihu.com/question/21833944)