
<template>
	<div class="app-container">
		<div id="myChart" :style="{width: '500px', height: '300px'}"></div>
		<button @click="bing">饼状图</button>
		<button @click="zhe">折线图</button>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				myChart:null,
				arr:[]
			}
		},
		mounted(){
			
		},
		created(){
			this.getData()
		},
		methods: {
			getData(){
				this.$http.get('http://127.0.0.1:3000/echarts').then(res=>{
					console.log(res.data.data)
					this.arr=res.data.data
					this.drawLine()
				})
			},
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				this.myChart = this.$echarts.init(document.getElementById('myChart'))
				// 绘制图表
				this.myChart.setOption({
					title: {
						text: '在Vue中使用echarts'
					},
					
					tooltip: {},
					xAxis: {
						data:this.arr.name
					},
					yAxis: {},
					series: [{
						name: '销售',
						type: 'bar',
						data: this.arr.number
					}]
				});
			},
			drawzhu(){
				this.myChart=this.$echarts.init(document.getElementById('myChart'))
				this.myChart.setOption({
					backgroundColor: '#2c343c',

					title: {
						text: 'Customized Pie',
						left: 'center',
						top: 20,
						textStyle: {
							color: '#ccc'
						}
					},

					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b} : {c} ({d}%)'
					},

					visualMap: {
						show: false,
						min: 80,
						max: 600,
						inRange: {
							colorLightness: [0, 1]
						}
					},
					series: [
					{
						name: '访问来源',
						type: 'pie',
						radius: '55%',
						center: ['50%', '50%'],
						data: [
						{value: 335, name: '直接访问'},
						{value: 310, name: '邮件营销'},
						{value: 274, name: '联盟广告'},
						{value: 235, name: '视频广告'},
						{value: 400, name: '搜索引擎'}
						].sort(function (a, b) { return a.value - b.value; }),
						roseType: 'radius',
						label: {
							color: 'rgba(255, 255, 255, 0.3)'
						},
						labelLine: {
							lineStyle: {
								color: 'rgba(255, 255, 255, 0.3)'
							},
							smooth: 0.2,
							length: 10,
							length2: 20
						},
						itemStyle: {
							color: '#c23531',
							shadowBlur: 200,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						},

						animationType: 'scale',
						animationEasing: 'elasticOut',
						animationDelay: function (idx) {
							return Math.random() * 200;
						}
					}
					]

				})
			},
			bing(){
				this.myChart.clear()
				this.myChart=null;
				this.drawzhu()
			},
			zhe(){
				this.myChart.clear()
				this.myChart=null;
				this.drawLine()
			},
		}
	}
</script>

<style scoped>

</style>

