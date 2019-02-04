module.exports = {
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
