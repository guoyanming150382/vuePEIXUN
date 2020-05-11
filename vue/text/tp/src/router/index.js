import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import First from '@/components/first'
import Second from '@/components/second'
import Third from '@/components/third'
import Fouth from '@/components/fouth'
import Axios from '@/components/axiox'
import Piker from '@/components/piker'
import Loadmore from '@/components/loadmore'
import Loadmore1 from '@/components/loadmore1'
import Loadmore2 from '@/components/loadmore2'
import Echarts from '@/components/echarts'
import Layzimg from '@/components/layzimg'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/second',
      name: 'second',
      component: Second,
    },
    {
      path: '/third',
      name: 'third',
      component: Third,
    },
    {
      path: '/fouth',
      name: 'fouth',
      component: Fouth,
    },
    {
      path: '/axios',
      name: 'axios',
      component: Axios,
    },
    {
      path: '/piker',
      name: 'piker',
      component: Piker,
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: Echarts,
    },
    {
      path: '/loadmore',
      name: 'loadmore',
      component: Loadmore,
    },
    {
      path: '/loadmore1',
      name: 'loadmore1',
      component: Loadmore1,
    },
    {
      path: '/loadmore2',
      name: 'loadmore2',
      component: Loadmore2,
    },
    {
      path: '/layzimg',
      name: 'layzimg',
      component: Layzimg,
    },
  ]
})
