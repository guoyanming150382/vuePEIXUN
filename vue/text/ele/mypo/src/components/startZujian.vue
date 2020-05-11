<template>
	<div class="ypiy" :id="yangshi">
		<span v-for="item in stars"  class="start">
			<span :class="item"></span>
		</span>
	</div>
</template>
<script>
	const Quan='quan'
	const Kong='kong'
	const Ban='ban'
	export default{
		data(){
			return{
				stars:[]
			}
		},
		props:["yangshi"],
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
			console.log(this.yangshi)
		},
		mounted(){

		}
	}
</script>
<style scoped>
	/*星星*/
	.ypiy{
		width: 100px;
		display: inline-block;
	}
	.quan{
		width: 10px;
		height: 10px;
		background: url(../assets/quan.png) no-repeat ;
		background-size: 100% 100%;
	}
	.ban{
		width: 10px;
		height: 10px;
		background: url(../assets/ban.png) no-repeat ;
		background-size: 100% 100%;
	}
	.kong{
		width: 10px;
		height: 10px;
		background: url(../assets/kong.png) no-repeat ;
		background-size: 100% 100%;
	}
	#yangshiS .start>span{
		display: inline-block;
		width: 10px;height: 10px;
		margin-left: 3px;
	} 
	#yangshiN .start>span{
		display: inline-block;
		width: 14px;height: 14px;
		margin-left: 3px;
	} 
	#yangshiL .start>span{
		display: inline-block;
		width: 20px;height: 20px;
		margin-left: 3px;
	} 
</style>