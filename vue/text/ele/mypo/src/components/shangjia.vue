<template>
	<div class="tipl" ref="tipl">
		<div class="telangpu">	
			<div class="shang">	
				<h1>粥品香坊（回龙观）</h1>
				<div class="shang-ping">	
					<starzujian :yangshi="yangshiN"></starzujian>
					<div class="pop">({{allData.ratingCount}}) <span class="you">月销售{{allData.sellCount}}单</span></div>
				</div>
				<div :class="['shang-heart',{'shangheart1':flag}]" @click="dian">收藏</div>
				<ul class="teno">
					<li>
						<h2>起送价</h2>
						<p><span>{{allData.minPrice}}</span> 元</p>
					</li>
					<li>
						<h2>商家配送</h2>
						<p><span>{{allData.deliveryPrice}}</span> 元</p>
					</li>
					<li>
						<h2>平均配送时间</h2>
						<p><span>{{allData.deliveryTime}}</span> 分钟</p>
					</li>
				</ul>
			</div>
			<div class="tiao"></div>
			<div class="shangdi">
				<h2 class="shangdi-tite">公告与活动</h2>
				<div class="shangdi-genggai">
					<p>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</p>
				</div>
				<ul class="support">
					<li>
						<span class="jian"></span>
						<span>在线支付满28减5</span>
					</li>
					<li>
						<span class="zhe"></span>
						<span>VC无限橙果汁全场8折</span>
					</li>
					<li>
						<span class="te"></span>
						<span>单人精彩套餐</span>
					</li>
					<li>
						<span class="piao"></span>
						<span>该商家支持发票,请下单写好发票抬头</span>
					</li>
					<li>
						<span class="bao"></span>
						<span>已加入“外卖保”计划,食品安全保障</span>
					</li>
				</ul>
			</div>
			<div class="tiao"></div>
			<div class="shangdi">
				<h2 class="shangdi-tite">商家实景</h2>
				<div class="shang-two" ref="second">
					<ul class="second" ref="second1">
						<li v-for="item in imgurl" >
							<img :src="item.imgsrc" >
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import starzujian from "@/components/startZujian"
	import BScroll from 'better-scroll'
	export default{
		data(){
			return{
				yangshiN:'yangshiN',
				allData:[],
				flag:false,
				imgurl:[
				{imgsrc:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3544005106,2960177055&fm=26&gp=0.jpg"},
				{imgsrc:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3544005106,2960177055&fm=26&gp=0.jpg"},
				{imgsrc:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3544005106,2960177055&fm=26&gp=0.jpg"},
				{imgsrc:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3544005106,2960177055&fm=26&gp=0.jpg"},
				{imgsrc:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3544005106,2960177055&fm=26&gp=0.jpg"},
				{imgsrc:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3544005106,2960177055&fm=26&gp=0.jpg"},
				]
			}
		},
		methods:{
			dian(){
				this.flag=!this.flag
			},
			huan(){
				this.$nextTick(() =>{
					this.tipl = new BScroll(this.$refs.tipl, {
						click: true
					});
				})
			},
			huan1(){
				let width = this.imgurl.length * 126
				setTimeout(()=>{

				this.$refs.second1.style.width = width + 'px' // 修改滚动区域的宽度
				this.$nextTick(() => {
					if(!this.scroll) {
						this.scroll = new BScroll(this.$refs.second, {
							scrollX: true,
							scrollY: false,
						})
					}else {
						this.scroll.refresh()
					}
				})
			},500)
			}
		},
		components:{
			starzujian:starzujian
		},
		created(){
			this.$store.dispatch('getdata')
			this.huan()
			this.huan1()
			
		},
		mounted(){
			setTimeout(()=>{
				var arrData=this.$store.state.data.data.data.seller
				this.allData=arrData
				console.log("数据",arrData)
			},500)
		}
	}
</script>

<style scoped>
.tipl{
	height: 70vh;
	overflow: hidden;
}
.shang {
	position: relative;
	padding: 18px 18px 0 18px;
}
.shang>h1{
	margin-bottom: 8px;
	line-height: 14px;
	color: #07111b;
	font-size: 14px;
}
.shang-ping .pop{
	display: inline-block;
	font-size: 12px;
	color: #4d555d;
}
.you{
	margin-right: 8px;
	display: inline-block;
}
/*收藏*/
.shang-heart{
	width: 50px;
	height: 50px;
	background: red;
	position: absolute;right: 15px;
	top: 10px;
	background: url(../assets/heart1.png) no-repeat center 0px;
	background-size: 28px 28px;
	line-height: 80px;
	font-size: 12px;
	color: #07111b;
	text-align: center;
}
.shang .shangheart1{
	background: url(../assets/heart2.png) no-repeat center 0px;
	background-size: 28px 28px;
}
.teno{
	display: flex;
	padding: 18px;
}
.teno li{
	flex: 1;
	text-align: center;
	border-right: 1px solid rgba(7,17,27,0.1);
	font-size: 12px;
}
.teno li:last-child{
	border-right: none;
}
.teno li p{
	line-height: 24px;
	color: #000;
}
.teno li p span{
	font-size: 20px;
}
.teno li h2{
	color: #93999f;
}
.tiao{
	height: 15px;
	background: #f3f5f7;
	border-bottom: 1px solid rgba(7,17,27,0.1);
	border-top: 1px solid rgba(7,17,27,0.1);
}
.shangdi{    
	padding: 18px 18px 0 18px;
}
.shangdi-tite{
	margin-bottom: 8px;
	line-height: 14px;
	color: #07111b;
}
.shangdi-genggai{
	padding: 0 12px 16px 12px;
	position: relative;
}
.shangdi-genggai p{
	line-height: 24px;
	font-size: 12px;
	color: #f01414;
}
.support li{
	padding: 16px 12px;
	position: relative;
	font-size: 0;
}
.support li span:first-child{
	display: inline-block;
	width: 16px;
	height: 16px;
	vertical-align: top;
	margin-right: 6px;
	background-size: 16px 16px;
	background-repeat: no-repeat;
}
.support li span:last-child{
	line-height: 16px;
	font-size: 12px;
}
.jian{
	background-image: url(../assets/jian.png);
}
.zhe{
	background-image: url(../assets/zhe.png);
}
.te{
	background-image: url(../assets/te.png);
}
.piao{
	background-image: url(../assets/piao.png);
}
.bao{
	background-image: url(../assets/bao.png);
}
.shangdi{
	padding: 15px;
}
.shangdi .second{
	height: 90px;
}
.shang-two{
	overflow:hidden;
}
.shangdi .second li{
	width: 120px;
	height: 90px;
	display: inline-block;
	margin-right: 6px;
}
.shangdi .second li img{
	width: 100%;
	height: 100%;
}
</style>