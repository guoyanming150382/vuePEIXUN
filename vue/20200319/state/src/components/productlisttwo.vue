<template>
	<div class="one">
		<ul>
			<!--<li v-for="item in list">{{item.id}}---{{item.name}}--{{item.price}}</li>-->
			<li v-for="item in products">{{item.id}}---{{item.name}}--{{item.price}}</li>
			
		</ul>
		<button @click="reducePrice">点击改变数据看看</button>
	</div>
</template>

<script>
	
	export default{
//		props:['list'],
		data(){
			return{
				
			}
		},
		computed:{  //计算属性=watch(监听数据发生变化)+methods(处理业务逻辑)
			products(){
				return this.$store.state.products
			}
		},
		methods:{
			reducePrice(){
//				this.list.forEach(item=>{
//					item.price-=1
//				})
				this.$store.state.products.forEach(item=>{
					item.price-=1
				})
			}
		}
	}
</script>

<style>
</style>