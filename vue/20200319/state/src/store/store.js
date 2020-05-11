import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	//数据状态
	state:{
		products:[
			{id:1,name:'马云',price:200},
			{id:2,name:'李彦宏',price:150},
			{id:3,name:'周鸿祎',price:100}
		]
	},
	getters:{
		saleProducts:(state)=>{
			var saleProducts = state.products.map(product=>{
				return {
					name:"**"+product.name+"**",
					price:product.price/2
				}
			})
			return saleProducts
		}
	},
	//是vuex提供给我们的操作数据的方法
	mutations:{
		reducePrice(state,payload){   //state指的就是state
			
				state.products.forEach(item=>{
					item.price-=payload
				})
			
		}
	},
	actions:{   //异步操作的话在这里面进行
		reducePrice(context,payload){
			setTimeout(function(){
				context.commit('reducePrice',payload)
			},1000)
		}
	}
})

export default store
