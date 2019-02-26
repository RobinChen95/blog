module.exports = {
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
