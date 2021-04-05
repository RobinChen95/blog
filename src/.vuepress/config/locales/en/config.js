const ads = require('./ads')

module.exports = {
  languages: {
    label: '中文',
    shortname: 'CN'
  },
  translation: {
    news_title: 'Receive our articles, videos and more directly in your inbox and stay up to date.',
  },
  ads,
  logo: {
    name: 'ktquez-play-logo',
    ext: 'png',
    alt: 'Logo in 3 colors in play format'
  },
  share: {
    facebookCaption: '',
    twitterVia: '',
  },
  newsletter: {
    provider: 'mailchimp',
    action: ''
  },
  copy: `京ICP备19001126号-2`,
  footer: {
    nav1: {
      title: '关于我',
      items: [
        {
          label: 'ABOUT',
          path: '/about/'
        },
        {
          label: 'CATEGORIES',
          path: '/categories/'
        },
        {
          label: 'CONTACT',
          path: '/contact/'
        }
      ]
    },
    nav2: {
      title: '备案号',
      items: [
        {
          label: '京ICP备19001126号-2',
          link: 'https://beian.miit.gov.cn/'
        },
        {
          label: '工信部查询链接',
          link: 'https://beian.miit.gov.cn/'
        },
      ]
    }
  },
  social: [
    {
      name: 'weibo',
      link: ``
    },
    {
      name: 'github',
      link: `https://www.github.com/RobinChen95`
    }
  ]
}
