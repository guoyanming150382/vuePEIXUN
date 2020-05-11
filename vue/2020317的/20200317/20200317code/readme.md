1 vue-resource   卢旭东   3.5
  vue的接口请求内置插件
  get
  	this.$http.get(url,{params:{}}).then(res=>{})
  post   application/x-www-form-urlencoded
  	this.$http.post(url,{},{enmuebleJSON:true}).then(res=>{})
  jsonp
  	this.$http.jsonp()
  	
2 jsonp原理  李战威  3
	<script>
		function xxx(){}
	</script>	
	<script src="xxxx/xxx?callback=xxx"></script>
	xxx(data)
	
3 动画 马惠娟   3.5
	<transition>
			绑定数据,显示隐藏
	</transition>	
	<style>
		.v-enter动画开始之前的状态
		.v-leave-to动画离开之后的状态
		
		.v-enter-active,动画开始进来到停止之间这个过程
    .v-leave-active动画离开到停止之间这个过程
	</style>
	
4 动画钩子函数
	
5 "item in search(keywords)"

6 组件
	1 模块化   js
	2 组件化   ui界面
	
	第一种组件写法
		Vue.component('mycom1', Vue.extend({
      template: '<h3>这是使用 Vue.extend 创建的组件</h3>'
    }))
  第二种写法
  	Vue.component('mycom1',{
      template: '<h3>这是使用 Vue.extend 创建的组件</h3>'
    })
    
    
7 组件里面的data和methods
	实例里面的data是一个对象
	组件里面的data是一个函数，而且必须有一个返回值，返回一个对象


8 组件传参
	父传子(父组件传递给子组件)
	




	ps:组件的几种创建方式
	




