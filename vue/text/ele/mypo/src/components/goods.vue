<template>
	<div>
		<!-- <ly-tab :items="arr" :options="options" @change="handleChange">
		</ly-tab>
		<div v-for="(item,index) in arr1" v-show="index==num">
			<p :id="index">{{item.name}}</p>
		</div> -->
		<!-- <div class="nativeto">
			<div @click="num=0" :class="{'active':num==0}">商品分类</div>
			<div @click="num=1" :class="{'active':num==1}">评价</div>
			<div @click="num=2" :class="{'active':num==2}">订单</div>
		</div> -->
		<div class="shopgood"></div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				// num:0,
				// selectedId: 0,
				// arr: [
				// 	{label: '商品分类'},
				// 	{label: '评价'},
				// 	{label: '商家'}
				// ],
				// options: {
				// 	activeColor: 'red'
    // 			},
    // 			arr1:[
    // 				{name:'1'},
    // 				{name:'1211'},
    // 				{name:'aasda'}
    // 			]
			}
		},
		methods:{
			// handleChange(item,index){
			// 	console.log(index)
			// 	this.num=index
			// }
		},
		mounted(){

		}
	}
</script>
<style scoped>

</style>