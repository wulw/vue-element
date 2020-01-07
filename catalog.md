# 目录结构

cli-app/
├─node_modules/    通过 npm install 安装的项目依赖包
├─public/    页面需要引入的外部静态资源（会直接拷贝到 dist 里面）
│  └─config.js    自定义配置文件
│  └─favicon.ico    网站图标
│  └─index.html    项目入口模板文件
│─src/    项目源码目录
│  └─api/    接口描述
│  └─assets/    静态资源
│       └─icons/    svg 图标
│       └─images/    图片
│  └─components/    项目相关的 vue 组件
│  └─directives/    自定义指令
│  └─lib/    引入的第三方组件
│  └─mixinx/    混入
│  └─store/    vuex
│       └─modules/    模块
│       └─index.js    vuex 配置
│  └─styles/    公共样式
│       └─font/    字体
│       └─element-variables.scss    element-ui 的自定义主题
│       └─public.scss    全局样式
│  └─utils/    工具类
│       └─request.js    封装 http 请求
│       └─requestError.js    封装 http 请求的错误处理
│  └─views/    视图
│  └─App.vue    页面入口
│  └─main.js    项目入口文件，挂载 vue 实例，加载路由、中间件等公共组件
│  └─permission.js    权限相关
│  └─router.js    路由
│─.gitignore    Git 仓库的忽略项
│─.eslintrc.js    ESLint配置
│─babel.config.js    babel 配置
│─package-lock.json    锁定安装时的包的版本
│─package.json    项目基本信息，运行脚本和相关依赖
│─README.md    项目介绍及开发指南
│─vue.config.js    webpack 配置
│
```


