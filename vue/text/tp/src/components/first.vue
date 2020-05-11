<template>
	<div>
			
		<div class="first">
			<router-link to="/"><img src="../assets/index.png">首页</router-link>
			<router-link to="/second"><img src="../assets/index.png">分类</router-link>
			<router-link to="/third"><img src="../assets/index.png">商品</router-link>
			<router-link to="/fouth"><img src="../assets/index.png">我的</router-link>
			
		</div>
	</div>
</template>

<script>
	export default {
		name:'first',
		data(){
			return{
				
}
},

}
</script>
<style scoped>
.first{
	height: 50px;
	width: 100%;
	position: fixed;
	bottom: 0px;
	left: 0;
	background: #ccc;
	z-index: 999;
}
.first a{
	text-decoration: none;
	display: inline-block;
	width: 24%;
	text-align: center;
	font-size: 12px;
}
.first a img{
	display: block;
	width: 30px;
	height: 30px;
	margin:0px auto;
}

</style>