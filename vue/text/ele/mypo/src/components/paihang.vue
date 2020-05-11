<template>
	<div>
		<div class="menuList">
			<ul>
				<li v-for="(item,index) in list" :key="item.id" :class="{active:num==index}" @click="getNum(index)">
					{{item}}
				</li>
				
			</ul>
			<div class="pingping">
				只看评论内容
			</div>
		</div>
		<div class="tabCon foods-wrapper" id="wrapper" ref="menuWrapper">
			<ul class="pangline">
				<li v-for='(item,index) in tabContents' v-show="index == num" class="manping">
					<div class="manping-img">
						<img :src="item.avatar">
					</div>
					<div class="maping-word">
						<div class="one">
							<span>{{item.username}}</span>
							<span>{{item.rateTime | timer}}</span>
						</div>
						<div class="two">
							<startszu/>{{pingfen}}
						</div>
						<div class="three">{{item.text}}</div>
					</div>
				</li>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
				<div>asdad</div>
			</ul>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import startszu from '@/components/startZujian'
	export default{
		data(){
			return{
				num: 0,
				list: ["全部", "满意", "不满意"],
				tabContents: [],
				pingfen:""
			}
		},
		components:{
			startszu:startszu
		},
		filters:{
			timer:function(vule){
			 
			let d = new Date(vule);
			let batchTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(); 
			return batchTime
			}
		},
		methods:{
			getNum(index) {
				this.num = index;
			},
			getdataping(){
				this.$http.get('http://127.0.0.1:3000/food/').then(res=>{
					console.log("pinglun",res.data.data.seller.deliveryTime)
					this.tabContents=res.data.data.goods[0].foods[0].ratings
					this.pingfen=res.data.data.seller.deliveryTime
				})
			},
			huan(){
				this.$nextTick(() =>{
					this.menuWrapper = new BScroll(this.$refs.menuWrapper, {
						click: true
					});
				})
			}
		},
		created(){
			this.getdataping()
			this.huan()
		}
	}
</script>

<style scoped>
.menuList{
	padding: 20px;
}
.menuList ul{
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 30px;
	line-height: 30px;
	text-align: center;
}
.menuList ul li{
	width: 60px;
	background: rgba(0,160,220,0.2);
	font-size: 12px;
	color: #333;
	margin-right: 10px;
}
.menuList ul .active{
	background-color: #00a0dc;
	color: #fff;
}
.tabCon{
	padding: 0px 20px;
	height: 320px;
	overflow-y: scroll;
}
.pingping{
	padding: 12px 18px;
	line-height: 24px;
	border-bottom: 1px solid rgba(7,17,27,0.1);
	color: #93999f;
	font-size: 12px;
}
.wrapper .pangline{
	padding:0px 20px;
}
.pangline .manping{
	border-bottom: 1px solid #ddd;
	display: flex;
	font-size: 12px;
	padding-bottom: 10px;
}
.manping-img{
	width:23px;
	margin-right: 5px;
}
.maping-word{
	flex: 1;
}
.maping-word>div{
	margin-bottom: 5px;
}
.maping-word .one{
	display: flex;
	justify-content: space-between;
}
</style>