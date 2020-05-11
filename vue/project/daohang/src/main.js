// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'   //如果是index的话，可以省略
//import VueResource from 'vue-resource'

import request from '@/util/utils'

//Vue.use(VueResource)
Vue.prototype.$http = request

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


router.beforeEach((to,form,next)=>{
	if(localStorage.getItem('loginstatus')){
		if(to.path=='/login'){
			next('/')
		}else{
			next()
		}
	}else{
		next('/login')
	}
})
