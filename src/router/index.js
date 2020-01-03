import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
const Home = () => import('@/views/Home.vue')

const Login = () => import('@/views/Login')

Vue.use(Router)

const route = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
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
      redirect: '/data/view',
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
        },
        {
          path: '/data/view',
          name: 'view',
          component: () => import('@/views/data/View')
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
