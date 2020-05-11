<template>
	<div class="third">
		<div class="topSearch">
			<div class="left"></div>
			<div class="middle">购物车</div>
			<div class="right"></div>
		</div>
		<div class="room">购物车还是空的<span>去逛逛</span></div>
		<div class="kong"></div>
		<img class="gedang" src="http://qiniu.verydog.cn/show.liluo.cc/e95ade2750a7fde92369b416c7d3176d.jpg" alt="">
		<div class="goods" id="container">
			<div v-for="item in goods" >
				<img :src="item.imgs" v-lazy.container="item.imgs" class="tutu">
				<p>{{item.title}}</p>
				<p>{{item.des}}</p>
				<p><span>￥</span>{{item.price}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { Lazyload } from 'mint-ui';
	export default{
		data(){
			return{
				goods:[
					{imgs:"http://qiniu.verydog.cn/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg",title:"13.3 i5 独显笔记本",des:"指纹解锁 金属机身",price:"5969"},
					{imgs:"http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg",title:"13.3 i5 独显笔记本",des:"指纹解锁 金属机身",price:"5969"},
					{imgs:"http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg",title:"13.3 i5 独显笔记本",des:"指纹解锁 金属机身",price:"5969"},
					{imgs:"http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg",title:"13.3 i5 独显笔记本",des:"指纹解锁 金属机身",price:"5969"},
					{imgs:"http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg",title:"13.3 i5 独显笔记本",des:"指纹解锁 金属机身",price:"5969"},
					{imgs:"http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg",title:"13.3 i5 独显笔记本",des:"指纹解锁 金属机身",price:"5969"},
					{imgs:"http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg",title:"13.3 i5 独显笔记本",des:"指纹解锁 金属机身",price:"5969"},
					{imgs:"http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg",title:"13.3 i5 独显笔记本",des:"指纹解锁 金属机身",price:"5969"},
					{imgs:"http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg",title:"13.3 i5 独显笔记本",des:"指纹解锁 金属机身",price:"5969"},
					{imgs:"http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg",title:"13.3 i5 独显笔记本",des:"指纹解锁 金属机身",price:"5969"},
					{imgs:"http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg",title:"13.3 i5 独显笔记本",des:"指纹解锁 金属机身",price:"5969"},
					{imgs:"http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg",title:"13.3 i5 独显笔记本",des:"指纹解锁 金属机身",price:"5969"},
					{imgs:"http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg",title:"13.3 i5 独显笔记本",des:"指纹解锁 金属机身",price:"5969"},
					{imgs:"http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg",title:"13.3 i5 独显笔记本",des:"指纹解锁 金属机身",price:"5969"}
				]
			}
		},
		methods:{

		}
	}
</script>

<style scoped>
.third{
	margin-bottom: 50px;
}
	.topSearch{
		background: #ccc;
		height: 40px;
		line-height: 40px;
		display: flex;
		justify-content: space-between;
	}
	.topSearch div{
		height: 100%;
		width: 40px;
	}
	.topSearch .left{
		background: url(../assets/left.png) no-repeat center;
		background-size: 20px 20px;
	}
	.topSearch .middle{
		width: 50px;
		text-align: center;
	}
	.topSearch .right{
		background: url(../assets/search.png) no-repeat center;
		background-size: 20px 20px;
	}
	.room{
		height: 60px;
		line-height: 60px;
		text-align: center;
		background: #aaa;
	}
	.room span{
		width: 60px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 12px;
		border: 1px solid #ccc;
		display: inline-block;
		margin-left: 10px;
	}
	.kong{
		height: 15px;
		background: red;
	}
	.goods{
		overflow: hidden;
	}
	.goods div{
		width: 50%;
		float: left;
		margin-bottom: 15px;
	}
	.goods div:nth-child(odd){
		padding-right: 1px;
	}
	.goods div:nth-child(even){
		padding-left: 1px;
	}
	.goods div img[lazy=loading]{
		width: 100%;
		height: 160px;
	}
	.goods div p{
		padding-left: 5px;
	}
	.goods div p:nth-child(2){
		font-size: 14px;
	}
	.goods div p:nth-child(3){
		font-size: 12px;
		color: #aaa;
	}
	.goods div p:nth-child(4){
		color: #ea625b;
		font-size: 15px;
	}
	.goods div span{
		
		font-size: 12px;
	}
	.gedang{
		width: 100%;height: 60px;
	}
</style>