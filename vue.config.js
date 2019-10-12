'use strict'

module.exports = {
	publicPath: './',
  // baseUrl: './',
  outputDir: './dist',
	productionSourceMap: false,
	// 关闭eslint规范
  // lintOnSave: false,

  devServer: {
		host: '0.0.0.0',
		port: 8080,
		proxy: {
			'/rest': {
				target: 'http://10.1.181.90:8882'
			},
			'/Itrans': {
				target: 'http://10.1.181.90:9500'
			},
			'/utils': {
				target: 'https://wulw.github.io/'
			}
		}
  }
}
