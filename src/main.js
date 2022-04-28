import Vue from 'vue'
import ELementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import App from './App.vue'
import router from './router'
import './router/authority'
import store from './store'

import './styles/global.scss'
Vue.use(ELementUI, { locale })

import Icon from "./components/Icon";
import "./components/Icon/style/index.scss";
Vue.use(Icon);

Vue.config.productionTip = false

Vue.component('button-counter', {
  data () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

Vue.component('blog-post', {
  props: ['title'],
  template: `<div class="title">{{ title }}<div><slot></slot></div></div>`
})

// Vue.use('button-counter')

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
