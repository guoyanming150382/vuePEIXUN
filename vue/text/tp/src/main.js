// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import reset from './assets/reset.css'
import LyTab from 'ly-tab'
import axios from 'axios'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import infiniteScroll from 'vue-infinite-scroll'
import BScroll from 'better-scroll'
import echarts from 'echarts'
import { Lazyload,Loadmore,InfiniteScroll } from 'mint-ui';
import VueLazyload from 'vue-lazyload'

Vue.component(Loadmore.name, Loadmore);
Vue.prototype.$echarts = echarts
Vue.use(infiniteScroll)
Vue.use(Mint);
Vue.config.productionTip = false
Vue.use(LyTab)
Vue.use(Lazyload);
Vue.use(InfiniteScroll);

Vue.prototype.$http=axios

Vue.use(VueLazyload,{
      preload:1.3,//预加载的宽高
      loading:"http://qiniu.verydog.cn/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg",
      error:"http://qiniu.verydog.cn/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg",
      attempt:3,//尝试加载的次数
      listenEvents:['scroll','wheel','mousewheel','resize','animationend','transitionend','touchmove'], //你想让vue监听的事件
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
