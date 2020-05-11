<template>
	<div>
		<div class="ping-top">
			<div class="ping-topa">
				<div class="ping-fen">
					<div ref="pingfen">{{arr.score}}</div>
					<p>综合评分</p>
					<div>高于周边商家{{arr.rankRate}}</div>
				</div>
				<div class="ping-right" >
					<div>
						<span>服务态度</span>
						<span v-for="item in stars"  class="start">
							<span :class="item"></span>
						</span>
					</div>
					<div>
						<span>高分商品</span>
						<span v-for="item in stars"  class="start">
							<span :class="item"></span>
						</span>
					</div>
					<div>
						<span>送达时间: </span>
						<span class="yuji">{{arr.deliveryTime}}分钟</span></div>
				</div>
			</div>
		</div>
		<div class="pingBTO">
			
		</div>
	</div>
</template>

<script>
	const Quan='quan'
	const Kong='kong'
	const Ban='ban'
	export default{
		data(){
			return{
				arr:[],
				stars:[]
			}
		},
		methods:{
			getdataa(){
				this.$http.get('http://127.0.0.1:3000/food/').then(res=>{
					this.arr=res.data.data.seller
					this.stars=this.statrLer(this.arr.score)
				})
			},
			// 星星类型
			statrLer(shu){
				var starArr=[]
				// 获取评分
				console.log("这个",shu)
				// 全星
				var quan=Math.floor(shu)
				for(var i=0;i<quan;i++){
					starArr.push(Quan)
				}
				// 半星
				var ban=shu-quan
				if(ban>=0.5){
					starArr.push(Ban)
				}

				var kong=5-quan
				for(var i=0;i<kong;i++){
					starArr.push(Kong)
				}

				console.log("kong1",starArr)
				return starArr
			}
		},
		created(){
			this.getdataa()
		},
		mounted(){

		}
	}
</script>
<style>
	.ping-top{
		padding: 10px;
	}
	.ping-topa{
		height: 100px;
		position: relative;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #ddd;
	}
	.ping-fen{
		margin-bottom: 6px;
	    font-size: 24px;
	    width: 138px;
	    text-align: center;
	}
	.ping-topa:after{
		content: "";
		width: 1px;
		height: 50px;
		background: #ddd;
		position: absolute;
		left: 130px;
		top: 10px;
	}
	.ping-fen div:first-child{
	    line-height: 28px;
		color: 12px;
	    color: #f90;
	}
	.ping-fen p{
	    line-height: 28px;
		font-size: 12px;
		color: #333;
	}
	.ping-fen div:last-child{
		line-height: 10px;
    font-size: 10px;
    color: #93999f;
	}
	.ping-right{
		width: 300px;
	}
	.ping-right div{
		width: 100%;
		text-align: left;
		font-size: 14px;
		margin-bottom:8px; 
		padding-left: 50px;
	}
	/*星星*/
	.quan{
		width: 20px;
		height: 20px;
		background: url(../assets/quan.png) no-repeat ;
		background-size: 100% 100%;
	}
	.ban{
		width: 20px;
		height: 20px;
		background: url(../assets/ban.png) no-repeat ;
		background-size: 100% 100%;
	}
	.kong{
		width: 20px;
		height: 20px;
		background: url(../assets/kong.png) no-repeat ;
		background-size: 100% 100%;
	}
	.start>span{
		display: inline-block;
		width: 14px;height: 14px;
		margin-left: 3px;
	} 
	.yuji{
		color: #aaa;
		font-size: 12px;
		margin-left: 3px;
	}
	/*下部*/
	.pingBTO{
		border-top: 1px solid #aaa
	}
</style>