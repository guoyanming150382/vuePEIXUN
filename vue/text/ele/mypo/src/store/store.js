import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
Vue.use(Vuex)

const store=new Vuex.Store({
	state:{
		data:[]
	},
	mutations:{
		getdata(state,res){
			state.data=res
			console.log("仓库数据",state.data)
		}
	},
	actions:{
		getdata(context){
			axios.get('http://127.0.0.1:3000/food').then(res=>{
				context.commit('getdata',res)
			})
		}
	}
})

export default store