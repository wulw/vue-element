import Vue from 'vue'
import ELementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import './router/authority'
import store from './store'

import './styles/global.scss'
Vue.use(ELementUI)

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

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
