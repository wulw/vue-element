'use strict';

module.exports = {
	publicPath: './',
  // baseUrl: './',
  outputDir: './dist',
	productionSourceMap: false,
	// 关闭eslint规范
  lintOnSave: false,

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
  }
}
