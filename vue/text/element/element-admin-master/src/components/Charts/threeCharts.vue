<template>
	<div class="app-container">
		<el-select v-model="value" @change="dian" placeholder="请选择">
			<el-option
			v-for="item in options"
			:key="item.id"
			:label="item.value"
			:value="item.id">
		</el-option>
	</el-select>
	<div id="main" style="width: 600px;height:400px;"></div>
</div>
</template>

<script>
	export default {
		data(){
			return{
				arr:[],
				options:[
				{
					id:1,
					value:'2018年'
				},
				{
					id:2,
					value:'2019年'
				},
				{
					id:3,
					value:'2020年'
				},
				],
				myChart:null,
				value:""
			}
		},
		methods:{
			dian1(){
				this.$http.get('http://127.0.0.1:3000/echart?id=1').then(res=>{
					console.log(res.data.data)
					this.arr=res.data.data
					this.bing()
				})
			},
			dian(){
				this.$http.get('http://127.0.0.1:3000/echart?id='+this.value).then(res=>{
					console.log(res.data.data)
					this.arr=res.data.data
					this.bing()
				})
			},
			bing(){
				if(this.myChart){
					this.myChart.clear()
					this.myChart=null
				}
				this.myChart = this.$echarts.init(document.getElementById('main'));
				this.myChart.setOption( {
					title: {
						text: '本季度统计',
						subtext: '纯属虚构',
						left: 'center'
					},
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b} : {c} ({d}%)'
					},
					legend: {
						orient: 'vertical',
						left: 'left',
						data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
					},
					series: [
					{
						name: '访问来源',
						type: 'pie',
						radius: '55%',
						center: ['50%', '60%'],
						data: this.arr,
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}
					]
				})
			}
		},
		created(){
			this.dian1()
		}
	}
</script>