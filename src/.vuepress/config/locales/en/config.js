const ads = require('./ads')

module.exports = {
  languages: {
    label: 'English',
    shortname: 'EN'
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
  copy: `2019 © La Rosa - 
        <a href="https://vuepress.vuejs.org/" rel="noopener" target="_blank">
          MADE WITH VUEPRESS
        </a>`,
  footer: {
    nav1: {
      title: 'Robin Chen\'s place',
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
      title: 'Community',
      items: [
        {
          label: 'FB GROUP',
          link: 'https://www.facebook.com/groups/MY_GROUP'
        }
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
