import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import Swiper from '@/components/swiper'

Vue.use(Router)

export default new Router({
  routes: [
  	
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/swiper',
      name: 'Swiper',
      component: Swiper
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      beforeEnter(to,from,next){
            alert('路由独享守卫')
            next();
      }
    }
  ]
})
