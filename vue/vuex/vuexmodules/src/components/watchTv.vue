<template>
	<div id="butu">
		name:{{name}}
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				first:"ler",
				last:"wang"
			}
		},
		computed:{
			name(){
				return this.first+" + "+this.last
			}
		}
	}
</script>

<style scoped>
	
</style>