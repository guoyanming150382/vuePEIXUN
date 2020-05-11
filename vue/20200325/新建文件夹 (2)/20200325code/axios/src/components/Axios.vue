<template>
	<div class="test">
		
	</div>
</template>

<script>
	import axios from 'axios'  //引号里面的是你安装的模块,前面的axios是自定义的名字
	export default{
		data(){
			return{
				
			}
		},
		created(){
			this.postList()
		},
		mounted(){
			
		},
		methods:{
			getUser(){
				axios.get('/api/user',{params:{
					name:'刘德华',
					age:63
				}}).then(res=>{
					console.log(res)
				})
			},
			postList(){
				axios.post('/api/list',{
					type:1,
					code:2001
				}).then(res=>{
					console.log(res)
				})
			}
		}
	}
</script>

<style>
</style>