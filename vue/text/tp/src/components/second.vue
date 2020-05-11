<template>
	<div>
		<div class="ding">分类</div>
		<div class="content">

			<!--左边-->
			<div class="menu-wrapper" ref="menuWrapper">
				<ul>
					<li v-for="(food,index) in foods" @click="menuClick(index,$event)" :class="{'active': activeIndex == index}">
						{{food.title}}
						<i class="num"></i>
					</li>
				</ul>
			</div>

			<!--右边-->
			<div class="foods-wrapper" id="wrapper" ref="foodsWrapper">
				<ul>
					<li v-for="(food,index) in foods" :key="food.id" class="food-list-hook">
						<span>{{food.title}}</span>
						<div v-for="son in food.lists"  @click="menuShow(food)">
							{{son}}
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		data(){
			return{
				foods: [],
				listHeight: [],
				foodsScrollY: 0
			}
		},
		created() {
			this.$http.get('http://127.0.0.1:3000/foods/').then(res =>{
				console.log("数据",res)
				this.foods = res.data.data.city;
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
.ding{
	height: 40px;
	line-height: 40px;
	text-align: center;
	border-bottom: 1px solid #333;
	background: #f2f2f2;
}
.content{
	height: 83%;
	width: 100%;
	overflow: hidden;
	position: fixed;
	top: 40px;left: 0;
	padding-top: 10px;
}
.menu-wrapper ul li{
	height: 30px;
	line-height: 30px;
	text-align: center;
}
.menu-wrapper ul{
	padding-bottom: 10px;
}
.active{
	background: red;color: #fff;
}
.menu-wrapper{
	position: absolute;
	right: left;
	width: 20%;
	height: 100%;
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
	padding-bottom: 10px;
}
.item{
	width: 100%;
}
.food-list-hook span{
	color: red;
}
</style>