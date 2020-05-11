<template>
	<div class="infinite">
		<ul
		  v-infinite-scroll="loadMore"
		  infinite-scroll-disabled="loading"
		  infinite-scroll-distance="10">
		  <li v-for="item in list">{{ item }}</li>
		</ul>
		<div v-show="showload">加载中...</div>
		<div v-show="flag">没有更多数据了...</div>
	</div>
</template>
<script>
	import { InfiniteScroll } from 'mint-ui'
	export default{
		data(){
			return{
				loading:false,
				list:[1,2,3,4,5,6,7,8,9,10],
				flag:false,
				showload:false,
			}
		},
		methods:{
			loadMore(){
				console.log(1111)  //自动会执行一次
				this.showload=true
				setTimeout(()=>{
			    let last = this.list[this.list.length - 1];
			    for (let i = 1; i <= 10; i++) {
			      this.list.push(last + i);
			      this.showload=false
			    }
			    if(this.list[this.list.length - 1]>60){
			    	this.loading = true
			    	this.flag=true
			    }
			    
		    },1000)
			}
		}
	}
</script>
<style>
	.infinite ul{
		height:200px;
		overflow-y:scroll ;
	}
</style>