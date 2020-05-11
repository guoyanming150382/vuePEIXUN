<template>
	<div class="app-container">
		<template>
			<!--下拉框-->
			<el-select @change="dian" v-model="value" placeholder="请选择">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<!--<button @click='dian'>点我啊</button>-->
			<div id="myChart" :style="{width: '500px', height: '300px'}"></div>
		</template>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				shuju: [],
				options: [{
					value: '1',
					label: '年'
				}, {
					value: '2',
					label: '月'
				}, {
					value: '3',
					label: '日'
				}],
				value: '',
				chart:null
			}
		},
		created() {
			this.$axios.get('http://localhost:8002/xuan?id=1').then(res => {
				this.shuju = res.data.data
				this.drawLine()
			})
		},
		methods: {
			dian() {
				this.$axios.get('http://localhost:8002/xuan?id=' + this.value).then(res => {
					this.shuju = res.data.data
					this.drawLine()
				})
			},
			drawLine() {
				//先判断是否有这个图，要是有的话直接清除
				if(this.charts){
					this.charts.clear()
					this.charts = null
				}
				// 基于准备好的dom，初始化echarts实例
				this.charts = this.$echarts.init(document.getElementById('myChart'))
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
						data: this.shuju.shu
					}]
				});
			}
		}
	}
</script>

<style scoped>

</style>