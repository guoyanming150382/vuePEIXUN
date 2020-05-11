<template>
	<div id="index-app">
		首页
		<button @click="dian">点击</button>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return{

			}
		},
		methods:{
			//页面之间传值
			dian(){
				var all={
					one:"yi",
					two:"二",
					three:"三"
				}
				this.$router.push({
					path:'/HelloWorld',
					query:{
						message:all
					}
				})
			}
		}
	}
</script>

<style scoped>
	
</style>