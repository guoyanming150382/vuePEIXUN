1 vuex    李聪聪  4.5
    为什么要使用vuex (多组件共享数据,状态管理)
	state  仓库(里面包含数据) 
	
2 getters  马彗娟  3.0
	把state里面的数据暴漏出去,供外面方便使用
	computed:{
		...mapGetters(['userinfo'])
	}

3 watch,methods,computed    郭炎明 4.5
	watch:实时监听data里面的数据变化，从而进行处理
	methods:主要是写一些业务逻辑代码
	computed:计算属性，获取计算后的结果
	watch====methods,computed的结合
	
4 组件传参   李战威   4
	父传子  props
	子传父  this.$emit('名字',参数)
	
	
5 query,params
  this.$router.push({
  	path:'/', // name也行
  	query:{
  	
  	}
  })
  this.$router.query
  
  this.$router.push({
  	name:'/',
  	params:{
  	
  	}
  })
  this.$router.query
  
  path: '/user/:id'
	路由动态传参:
			this.$route.params.id


6 目录结构浅析
	1 index.html--------->入口html文件
	2 App.vue就是根组件,main.js是入口函数

	ps:注意nodejs和vue导入导出模块的区别
		nodejs
			module.exports 导出
			exports         导出
			require 引入
			router(yes/no)  no-----> cnpm install vue-router --save
			this.$refs 获取dom元素节点
			
			
			npm run dev    //开发环境
			npm run build  //打包




作业:
	自己写出全局导航守卫
	脚手架目录结构以及配置跨域代理和全局拦截