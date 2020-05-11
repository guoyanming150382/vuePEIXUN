<template>
	<div class="admin">
		<h3>{{title}}</h3>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				title:'admin页面'
			}
		},
//		beforeRouteEnter:(to,from,next)=>{
//      next(vm=>{
//          alert("hello" + vm.title);
//      })
////				console.log('title:'+this.title)  //undefined 结合生命周期理解这个
//  }
	}
</script>

<style>
</style>