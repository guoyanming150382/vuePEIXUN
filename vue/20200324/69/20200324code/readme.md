1 v-bind
    <router-link to="/login">登录</router-link>
    <router-link :to="login">登录</router-link>
  v-on
  	绑定事件
  	<button @click="btnclick">点击</button>
  v-for 
  	循环   循环数组，循环对象，循环数字
  {{}}   里面可以书写表达式  computed------>解决表达式问题
  data(){
  	return{}	
  }
  methods:{}
  computed:{}
  watch:{}
  beforeCreate(){}
  created(){}
  beforeMount(){}
  mounted(){}
  updated(){}
  beforeUpdate(){}
  beforeDestory(){}
  destoryed(){}
  components:{}  //注册组件
    以上的逻辑需要你利用生命周期把他们串联起来
//beforeEnter
	
	事件修饰符
	stop prevent once capture self
	自定义过滤器（全局和局部）
		Vue.filter()
		filters:{}
	自定义指令（全局和局部）
		Vue.directive()
		directives:{}
		
	自定义组件
	Vue.component()
	
	transition动画  自定义class名称
	转场动画 
	
	路由vue-router  注意路由的配置
	
	vue-resource接口请求(vue内置插件)
	
	mixin  导航守卫(全局守卫，组件内守卫，路由独享守卫)
	
	vuex状态管理
		state
		getters
		mutations
		actions
		module
		
以上环环相扣，希望大家精通每一块

安装less
	npm i less less-loader -S(--save)
	npm i less less-loader -D(--save-dev)
	安装完之后需要配置一下
	
安装scss的时候注意版本即可，版本太高，无法使用，需要安装指定版本
	npm install node-sass --save-dev
	npm install sass-loader --save-dev


webpack说明
	js  css image-------------->最终实现js。image，css...等等打包,大大减少了网络请求
	.jsx  .ts .coffee .vue------->babel插件转换成浏览器认识的东西，webpack打包一下

安装webpack
	全局安装:cnpm install webpack -g
	         cnpm install webpack-cli -g
				命令行webpack

	webpack ./src/main.js -o ./dist/boundle.js
	webpack----------------->引入webpack.config.js
	
	如果想在控制台执行webpack-dev-server这个命令,你必须把他安装在全局,而且需要在环境变量里面进行配置

ps:大家想一下webpack
      在脚手架中配置less
      在脚手架中配置scss/sass
      stylus
