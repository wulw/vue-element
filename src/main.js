import Vue from 'vue'
import ELementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

// eslint-disable-next-line
import axios from '@/utils/axios.config.js'

import './styles/base.scss'
import './assets/element-variables.scss'

Vue.config.productionTip = false

Vue.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

Vue.use('button-counter')

Vue.use(ELementUI)

new Vue({
  router,
  store,
  // axios,
  render: h => h(App),
}).$mount('#app')
