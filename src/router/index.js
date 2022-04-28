import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
const Home = () => import('@/views/Home.vue')

const Login = () => import('@/views/Login')

const Wedding = () => import('@/views/Wedding')

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      name: "404",
      component: () => import("@/views/404")
    },
    {
      path: '/',
      redirect: '/login'
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
        },
        {
          path: '/home/demo',
          name: 'demo',
          component: () => import('@/views/Demo')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/wedding',
      name: 'wedding',
      component: Wedding
    }
  ]
})


export default router
