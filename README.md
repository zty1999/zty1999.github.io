热更新问题：

package.json:

```json
修改package.json文件的调试脚本命令，将：
"scripts": {
"dev": "vuepress dev docs --temp .temp"
}
```

config 配置文件 不支持热更新

blog/.vuepress/components: 该目录下的 Vue 组件会自动注册为全局组件。
blog/.vuepress/styles：存储与样式相关的文件。
blog/.vuepress/styles/index.styl：在 CSS 文件末尾生成的自动应用的全局样式文件，其优先级高于默认样式。
blog/.vuepress/styles/palette.styl: 调色板用于覆盖默认颜色常数和设置 Stylus 的颜色常数。
blog/.vuepress/public：静态资源目录。
blog/.vuepress/enhanceApp.js：应用级别增强。
