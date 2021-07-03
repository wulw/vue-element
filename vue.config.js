'use strict';

const path = require('path')

module.exports = {
	publicPath: '/vue-element/',
  // baseUrl: './',
  outputDir: 'vue-element',
	productionSourceMap: true,
	// 关闭eslint规范
	lintOnSave: false,
	runtimeCompiler: true,

  devServer: {
		host: '0.0.0.0',
		port: 8080,
		proxy: {
			'/utils': {
				target: 'https://wulw.github.io/',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/'
				}
			}
		}
	},
	// configureWebpack: {
	// 	resolve: {
	// 		alias: {
	// 			'vue$': 'vue/dist/vue.esm.js',
	// 			'@': path.resolve('src')
	// 		}
	// 	}
	// },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  }
}
