import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Axios from '@/components/Axios'   // 这个是引入的组件
import Gaxios from '@/components/Globalaxios'   // 这个是引入的组件
import Fengzhuang from '@/components/Fengzhuang'   // 这个是引入的组件

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/axios',
      name: 'Axios',
      component: Axios
    },
    {
      path: '/gaxios',
      name: 'Gaxios',
      component: Gaxios
    },
    {
      path: '/fengz',
      name: 'Fengzhuang',
      component: Fengzhuang
    }
  ]
})
