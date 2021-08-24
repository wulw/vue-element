/*
 * @Author: wuliwei
 * @Date: 2021-08-15 21:44:05
 * @LastEditors: wuliwei
 * @LastEditTime: 2021-08-15 23:44:05
 * @Description: 任务id: xxxx;简述：xxxx
 */
module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: [
      'plugin:vue/essential',
      '@vue/airbnb',
      'eslint:recommended'
    ],
    globals:{
      winning: true,
      FastReportDesign: true
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
      'no-trailing-spaces': 'error', // 禁止行尾空格
      'linebreak-style': [0, 'error', 'windows'],
      'import/extensions': 'off',
      "comma-dangle": ["error", "never"], // 禁止行尾逗号
      "semi": ["error", "never"], // 禁止分号
      "space-before-blocks": "error", // 强制在块之前使用一致的空格
      "comma-spacing": "error", // 逗号后面加空格
      "no-mixed-spaces-and-tabs": "off",
      "import/no-unresolved": "off",
    //   'indent': [2, 2, {
    //     'SwitchCase': 1
	  //   }], //
	  'no-tabs': 'off',
	  'indent': 0
    },
    parserOptions: {
      parser: 'babel-eslint'
    }
  }
