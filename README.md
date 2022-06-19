热更新问题：

package.json:

```json
修改package.json文件的调试脚本命令，将：
"scripts": {
"dev": "vuepress dev docs --temp .temp"
}
```

config 配置文件 不支持热更新

---

home: true
heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:

- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue 驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
  footer: MIT Licensed | Copyright © 2018-present Evan You

---

::: slot footer
MIT Licensed | Copyright © 2018-present [Evan You](https://github.com/yyx990803)
:::

blog/.vuepress/components: 该目录下的 Vue 组件会自动注册为全局组件。
blog/.vuepress/styles：存储与样式相关的文件。
blog/.vuepress/styles/index.styl：在 CSS 文件末尾生成的自动应用的全局样式文件，其优先级高于默认样式。
blog/.vuepress/styles/palette.styl: 调色板用于覆盖默认颜色常数和设置 Stylus 的颜色常数。
blog/.vuepress/public：静态资源目录。
blog/.vuepress/enhanceApp.js：应用级别增强。
