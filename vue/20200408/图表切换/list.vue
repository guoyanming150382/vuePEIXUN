<!--<template>
	<div class="app-container">
		<div id="myChart" :style="{width: '500px', height: '300px'}"></div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				shuju:[],
				dataname:'',
			}
		},
		created(){
			this.$axios.get('http://localhost:8002/tu').then(res=>{
				this.shuju = res.data.data.data
				this.drawLine();
			})
		},
		methods: {
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myChart'))
				// 绘制图表
				myChart.setOption({
					title: {
						text: '在Vue中使用echarts'
					},
					
					tooltip: {},
					xAxis: {
						data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
					},
					yAxis: {},
					series: [{
						name: '销售',
						type: 'bar',
						data:this.shuju
//						data: [5, 20, 36, 10, 10, 20]
					}]
				});
			}
		}
	}
</script>

<style scoped>

</style>-->

<!--饼状图-->
<template>
	<div class="app-container">
		<div id="bing" style="width: 400px;height: 300px;"></div>
		<!--<div id="myChart" :style="{width: '500px', height: '300px'}"></div>-->
		<button @click="bingzhuang">饼状图</button>
		<button @click="zhuzhuang">柱状图</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				charts: null,
				shuju:[]
			}
		},
		created(){
			this.$axios.get('http://localhost:8002/tu').then(res=>{
				this.shuju = res.data.data
				console.log(this.shuju)
				this.bing();
			})
		},
//		mounted() {
//			this.bing();
//		},
		methods: {
			//柱状图
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				this.charts = this.$echarts.init(document.getElementById('bing'))
				// 绘制图表
				this.charts.setOption({
					title: {
						text: '在Vue中使用echarts'
					},

					tooltip: {},
					xAxis: {
						data: this.shuju.name
					},
					yAxis: {},
					series: [{
						name: '销售',
						type: 'bar',
						data: this.shuju.data
					}]
				});
			},

			//饼状图
			bing() {
				// 基于准备好的dom，初始化echarts实例
				this.charts = this.$echarts.init(document.getElementById('bing'));
				this.charts.setOption({
					series: [{
						name: '访问来源',
						type: 'pie', // 设置图表类型为饼图
						radius: '55%', // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
//						data:[
//							{
//								value:this.shuju.data,
//								name:this.shuju.name
//							}
//						]


						data: [ // 数据数组，name 为数据项名称，value 为数据项值
							{
								value: 5,
								name: '衬衫'
							},
							{
								value: 20,
								name: '羊毛衫'
							},
							{
								value: 36,
								name: '雪纺衫'
							},
							{
								value: 10,
								name: '裤子'
							},
							{
								value: 10,
								name: '高跟鞋'
							},
							{
								value: 20,
								name: '袜子'
							}
						]
					}]
				})
			},
			//柱状图转换
			zhuzhuang() {
				this.charts.clear()
				this.charts = null
				this.drawLine()
			},
			//饼状图转换
			bingzhuang() {
				this.charts.clear()
				this.charts = null
				this.bing();
			},
		}
	}
</script>

<style scoped>

</style>