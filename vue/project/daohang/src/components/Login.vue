<template>
	<div class="login">
		<h3>{{title}}</h3>
		用户名:<input type="text" /> <br />
		密码: <input type="password" />  <br />
		<input type="submit" @click="handlSubmit"/>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				title:'我是登陆页面'
			}
		},
		methods:{
			handlSubmit(){
//				1 调用服务端接口数据
//					服务端返回------>token
//          cookie,localstorage
//          header['access_token']=getToken()
				localStorage.setItem('loginstatus','yes')
				this.$router.push({
					path:'/'
				})
			}
		}
	}
</script>

<style>
</style>