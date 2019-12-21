import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from './components/HelloWorld'
const Home = () => import('@/views/Home.vue')

const Login = () => import('@/views/Login')

Vue.use(Router)

const route = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/helloworld',
      name: 'helloworld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect: '/home/test',
      children: [
        {
          path: '/home/test',
          name: 'test',
          component: () => import('@/views/Test')
        },
        {
          path: '/list/table',
          name: 'table',
          component: () => import('@/views/list/Table')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})


export default route
