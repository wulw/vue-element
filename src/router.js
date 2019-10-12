import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from './components/HelloWorld'
const Home = () => import('@/views/Home.vue')

Vue.use(Router)

const route = new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/helloworld',
      name: 'helloworld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})


export default route
