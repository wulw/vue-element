import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from './components/HelloWorld'
const Home = () => import('@/views/Home.vue')

const Login = () => import('@/views/Login')

Vue.use(Router)

const route = new Router({
  mode: 'history',
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
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})


export default route
