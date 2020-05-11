<template>
	<div id="app">
		首页
		<button @click="dian">点击</button>
		<!-- 过度 -->
		<transition name="first">
			<h1 v-show="flag">Windows</h1>
		</transition>
		<!-- 动画 -->
		<button @click="chuo">点儿</button>
		<transition name="third" >
			<h1 v-show="flag1">天道</h1>
		</transition>
	</div>
</template>

<script type="text/javascript">

	import { mapState, mapActions } from 'vuex'
	export default{
		data(){
			return{
				flag:true,
				flag1:true
			}
		},
		methods:{
			dian(){
				this.flag=!this.flag
			},
			chuo(){
				this.flag1=!this.flag1
			}
		},
		computed:{
			// ...mapState('moduleA',{
			// 	state:state=>state
			// })
		},
		mounted(){
			console.log("一二三",this.$store.moduleA)
		}
	}
</script>

<style scoped>
.first-enter,.first-leave-to{
	opacity: 0;
	transform: translateX(30px);
}
.first-enter-active,.first-leave-active{
	opacity: 1;
	transition: all .3s linear;
}
.third-enter-active{
	animation: dong .5s ease-in
}
.third-leave-active{
	animation: dong .5s ease-out
}
@keyframes dong{
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1.5);
	}
	100% {
		transform: scale(1);
	}
}
</style>