<template>
	<div class="login">
		<h3>{{title}}</h3>
		<input type="text" />
		<input type="password" />
		<button @click="goIndex">点击一下啊</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				title:'登录'
			}
		},
		methods:{
			goIndex(){
				localStorage.setItem('token','123456')
				this.$router.push({
					path:'/'
				})
			}
		}
	}
</script>

<style>
</style>