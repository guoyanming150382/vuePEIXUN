<template>
	<div class="one">
		<!--<ul>
			<li v-for="item in list">{{item.name}}--{{item.price}}</li>
		</ul>-->
		<ul>
			<li v-for="item in $store.state.products">{{item.name}}--{{item.price}}</li>
		</ul>
	</div>
</template>

<script>
	export default{
//		props:['list']
	}
</script>

<style>
</style>