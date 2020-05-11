<template>
	<div class="dodo">
		<div class="top">
			<div class="nei">
				<div class="neoo">
					<div class="nei1">
						<img src="http://qiniu.verydog.cn/show.liluo.cc/normal-face.png">
					</div>
				</div>
				<span class="usernam">登录 / 注册</span>
			</div>
		</div>
		<div class="list">我的订单</div>
		<ul class="biao">
			<li>
				<img src="../assets/index.png">
				<p>代付款</p>
			</li>
			<li>
				<img src="../assets/index.png">
				<p>代收货</p>
			</li>
			<li>
				<img src="../assets/index.png">
				<p>修理中</p>
			</li>
		</ul>
		<div class="content">	
			<div class="contentSon" v-for="item in list">	
				<span></span>
				<div class="crr">{{item}}</div>
			</div>
		</div>
		<div class="content">	
			<div class="contentSon" v-for="item in list1">	
				<span></span>
				<div class="crr">{{item}}</div>
			</div>
		</div>
		<div class="content">	
			<div class="contentSon" v-for="item in list2">	
				<span></span>
				<div class="crr">{{item}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				list:["会员福利","我的优惠"],
				list1:["服务中心","小米之家"],
				list2:["设置"]
			}
		},
		methods:{

		}
	}
</script>

<style scoped>
	.dodo{
		background: #eee;
	}
	.dodo>div,ul{
		background:#fff; 
	}
	.nei{
		height: 90px;
		background: #f37d0f url(http://qiniu.verydog.cn/show.liluo.cc/bg.63c8e19.png) repeat top center;
		background-size: 100% 100%;
		padding: 16px;
		position: relative;
	}
	.neoo{
		width: 58px;
		height: 58px;
		border-radius: 50%;
		background: yellow;
		padding: 4px
	}
	.nei1{
		width: 50px;height: 50px;
		border-radius: 50%;
		background: #fff;
		overflow: hidden;
		text-align: center;
		line-height: 46px;
	}
	.nei1 img{
		width: 48px;
		height: 48px;
		vertical-align: middle;
	}
	.usernam{
		position: absolute;left: 90px;
		top: 30px;
		width: 100px;
		float: right;
	}
	.list{
		height: 40px;
		line-height: 40px;
		text-align: center;
		background: url(../assets/right.png) no-repeat center right;
		background-size: 15px 15px; 
		border-bottom: 1px solid #ddd;
	}
	.biao{
		display: flex;
		justify-content:space-around;
		padding-top: 15px;
	}
	.biao li{
		width:40px;
		height: 60px;
		font-size: 12px;
		text-align: center;
	}
	.biao li img{
		width: 25px;
		height: 25px;
	}
	.contentSon{
		line-height: 41px;
		height: 41px;
		overflow: hidden;
		margin-top: 10px;
		font-size: 14px;
	}
	.contentSon span{
		display: inline-block;
		width: 40px;
		height: 40px;
		background: url(../assets/index.png) no-repeat center center;
		background-size: 25px 25px;
		float: left;
	}
	.contentSon .crr{
		line-height: 40px;
		float: left;
		width: 80%;border-bottom: 1px solid #ddd;
		background: url(../assets/right.png) no-repeat center right;
		background-size: 20px 20px;
	}
	.contentSon:last-child .crr{
		border: none;
	}
</style>