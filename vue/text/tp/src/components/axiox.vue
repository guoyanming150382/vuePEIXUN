<template>
	<div>
		<button @click="getData">点击</button>
		<i class="iconfont icon-jiazaizhong-copy"></i>
		<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" 
		infinite-scroll-distance="10">
			<li v-for="item in list">{{item}}</li>
		</ul>
		<div class="boott" ref="boo">
			底部
		</div>
	</div>
</template>
<script>
	import { Toast,Indicator,InfiniteScroll } from 'mint-ui';
	export default{
		data(){
			return{
				sun:[],
				list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
				loading:false
			}
		},
		methods:{
			getData(){
				Indicator.open('Loading...');
				setTimeout(() => {
					this.$http({url:"/api/list",method:"get"}).then((res)=>{
						console.log(res)
					})
					Indicator.close();
				}, 2000);
			},
			loadMore(){
				this.loading=true;
				setTimeout(()=>{
					let last = this.list[this.list.length-1];
					for(let i=1;i<=10;i++){
						this.list.push(last+i)
					}
						this.loading=false
				},1000)
			}
		}
	}
</script>
<style scoped>
	.boott{
		color: red;
		display: none;
	}
</style>