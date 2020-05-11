<template>
	<div>
		<div id="myChart" :style="{width: '100%', height: '300px'}"></div>
		<button>折线</button>
		<button @click="changge">饼状</button>
		<div id="myChart1" :style="{width: '100%', height: '600px'}"></div>
	</div>
</template>
<script>
	export default {
		name: 'hello',
		data () {
			return {
				msg: 'Welcome to Your Vue.js App',
				myChart1:null
			}
		},
		mounted(){
			this.drawLine();
			this.getDATA();
		},
		methods: {
			drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
        	title: { text: '在Vue中使用echarts' },
        	tooltip: {},
        	xAxis: {
        		data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        	},
        	yAxis: {},
        	series: [{
        		name: '销量',
        		type: 'bar',
        		data: [5, 20, 36, 10, 10, 20]
        	}]
        });
    },
    getDATA(){
    	this.$http.get('http://127.0.0.1:3000/citys/').then(res=>{
    		var oppp=res.data.data
    		this.myChart1 = this.$echarts.init(document.getElementById('myChart1'))


    		var option = {
    			title: {
    				text: '折线图堆叠'
    			},
    			tooltip: {
    				trigger: 'axis'
    			},
    			legend: {
    				data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    			},
    			grid: {
    				left: '3%',
    				right: '4%',
    				bottom: '3%',
    				containLabel: true
    			},
    			toolbox: {
    				feature: {
    					saveAsImage: {}
    				}
    			},
    			xAxis: {
    				type: 'category',
    				boundaryGap: false,
    				data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    			},
    			yAxis: {
    				type: 'value'
    			},
    			series: oppp
    		};
    		this.myChart1.setOption(option);
    	})
    },
    changge(){
    	this.myChart1.clear()
    	this.myChart1=null
    	this.drows()
    },
    drows(){
    	this.$http.get('http://127.0.0.1:3000/citys/').then(res=>{
    		var ioo=res.data.data
    		var arr=[]
    		var arr1=[]
    		for(var i=0;i<ioo.length;i++){
    			arr.push(ioo[i].name)
    			arr1.push(eval("(" + `{value: ${ioo[i].value}, name: '${ioo[i].name}'}` + ")"))
    		}

    		var option = {
    			tooltip: {
    				trigger: 'item',
    				formatter: '{a} <br/>{b}: {c} ({d}%)'
    			},
    			legend: {
    				orient: 'vertical',
    				left: 10,
    				data: arr
    			},
    			series: [
    			{
    				name: '访问来源',
    				type: 'pie',
    				radius: ['50%', '70%'],
    				avoidLabelOverlap: false,
    				label: {
    					show: false,
    					position: 'center'
    				},
    				emphasis: {
    					label: {
    						show: true,
    						fontSize: '30',
    						fontWeight: 'bold'
    					}
    				},
    				labelLine: {
    					show: false
    				},
    				data:arr1
    			}
    			]
    		};
    		this.myChart1=this.$echarts.init(document.getElementById('myChart1'))
    		this.myChart1.setOption(option);
    	})
    }
}
}
</script>
<style scoped>

</style>