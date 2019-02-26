module.exports = {
<<<<<<< HEAD
  base: '/', 
  dest: './dist',
  title: 'ESI PSY Congroo',
  description: '',
  head: [
    [
      'link',
      {
        rel: 'shortcut icon',
        href: '/favicon.ico'
      }
    ]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'ハッピーシンセサイザ',
      description: '',
    }
  },
  markdown: {
    lineNumbers: true //是否开启文章代码左边的行号显示
  },
  themeConfig: {
    placeholder: '搜索', //搜索框的默认文章
    searchReply: '什么都没搜到，试一下其它搜索词~',
    author: 'Chen Guoqiang', //侧边栏的设置
    email: '407339708@pku.edu.cn',
    pagination: '5', //每一页显示的文章个数
    avatar: '/avatar.jpg', //头像地址
    brand: '/brand.jpg', //头像背景图片地址
    github: 'https://github.com/RobinChen95', //点击github跳转的地址
    vssue: {
      //评论的配置,
      need: false, //是否需要评论
      development: {
        //开发环境下的配置
        clientId: '',
        clientSecret: '',
        owner: '',
        repo: '',
        locale: 'zh'
      },
      production: {
        //生产环境的配置
        clientId: '',
        clientSecret: '',
        owner: '',
        repo: '',
        locale: 'zh'
      }
    },
       menus: [
      // icons by https://fontawesome.com/icons
      {text: 'Home', icon: 'fa fa-home', url: '/'},],
    menus: {
      //侧边栏的文字
      tags: '标签分类',
      home: '主页',
      all: '时间归档',
      github:'Github',
      about:'简历'
    },
  }
};
=======
  //网站标题
  title: '陈国强的个人博客',
  // 主页描述
  description: 'Just playing around',
  // 要部署的仓库名字
  base: '/',
  dest: './docs/.vuepress/dist',
  // 主题配置
  themeConfig: {
    // 导航配置
    nav: [
      // text为导航栏显示文字，link为路径，即文件夹名字，注意不要丢了名字前后的'/'
      {text: 'Home', link: '/'},
      {text: 'About', link: '/about/'},
      {text: 'Problem', link: '/problem/'},
      {text: 'Study', link: '/study/'},
      {text: '知乎', link:'https://www.zhihu.com/people/chenguoqiang/activities'},
      {text: 'Github', link: 'https://github.com/RobinChen95'},
    ],
    // 侧边栏配置,侧边栏组，不同（导航）页面对应不同的侧边栏
    // 以对象形式配置，前边的key为nav处的路径,后边提供一个数组作为此侧边栏中的子标题
    sidebar: {
      '/problem/': [
        // ''空字符串代表主页，显示README.md中的内容
        '',
        ['201709', '201709'],//使用数组为侧边栏起别名，前边是md名称，后边是链接显示的文字
        ['201710', '201710'],
        ],
      '/study/': [
        '',
        ['axios', '1.axios'],
        ['document', '2.document'],
        ]
    },
    // 这是嵌套标题链接，自动显示当前激活（导航）页面标题的链接，即显示深度（h1-h6的深度）
    sidebarDepth: 1
  }
}
>>>>>>> e3b4ac26aa7bdc3bb1f0338ad03e6253b5b98172
