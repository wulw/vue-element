'use strict';

const path = require('path')
const ENV = process.env.VUE_APP_IP

module.exports = {
  // baseUrl: '/',
	publicPath: './',
  // outputDir: 'dist',
	filenameHashing: true,
	productionSourceMap: false,
	// 关闭eslint规范
	lintOnSave: false,
	runtimeCompiler: true,

  devServer: {
		host: '0.0.0.0',
		port: 18080,
    disableHostCheck: false,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
		proxy: {
			'/utils': {
				target: 'https://wulw.github.io/',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/'
				}
			},
			'/web-outpatient-office': {
				target: `http://172.16.7.58`,
				changeOrigin: true
			},
			'/web-public': {
				target: 'http://172.16.7.58',
				changeOrigin: true
			},
      '/base/': {
        target: `${ENV}/base`,
        changeOrigin: true,
        pathRewrite: {
          '^/base':	''
        }
      },
      '/web-public': {
        target: `${ENV}`,
        changeOrigin: true
      },
      '/portal/': {
        target: `${ENV}`, // 本地指向20服务
        changeOrign: true
      },
      '/oss': {
        target: `${ENV}/oss`,
        changeOrigin: true,
        pathRewrite: {
          '^/oss': ''
        }
      },
      'ngarihealth_cis': {
        target: `${ENV}/ngarihealth-encounter`,
        changeOrigin: true,
        pathRewrite: {
          '^/ngarihealth-encounter/api': '/api'
        }
      },
      'person_cis': {
        target: `${ENV}/outpat-person`,
        changeOrigin: true,
        pathRewrite: {
          '^/outpat-person/api': '/api'
        }
      },
      'app_person_mdm': {
        target: `${ENV}/person-mdm`,
        changeOrigin: true,
        pathRewrite: {
          '^/person-mdm/api': '/api'
        }
      },
      'base_mdm': {
        target: `${ENV}/mdm-base`,
        changeOrigin: true,
        pathRewrite: {
          '^/mdm-base/api': '/api'
        }
      },
      "cooperation_basic": {
        target: `${ENV}/cooperation-basic`,
        changeOrigin: true,
        pathRewrite: {
          "^/cooperation-basic/api": "/api"
        }
      },
      encounter_cis: {
        target: `${process.env.VUE_APP_IP}/outpat-encounter`,
        changeOrigin: true,
        pathRewrite: {
          '^/outpat-encounter/api': '/api'
        }
      },
      'encounter/outp_status': {
        target: `${process.env.VUE_APP_IP}/outpat-encounter`,
        changeOrigin: true,
        pathRewrite: {
          '^/outpat-encounter/api': '/api'
        }
      },
      'person_component/': {
        target: process.env.VUE_APP_IP,
        changeOrigin: true
      },
      'schedule-outpatient/': {
        target: process.env.VUE_APP_IP,
        changeOrigin: true
      },
      'finance-component/': {
        target: process.env.VUE_APP_IP,
        changeOrigin: true
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
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");

    config.externals({
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      'element-ui': 'ELEMENT'
    })
  },
  pluginOptions: {
    TerserPlugin: {
      cache: true,
      parallel: true,
      sourceMap: true,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  }
}
