<template>
	<div class="one">
		<ul>
			<!--<li v-for="item in list">{{item.id}}---{{item.name}}--{{item.price}}</li>-->
			<li v-for="item in saleProducts">{{item.id}}---{{item.name}}--{{item.price}}</li>
			
		</ul>
		<button @click="reducePrice(4)">点击改变数据看看</button>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default{
//		props:['list'],
		data(){
			return{
				
			}
		},
		computed:{  //计算属性=watch(监听数据发生变化)+methods(处理业务逻辑)
//			products(){
//				return this.$store.state.products
//			}
//			saleProducts(){
//				return this.$store.getters.saleProducts
//			}
				...mapGetters(['saleProducts'])   //辅助方法
		},
		methods:{
			reducePrice(num){
//				this.list.forEach(item=>{
//					item.price-=1
//				})
//				this.$store.state.products.forEach(item=>{
//					item.price-=1
//				})
					// 这里面的this.$store.commit操作mutations
//					this.$store.commit('reducePrice',num)
						this.$store.dispatch('reducePrice',num)
			}
		}
	}
</script>

<style>
</style>