// See more in https://github.com/ktquez/vuepress-theme-ktquez#configuration
const path = require('path')
const head = require('./config/head')
const themeConfig = require('./config/themeConfig')
const resolve = pathName => path.join(__dirname, pathName)

module.exports = {
  theme: 'ktquez',
  head,
  themeConfig,
  base: '/',
  title: `建筑建筑建筑工`,  
  evergreen: true,  // For modern browsers
  serviceWorker: true,
  locales: {
    '/': {
      lang: 'en'
    },
    '/pt/': {
      lang: 'pt-br'
    },
    '/es/': {
      lang: 'es'
    }
  },
  configureWebpack () {
    return {
      resolve: {
        alias: {
          '@public': resolve('./public')
        }
      }
    }
  }
}
