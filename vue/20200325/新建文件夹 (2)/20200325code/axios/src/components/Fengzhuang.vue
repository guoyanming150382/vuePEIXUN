<template>
	<div class="package">
		
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
				this.$axios.get('/user').then(res=>{
					console.log(res)
				})
			}
		}
	}
</script>

<style>
</style>