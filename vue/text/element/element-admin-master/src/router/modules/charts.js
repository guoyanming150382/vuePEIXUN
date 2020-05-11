/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: '图表',
    icon: 'chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: '柱状图', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/charts/line'),
      name: 'LineChart',
      meta: { title: '折线图', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/charts/mix-chart'),
      name: 'MixChart',
      meta: { title: '混合图', noCache: true }
    },
    {
      path: 'self-chart',
      component: () => import('@/views/charts/self-chart'),
      name: 'selfChart',
      meta: { title: '自定义图', noCache: true }
    },
    {
      path: 'threeCharts',
      component: () => import('@/views/charts/threeCharts'),
      name: 'threeCharts',
      meta: { title: '三重切换', noCache: true }
    }
  ]
}

export default chartsRouter
