module.exports = {
  title: '金成博客',
  description: '金成的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '最新', link: '/'},
      {
        text: '服务端技术',
        items: [
          {
            text: 'C++',
            items: [
              {
                text: 'brpc',
                link: '/server/C++/brpc/'
              },
              {
                text: 'C++语法',
                link: '/server/C++/syntax/'
              }
            ]
          },
          {
            text: 'Lua',
            items: [
              {
                text: 'Lua语法',
                link: '/server/Lua/syntax/'
              }
            ]
          }
        ]
      },
      {
        text: '算法解析',
        link: '/algorithm/'
      },
      {text: '联系我们', link: '/contact'},
      {text: 'github', link: 'https://github.com/houjincheng1992'}      
    ],
    sidebar: 'auto',
    displayAllHeaders: true,
    sidebarDepth: 2, // 侧边栏显示2级
  }
};
