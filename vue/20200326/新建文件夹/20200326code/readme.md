1、VUE 的适用场景   (数据驱动，组件化开发)
	spa指的就是脚手架开发模式
	
2、VUE 是什么
	vue.js 是一套构建用户界面的渐进式框架
	
3、Vue 父子组件间传值    (卢旭东)
	父传子: 
		props接受
	子传父亲
		this.$emit('func',...)

4 路由动态跳转
	<router-link :to="data里面的变量">
		
5 axios接口请求 
	全局封装的时候，需要注意那个全局加载框
	
6 组件传参
	子传父(this.$emit)   父传子(:title="title"   props[])
	vuex状态管理
	路由传参
	
7 注意全局引入和局部(组件)引入的区别
	在main.js里面
				import { InfiniteScroll } from 'mint-ui';
				Vue.use(InfiniteScroll);
	局部引入(在需要引入的组件里面)
				import { InfiniteScroll } from 'mint-ui';
	  
	  
	  
	  npm audit fix
	  
8 三个实战项目
	饿了吗
	抖一抖商城
	小米商城
