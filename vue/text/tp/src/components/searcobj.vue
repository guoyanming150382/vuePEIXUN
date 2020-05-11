<template>
	<div class="seatr">

		<img src="../assets/search.png" class="sou">
		<input type="text" name="word" placeholder="搜索" id="searchi">
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{

			}
		}
	}
</script>

<style scoped>
	.sou{
		width: 15px;height: 15px;
		position: absolute;
		left: 35px;top:18px;
	}
	.seatr{
		padding: 10px 30px;
		position: relative;
		background: #eee;
	}
	#searchi{
		width: 100%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		padding:0px 30px;
	}
</style>