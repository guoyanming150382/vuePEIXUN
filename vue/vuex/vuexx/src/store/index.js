import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store =new Vuex.Store({
	state:{
		name:'阿斯达',
		name1:'达斯科',
		name2:'达22222斯科',
		name3:'达斯科',
		old:96,
		wyp:[
			{name:"李静",old:"上百"},
			{name:"Mark",old:"上百"},
			{name:"李静",old:"上前"}
		],
		fly:"红色"
	},
	 // Mutation
	 mutations:{
	 	// Mutation改变store的值
	 	change(state){
	 		state.name1="小丑"
	 	},
	 	// Mutation传值
	 	send(state,payload){
	 		state.name3="传值"
	 		console.log("传值",payload)
	 		this.bigstate=payload.tianjie
	 	},
	 	styleZ(state,payload){
	 		state.name2="money"
	 		console.log("2中",payload)
	 	},
	 	//通过actions来操纵mutations
	 	muac(state,payload){
	 		state.fly="blie"
	 		console.log("muac",payload)
	 	}
	 },
	getters:{
		getInfor(state){
			return "姓名"+state.old
		},
		sendInfor(state,getters){
			return getters.getInfor+"的年龄"
		}
	},
	actions:{
		firstAXC(context,payload){
			setTimeout(()=>{
				context.commit('muac',payload)
			},1000)
		}
	}

})

export default store