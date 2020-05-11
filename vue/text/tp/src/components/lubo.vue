<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div v-for='el in arrItem' class="swiper-slide">
				<img class="img" :src="el.imgUrl">
			</div>
		</div>
		<!-- 如果需要分页器 -->
		<div class="swiper-pagination"></div>
	</div>
</template>

<script type="text/javascript">
	import Swiper from 'swiper' 
	import '../assets/swipercss.css';
	export default {
		name:'lunbo',
		data(){
			return{
				arrItem:[
				{
					name:'swiperSlide5',
					imgUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=225193914,751284870&fm=26&gp=0.jpg'
				},
				{
					name:'swiperSlide1',
					imgUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1635852385,1329179566&fm=26&gp=0.jpg'
				},
				{
					name:'swiperSlide51',
					imgUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2866123382,2888407578&fm=11&gp=0.jpg'
				},
				{
					name:'swiperSlide1111115',
					imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584944494194&di=09d7b57de0734ec9b7268be3f85c552e&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201305%2F24%2F123936nq3qmi7a3qjx2o3i.jpg'
				}
				]

			}
		},
		mounted(){  
			new Swiper('.swiper-container', {
				loop: true, 
				autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				},
				pagination: {
					el: '.swiper-pagination',
				},
			})
		}
	}
</script>
<style scoped>
.swiper-slide{
	height: 200px;
}
.swiper-slide img{
	height: 100%;
	width: 100%;
}
</style>