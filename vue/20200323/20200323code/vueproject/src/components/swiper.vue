<template>
	<mt-swipe :auto="4000">
	  <mt-swipe-item>1</mt-swipe-item>
	  <mt-swipe-item>2</mt-swipe-item>
	  <mt-swipe-item>3</mt-swipe-item>
	</mt-swipe>
</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui'
	export default {
    
  }
</script>

<style>
	.mint-swipe-items-wrap{
		height:100px;
	}
	.mint-swipe-item{
		background: red;
	}
</style>