import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		products:[
			{name:"111",price:200},
			{name:"222",price:180},
			{name:"333",price:160},
			{name:"444",price:150}
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
	mutations:{
		reducePrice:(state,payload)=>{
			setTimeout(function(){
				state.products.forEach(product=>{
					product.price-=payload
				})
			},50)
		}
	},
	actions:{
		reducePrice:(context,payload)=>{
			setTimeout(function(){
				context.commit('reducePrice',payload)
			},2000)
		}
	}
})


export default store
