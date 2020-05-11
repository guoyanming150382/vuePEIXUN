import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Loadmore from '@/components/Loadmore'
import Xialajiazai from '@/components/Xialajiazai'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/loadmore',
      name: 'Loadmore',
      component: Loadmore
    },
    {
      path: '/xiala',
      name: 'Xialajiazai',
      component: Xialajiazai
    }
  ]
})
