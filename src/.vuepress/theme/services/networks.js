export default [
  // {
  //   active: true,
  //   name: 'fab fa-facebook',
  //   label: 'Facebook',
  //   link () {
  //     return '#'
  //   },
  //   meta (title, link, image, description, caption) {
  //     return {
  //       name: encodeURI(title),
  //       link: encodeURI(link),
  //       picture: encodeURI(image),
  //       caption: encodeURI(caption),
  //       description: encodeURI(description)
  //     }
  //   }
  // },
  // {
  //   active: true,
  //   name: 'fab fa-twitter-square',
  //   label: 'Twitter',
  //   link (title, link, image, description, via) {
  //     return encodeURI(`https://twitter.com/intent/tweet?url=${link}&amp;text=${title}&amp;via=${via}`)
  //   },
  //   target: '_blank'
  // },
  // {
  //   active: true,
  //   name: 'linkedin',
  //   label: 'linkedin',
  //   link (title, link, image, description) {
  //     return encodeURI(`https://www.linkedin.com/shareArticle?mini=true&amp;url=${link}&amp;title=${title}&amp;summary=${description}&amp;source=`)
  //   },
  //   target: '_blank'
  // },
  {
    active: true,
    name: 'fab fa-qq',
    label: 'qq',
    link (title, link) {
      return encodeURI(`https://plus.google.com/share?url=${link}`)
    },
    target: '_blank'
  },
  {
    active: true,
    name: 'fab fa-weibo',
    label: 'weibo',
    link (title, link) {
      return encodeURI(`http://service.weibo.com/share/share.php?appkey=2961492805&title=${title}&url=${link}&searchPic=false&style=simple`)
    },
    target: '_blank'
  },
  {
    active: false,
    name: 'fas fa-link',
    label: 'copy',
    link (title, link) {
      return encodeURI(`${link}`)
    },
    target: '_blank'
  },
]
