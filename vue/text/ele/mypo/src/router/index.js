import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/headera'
import Goods from '@/components/goods'
import Shangpin from '@/components/shangpin'
import Pinglun from '@/components/pinglun'
import Shangjia from '@/components/shangjia'
import LyTab from 'ly-tab'
import BScroll from 'better-scroll'
import $ from 'jquery'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/shangpin'
		}, 
		{
			path: '/shangpin',
			component: Shangpin
		},
		{
			path: '/pinglun',
			component: Pinglun
		},
		{
			path: '/shangjia',
			component: Shangjia
		}
	]
})
