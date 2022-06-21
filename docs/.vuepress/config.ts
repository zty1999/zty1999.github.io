import { defineConfig } from 'vuepress/config';

export default defineConfig({
  title: 'Spark的个人博客',
  // shouldPrefetch: () => false,
  description: "Spark's blog",
  base: '/mulean-blog/',
  /**
   * Type is `DefaultThemeConfig`
   */
  /*   themeConfig: {
    repo: 'vuejs/vuepress',
    editLinks: true,
    docsDir: 'packages/docs/docs',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' }
    ]
  }, */
  // 注入到当前页面的 HTML <head> 中的标签
  // head: [
  //   ['link', { rel: 'icon', href: '' }],  //浏览器的标签栏的网页图标  /avatar.gif
  // ],
  markdown: {
    lineNumbers: true
  },
  theme: '@vuepress/theme-blog',
  themeConfig: {
    // 请参考文档来查看所有可用的选项。
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端领域',
        link: '/posts/front-end-basic/'
        // ariaLabel: '分类',
        // items: [
        //   { text: '文章', link: '/pages/test1.md' }
        //   // { text: '日记', link: '/pages/folder2/test4.md' },
        // ]
      },
      { text: 'Vue学习', link: '/posts/vue/' },
      { text: 'Angular学习', link: '/posts/angular/' },
      { text: '小程序学习', link: '/posts/wxapp/' },
      { text: '暂未分类', link: '/posts/others/' },
      { text: '前端进击', link: '/posts/front-end-hit/' },
      { text: '全栈之路', link: '/posts/full-stack/' },
      { text: 'Github', link: 'https://github.com/zty1999' },
      { text: 'FAQ记录', link: '/faq' }
    ],
    sidebar: {
      '/front-end-basic/': [
        {
          title: '前端入门',
          collapsable: true,
          children: ['/front-end-basic/start/start-1.md']
        }
      ],
      '/vue/': [
        {
          title: '深入理解Vue.js与实战',
          path: '/vue/vue2/1.md'
        },
        {
          title: '深入理解 Vue 动画效果',
          collapsable: true,
          children: [
            '/vue/vue-transition/1-transition-component.md',
            '/vue/vue-transition/2-css-transition-animation.md',
            '/vue/vue-transition/3-javascript-hook.md',
            '/vue/vue-transition/4-multi-element.md',
            '/vue/vue-transition/5-list-and-flip.md'
          ]
        },
        {
          title: 'Webpack 实现 Vue 多页应用',
          collapsable: true,
          children: [
            '/vue/vue-multi-page/1-init-project.md',
            '/vue/vue-multi-page/2-page-utils.md',
            '/vue/vue-multi-page/3-node-packages.md',
            '/vue/vue-multi-page/4-build.md',
            '/vue/vue-multi-page/5-dev-server.md',
            '/vue/vue-multi-page/6-hot-reload.md',
            '/vue/vue-multi-page/7-source-map-and-uglifyjs.md',
            '/vue/vue-multi-page/8-certain-loaders.md'
          ]
        }
      ]
    }
  }
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@alias': 'path/to/some/dir'
  //     }
  //   }
  // }
});
