<template>
	<div class="one">
		<ul>
			<!--<li v-for="item in $store.state.products">{{item.name}}--{{item.price}}</li>-->
			<li v-for="item in saleProducts">{{item.name}}--{{item.price}}</li>
		</ul>
		<button @click="reducePrice(3)">商品减价</button>
	</div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'
	export default{
//		props:['list']
		computed:{
//			saleProducts(){
//			 	return this.$store.getters.saleProducts
//			}
			...mapGetters(['saleProducts'])
		},
		methods:{
//			reducePrice(num){
////				this.$store.state.products.forEach(product=>{
////				 	product.price-=1
////			 	})
////					this.$store.commit('reducePrice',num)
////					this.$store.dispatch('reducePrice',num)
//					
//			}
			...mapActions(['reducePrice'])
		}
	}
</script>

<style>
</style>