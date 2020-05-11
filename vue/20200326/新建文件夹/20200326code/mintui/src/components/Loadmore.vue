<template>
	<div class="loadmore">
		<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
		  <ul>
		    <li v-for="item in list">{{ item }}</li>
		  </ul>
		</mt-loadmore>
	</div>
</template>

<script>
	import { Loadmore } from 'mint-ui'
	export default{
			data(){
				return{
					allLoaded:false,
					list:[1,2,3,4,5,6,7,8]
				}
			},
			methods:{
				loadTop(){
					this.allLoaded = true
					console.log('loadtop')
					this.$refs.loadmore.onBottomLoaded()  //数据加载完毕
				},
				loadBottom(){
					// 初始化的时候,你需要在这里执行接口请求.
					console.log('loadBottom')
				}
			}
	}
</script>

<style>
	
</style>