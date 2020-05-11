<template>
	<div>
		<div  class="head1">
			<div class="headimg"></div>
			<div class="head-ri">
				<div class="h11"><span>品牌</span>粥仿</div>
				<div class="h22">40分钟到</div>
				<div class="h33">满38减6元</div>
			</div>
			<div class="zongji">6个</div>
		</div>
		<div class="gong">{{msg}}</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				msg:"宠辱不惊，看庭前花开花落；去留无意，望长空云卷云舒",
				timer:null
			}
		},
		methods:{
			zouma(){
				this.timer=setInterval(()=>{
					var star=this.msg.substring(0,1)
					var end=this.msg.substring(1)
					this.msg=end+star
				},500)
			}
		},
		created(){
			this.zouma()
		}
	}
</script>
<style scoped>
	.head1{
		height: 100px;
		background: brown;
		padding: 20px 20px;
		overflow: hidden;
		position: relative;
	}
	.head1>div{
		float: left;
	}
	.headimg{
		width: 60px;height: 60px;
		background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585565726117&di=b3538abe34291bea416faf5d8cb6030f&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F72%2F48%2F01200000024811136323482608624.jpg) no-repeat center center;
		background-size: 100% 100%;
	}
	.head-ri{
		padding-left: 10px;
		width: 250px;
		height: 60px;
	}
	.h11{
		font-size: 16px;
	}
	.h11 span{
		color: #fff;
		font-size: 12px;
		padding: 2px;
		background: red;
		margin-right: 10px;
	}
	.h22{
		font-size: 14px;
	}
	.h33{
		font-size: 12px;
	}
	.gong{
		height: 20px;background: red;
		color: #fff;
		text-align: center;
		font-size: 12px;line-height: 20px;
	}
	.zongji{
		position: absolute;
		right: 10px;
		bottom: 10px;
		width: 40px;height: 20px;
		line-height: 20px;
		border-radius: 5px;
		font-size: 12px;
		padding: 0px 3px;
		background: url(../assets/right.png) no-repeat 26px center;
		background-size: 10px 10px;
		background-color: #eee;
	}
</style>