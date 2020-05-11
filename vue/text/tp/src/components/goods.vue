<template>
	<div class="content">
		<div class="content-title">
			实时消息
		</div>
		<div class="swiper-container1">
			<div class="swiper-wrapper">
				<div v-for='item in lunword' class="swiper-slide">
					<p>{{item.name}}</p>
				</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
		</div>
		<ly-tab :items="arr" :options="options" @change="handleChange">
		</ly-tab>
		<div  v-for="(item,index) in imgurl" v-show="index == num">
			<div v-for="son in item" class="contebt-son">
				<img :src="son.imgs">
				<p>{{son.title}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper' 
	import '../assets/swipercss.css';
	export default{
		data(){
			return{
				lunword:[
					{name:"特朗普连任失败"},
					{name:"特朗普连任失败"},
					{name:"特朗普连任失败"},
					{name:"特朗普连任失败"}
				],
				num:0,
				imgurl:[
					[
						{imgs:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1635852385,1329179566&fm=26&gp=0.jpg',title:'熊猫1'},
						{imgs:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1635852385,1329179566&fm=26&gp=0.jpg',title:'熊猫1'},
						{imgs:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1635852385,1329179566&fm=26&gp=0.jpg',title:'熊猫1'},
						{imgs:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1635852385,1329179566&fm=26&gp=0.jpg',title:'熊猫1'},
					],
					[
						{imgs:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1635852385,1329179566&fm=26&gp=0.jpg',title:'熊猫2'},
						{imgs:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1635852385,1329179566&fm=26&gp=0.jpg',title:'熊猫2'},
						{imgs:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1635852385,1329179566&fm=26&gp=0.jpg',title:'熊猫1'},
						{imgs:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1635852385,1329179566&fm=26&gp=0.jpg',title:'熊猫1'},
					],
					[
						{imgs:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1635852385,1329179566&fm=26&gp=0.jpg',title:'熊猫3'},
						{imgs:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1635852385,1329179566&fm=26&gp=0.jpg',title:'熊猫3'},
						{imgs:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1635852385,1329179566&fm=26&gp=0.jpg',title:'熊猫1'},
						{imgs:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1635852385,1329179566&fm=26&gp=0.jpg',title:'熊猫1'},
					],
					[
						{imgs:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1635852385,1329179566&fm=26&gp=0.jpg',title:'熊猫4'},
						{imgs:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1635852385,1329179566&fm=26&gp=0.jpg',title:'熊猫4'},
						{imgs:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1635852385,1329179566&fm=26&gp=0.jpg',title:'熊猫1'},
						{imgs:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1635852385,1329179566&fm=26&gp=0.jpg',title:'熊猫1'},
					],
				],
				selectedId: 0,
				arr: [
				{label: '首页',images:'../assets/index.png'},
				{label: '推荐',images:'../assets/index.png'},
				{label: 'Android',images:'../assets/index.png'},
				{label: '前端',images:'../assets/index.png'},
				],
				options: {
					activeColor: '#1d98bd'
    			},
			}
		},
		mounted(){  
			new Swiper('.swiper-container1', {
				direction: 'vertical',
				loop: true, 
				autoplay: {
					delay: 1000,
					disableOnInteraction: false,
				},
				
			})
		},
		methods:{
			handleChange(item,index){
				console.log(index)
				this.num=index;
			}
		}
	}
</script>

<style scoped lang="less">
.content{
	padding: 5px;
	background: #eee;
	width: 100%;
	overflow: hidden;
	margin-bottom: 60px;
}
.content .content-title{
	width: 100%;
	padding: 8px 10px;
}
.content .contebt-son{
	width: 50%;
	height: 120px;
	float: left;
}
.content .contebt-son p{
	text-align: center;
}
.content .contebt-son img{
	width: 100%;
	height: 90px;
}
.swiper-container1{
	margin: 5px 0px;
	height: 30px;
	line-height: 30px;
	overflow: hidden;
	border: 1px solid #ccc;
	background:#fff;
}
.swiper-container1 .swiper-wrapper{
	height: 30px;
}
.swiper-container1 .swiper-wrapper .swiper-slide{
	height: 30px;
	text-align: center;
}
.ly-tab-item{
	width: 35px;
	display: block;
}
// 动画
.vt-enter,.vt-leave-to{
	opacity: 0;
	transform: translateX(150px);
}
.vt-enter-active,.vt-leave-active{
	transition: all 0.5s linear;
}
</style>