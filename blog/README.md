ctrl + shift + p => 输入 Project Tree => README.md 中自动生成项目结构

```
spark-press
├─ docs
│  ├─ .vuepress  用于存放全局的配置、组件、静态资源等。
│  │  ├─ components  该目录中的 Vue 组件将会被自动注册为全局组件。
│  │  ├─ config.js   配置文件的入口文件，也可以是 YML 或 toml。
│  │  ├─ enhanceApp.js  客户端应用的增强。
│  │  ├─ public  静态资源目录。
│  │  ├─ README.md
│  │  ├─ styles  用于存放样式相关的文件。
│  │  │  ├─ index.styl  将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
│  │  │  └─ palette.styl  用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
│  │  ├─ templates  存储 HTML 模板文件。
│  │  │  ├─ dev.html   用于开发环境的 HTML 模板文件。
│  │  │  └─ ssr.html   构建时基于 Vue SSR 的 HTML 模板文件。
│  │  └─ theme  用于存放本地主题。
│  │     └─ Layout.vue
│  ├─ config.md
│  ├─ guide
│  │  └─ README.md
│  └─ README.md
├─ package.json
├─ README.md
├─ test.wsd
└─ yarn.lock

```
