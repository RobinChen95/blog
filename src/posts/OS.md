---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: en                              # Lang is required
author: 陈国强
title: Nachos修改记录
description:
excerpt:
cover: false                         # Leave false if the post does not have cover image, if there is set to true
coverAlt:
demo:
categories:
  - Os_course
  - Linux
tags: 
  - vuejs
created_at: 2019-03-18 01:00
updated_at: 2019-03-18 01:00
meta:                                 # If you have cover image
  - property: og:image
    content: ../img/2019-03-17.png
  - name: twitter:image
    content: /images/posts/my-first-post.png
---

# 记录操作系统课程所学

## Lab0

### 1. [MakeFile](https://seisman.github.io/how-to-write-makefile/overview.html#id2)

> makefile关系到了整个工程的编译规则。一个工程中的源文件不计其数，并且按类型、功能、模块分 别放在若干个目录中，makefile定义了一系列的规则来指定，哪些文件需要先编译，哪些文件需要后编译， 哪些文件需要重新编译，甚至于进行更复杂的功能操作，因为makefile就像一个Shell脚本一样，其中也可 以执行操作系统的命令。

> makefile带来的好处就是——“自动化编译”，一旦写好，只需要一个make命令，整个工程完全自动编译，极 大的提高了软件开发的效率。 make是一个命令工具，是一个解释makefile中指令的命令工具，一般来说， 大多数的IDE都有这个命令，比如：Delphi的make，Visual C++的nmake，Linux下GNU的make。可见 ，makefile都成为了一种在工程方面的编译方法。

C源码文件会先生成中间目标文件，再由中间文件生成执行文件，makefile文件就是告诉make命令怎么样去编译与链接程序
### 2. make, make install, configure的区别

+ ./configure用于检测安装平台，是一个shell脚本
./configure一般用于生成MakeFile，为下一步编译做准备，例如代码：<label style="color:red">./configure --prefix=/usr</label>意为将软件安装到/usr下面

+ make：用于编译，从MakeFile中读取指令，然后编译

+ make install：用于安装，从MakeFile中读取指令，安装到特定位置，可以用make uninstall来卸载

### 3.main.cc源码阅读
**main.cc:**
```c

/* 关于# XXX的用法：
#define            定义一个预处理宏
#undef            取消宏的定义
#if                   编译预处理中的条件命令，相当于C语法中的if语句
#ifdef              判断某个宏是否被定义，若已定义，执行随后的语句
#ifndef            与#ifdef相反，判断某个宏是否未被定义
#elif                若#if, #ifdef, #ifndef或前面的#elif条件不满足，则执行#elif之后的语句，相当于C语法中的else-if
#else              与#if, #ifdef, #ifndef对应, 若这些条件不满足，则执行#else之后的语句，相当于C语法中的else
#endif             #if, #ifdef, #ifndef这些条件命令的结束标志.
defined         　与#if, #elif配合使用，判断某个宏是否被定义
*/

#define MAIN
#include "copyright.h"
#undef MAIN

#include "utility.h"
#include "system.h"

#ifdef THREADS
extern int testnum;
#endif

// extern可以置于变量或者函数前，以标示变量或者函数的定义在别的文件中，提示编译器遇到此变量和函数时在其他模块中寻找其定义。此外extern也可用来进行链接指定

extern void ThreadTest(void), Copy(char *unixFile, char *nachosFile);
extern void Print(char *file), PerformanceTest(void);
extern void StartProcess(char *file), ConsoleTest(char *in, char *out);
extern void MailTest(int networkID);

//----------------------------------------------------------------------
// main
// 	Bootstrap the operating system kernel.  
//	
//	Check command line arguments
//	Initialize data structures
//	(optionally) Call test procedure
//
//	"argc" is the number of command line arguments (including the name
//		of the command) -- ex: "nachos -d +" -> argc = 3 
//	"argv" is an array of strings, one for each command line argument
//		ex: "nachos -d +" -> argv = {"nachos", "-d", "+"}
//----------------------------------------------------------------------

int
main(int argc, char **argv)
{
    int argCount;			// the number of arguments 
					        // for a particular command

    DEBUG('t', "Entering main");
    (void) Initialize(argc, argv);
    
#ifdef THREADS
    for (argc--, argv++; argc > 0; argc -= argCount, argv += argCount) {
      argCount = 1;
      switch (argv[0][1]) {
      case 'q':
        testnum = atoi(argv[1]);
        argCount++;
        break;
      default:
        testnum = 1;
        break;
      }
    }

    ThreadTest();
#endif

    for (argc--, argv++; argc > 0; argc -= argCount, argv += argCount) {
	argCount = 1;
        if (!strcmp(*argv, "-z"))               // print copyright
            printf (copyright);
#ifdef USER_PROGRAM
        if (!strcmp(*argv, "-x")) {        	// run a user program
	    ASSERT(argc > 1);
            StartProcess(*(argv + 1));
            argCount = 2;
        } else if (!strcmp(*argv, "-c")) {      // test the console
	    if (argc == 1)
	        ConsoleTest(NULL, NULL);
	    else {
		ASSERT(argc > 2);
	        ConsoleTest(*(argv + 1), *(argv + 2));
	        argCount = 3;
	    }
	    interrupt->Halt();		// once we start the console, then 
					// Nachos will loop forever waiting 
					// for console input
	}
#endif // USER_PROGRAM
#ifdef FILESYS
	if (!strcmp(*argv, "-cp")) { 		// copy from UNIX to Nachos
	    ASSERT(argc > 2);
	    Copy(*(argv + 1), *(argv + 2));
	    argCount = 3;
	} else if (!strcmp(*argv, "-p")) {	// print a Nachos file
	    ASSERT(argc > 1);
	    Print(*(argv + 1));
	    argCount = 2;
	} else if (!strcmp(*argv, "-r")) {	// remove Nachos file
	    ASSERT(argc > 1);
	    fileSystem->Remove(*(argv + 1));
	    argCount = 2;
	} else if (!strcmp(*argv, "-l")) {	// list Nachos directory
            fileSystem->List();
	} else if (!strcmp(*argv, "-D")) {	// print entire filesystem
            fileSystem->Print();
	} else if (!strcmp(*argv, "-t")) {	// performance test
            PerformanceTest();
	}
#endif // FILESYS
#ifdef NETWORK
        if (!strcmp(*argv, "-o")) {
	    ASSERT(argc > 1);
            Delay(2); 				// delay for 2 seconds
						// to give the user time to 
						// start up another nachos
            MailTest(atoi(*(argv + 1)));
            argCount = 2;
        }
#endif // NETWORK
    }

    currentThread->Finish();	// NOTE: if the procedure "main" 
				// returns, then the program "nachos"
				// will exit (as any other normal program
				// would).  But there may be other
				// threads on the ready list.  We switch
				// to those threads by saying that the
				// "main" thread is finished, preventing
				// it from returning.
    return(0);			// Not reached...
}
```

## Lab1