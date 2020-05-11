1 组件
2 路由
	1 nodejs里面的路由是用来处理业务逻辑的
	2 vue里面的路由:实际上可以理解为路径,不同的路由对应不同的组件
	3 安装脚手架注意的问题
		install vue-router  
			//安装和不安装的区别
			1 安装了的话，不需要自行安装了，而且脚手架已经帮你搭建好了路由
			2 如果没有安装的话，你需要路由的话，需要自行安装，而且还得注入到vue实例里面
3 根组件是app
	<router-view/>是根据路由进行组件替换的
	npm速度比较慢，建议使用cnpm
	
4 程序文件执行顺序，也就是之间的依赖
	index.html----->main.js----->把app关联进来
	
5 全局导航守卫
	路由独享守卫
	  	对某些路由进行单独配置
	组件内守卫
			在某些组件里面需要自己特殊的业务逻辑
			admin实际上就是一个组件
	
6 mixin
	new Vue({
		data
		methods...
	})
	
	
	作业：掌握路由独享守卫，组件内守卫，mixin使用方法
	
	
	
  ps:
  	template里面只能由一个根标签
  	异步组件:
  	component(resolve){
        require(['@/views/home/index.vue'], resolve)
    }
   	 使用() => import('./components/Tooltip')替代前面示例中的
   	 import Tooltip from "./components/Tooltip"。
   	 Vue一旦请求渲染将会延迟加载该组件