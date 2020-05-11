<template>
	<div class="global">
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		mounted(){
			this.getUser()
		},
		methods:{
			getUser(){
				this.$axios.get('/api/user',{params:{
					name:'刘德华',
					age:63
				}}).then(res=>{
					console.log(res)
				})
			}
		}
	}
</script>

<style>
</style>