// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import reset from './assets/reset.css'
import store from './store/store.js'
import LyTab from 'ly-tab'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(LyTab)
Vue.prototype.$http=axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
