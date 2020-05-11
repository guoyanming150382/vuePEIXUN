<template>
	<div>
		<div class="content">
			<!--左边-->
			<div class="menu-wrapper" ref="menuWrapper">
				<ul>
					<li style="background: skyblue;color: #fff">分类</li>
					<li v-for="(food,index) in foods" @click="menuClick(index,$event)" :class="[,{'active': activeIndex == index}]">
						{{food.name}}
						<i class="num"></i>
					</li>
				</ul>
			</div>

			<!--右边-->
			<div class="foods-wrapper" id="wrapper" ref="foodsWrapper">
				<ul>
					<li v-for="(food,index) in foods" :key="food.id" class="food-list-hook">
							<span class="pu">{{food.name}}</span>
							<div v-for="son in food.foods"  @click="menuShow(food)" class="foodright">
									<div class="food-xiao">
										<img :src="son.image">
									</div>
									<div class="food-title">
										<p style="font-size: 14px;">{{son.name}}</p>
										<p style="font-size: 12px;color: #93999f">{{son.description}} 
										</p>
										<p style="font-size: 12px;color: #93999f;padding: 5px 0px">月销售{{son.sellCount}} &nbsp;好评率{{son.rating}}</p>
										<div class="titit11">
											<span style="font-size: 14px;display: inline-block;color: red">￥{{son.price}}</span>
											<img class="tubiao1" src="../assets/j.png">
										</div>
									</div>
							</div>
					</li>
				</ul>
			</div>
		</div>
		<!-- 购物车 -->
			<div class="goods-foot">
				<!-- 购物车标致 -->
				<div class="goods-shop">
					<div class="goods-shopson">
						<img src="../assets/shop.png">
					</div>
				</div>
				<!-- 购买功能 -->
				<div class="goods-buyshop">￥20元起送</div>
				<div class="goods-zongall">
					<div class="good1">￥0元</div>
					<div class="good2">另需配送费￥4元</div>
				</div>
			</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import food from '../assets/data.json'
	export default{
		data(){
			return{
				foods: [],
				listHeight: [],
				foodsScrollY: 0,
				goods:food
			}
		},
		created() {
			this.$http.get('http://127.0.0.1:3000/food/').then(res =>{
				console.log(res.data.data.goods)
				this.foods = res.data.data.goods;
				this.$nextTick(() =>{
                this._initScroll(); // 初始化scroll
                this._calculateHeight(); // 初始化列表高度列表
            })
			});
		},
		computed: {
			activeIndex() {
				for (let i = 0; i < this.listHeight.length; i++) {
					let topHeight = this.listHeight[i] 
					let bottomHeight = this.listHeight[i + 1]
					if (!bottomHeight || (this.foodsScrollY >= topHeight && this.foodsScrollY < bottomHeight)) {
						return i
					}
				}
				return 0
			}
		},
		methods: {
			_initScroll() {
				this.menuWrapper = new BScroll(this.$refs.menuWrapper, {
					click: true
				});
				this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
					probeType: 3
				});
            // 监控滚动事件
            this.foodsScroll.on('scroll', (pos) =>{
            	this.foodsScrollY = Math.abs(Math.round(pos.y))
            })

        },
        _calculateHeight() {
        	let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
        	let height = 0 
        	this.listHeight.push(height) 
        	for (let i = 0; i < foodList.length; i++) {
        		let item = foodList[i] 
        		height += item.clientHeight 
        		this.listHeight.push(height)
        	}
        },
        menuClick(index, event) {
        	if (!event._constructed) {
        		return
        	}
        	this.foodsScroll.scrollTo(0, -this.listHeight[index], 300)
        }
    }
}
</script>

<style scoped>
.content{
	height: 70%;
	width: 100%;
	overflow: hidden;
	position: fixed;
	top: 150px;left: 0;
	padding-top: 10px;
}
.menu-wrapper ul li{
	height: 35px;
	line-height: 35px;
	text-align: center;
	font-size: 12px;
	display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 1;
overflow: hidden;
}
.pu{
	display: inline-block;
	width: 100%;
	padding-left: 14px;
    height: 26px;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    color: #93999f;
    background: #f3f5f7;
}
.active{
	background: red;color: #fff;
}
.menu-wrapper{
	position: absolute;
	right: left;
	width: 20%;
}
.foods-wrapper{
	position: absolute;
	right: 0;
	width: 79%;
	height: 100%;
	overflow: hidden;
}
.foods-wrapper ul{
	overflow-y: auto;
}
.item{
	width: 100%;
}
.food-list-hook span{
	color: #333;
}
.foodright{
	width: 100%;
	overflow:hidden;
	padding: 0px 10px;
}
.food-xiao{
	margin-right: 10px;
	width: 50px;
	height: 90px;
	border-radius: 2px;
	float: left;
}
.titit11{
	display: flex;
	justify-content: space-between;
}
.tubiao1{
	width: 15px;height: 15px;
}
.goods-foot{
	position: relative;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 48px;
	background: #141d27;
}
.goods-shop{
	position: absolute;top: -10px;
	left: 20px;
	width: 48px;
	height: 48px;
	background: #141d27;
	padding: 4px;
	border-radius: 50%;
}
.goods-shopson{
	width: 40px;
	height: 40px;
	margin: 0 auto;
	background-color: #2b343c;
	border-radius: 50%;
	text-align: center;
	padding-top: 9px;
}
.goods-shopson img{
	width: 22px;height: 22px;
}
.goods-buyshop{
	width: 105px;height: 100%;
	background-color: #00b43c;
	color: #fff;
	float: right;
	line-height: 48px;
	text-align: center;
	font-size: 12px;
}
.goods-zongall{
	position: relative;
	width: 160px;
	display: flex;
	color: rgba(255,255,255,0.4);
	justify-content: space-between;
	margin-left: 70px;
}
.goods-zongall .good1{
	font-size: 16px;
	height: 48px;
	line-height: 48px;
	font-weight: bolder;
	width: 50px;
}
.goods-zongall .good1:after{
	content: "";
	height:20px;
	width: 1px;
	background: rgba(255,255,255,0.4);
	position: absolute;
	top: 14px;left: 48px;
}
.goods-zongall .good2{
	font-size: 14px;
	height: 48px;
	line-height: 48px;
}
</style>