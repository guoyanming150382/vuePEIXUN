1 父组件给子组件传参       马惠娟   3
	props(应用场景)
	
	
2 子组件如何向父组件传参   李聪聪  4
	this.$emit('方法名',参数)
	@方法名="函数名"
	
3 EventEmitter.on
  EventEmitter.emit
  
4 列表渲染   李战威    4
  var list=[{},{},{}]
  <ul>
  	<li v-for="item in list" :key="item.id">{{ item.name }}</li>
  </ul>	
  
	页面渲染完的时候
		
	
5 vue 操作dom
	如何获取vue里面的元素节点
	this.$refs.ref获取vue里面的元素节点
	
6 路由
	nodejs 处理不同的业务逻辑
	vue    切换不同的路径或者页面


7 上午讲的内容     卢旭东
	父子组件传参
	1 vue里面dom获取
	2  路由
	
8 获取路由里面的参数 
	nodejs:
	'/login?id=10'         //req.query.id
  path:'/login/:id'         //动态参数  req.params.id
	vue:
		'/login?id=10'      $route.query.id
		'/login/:id'        $route.params.id
		列表页------>详情页(带个id)------->详情页获取id,调用详情接口

	路由跳转传参的时候，需要注意的事项
	query传参
	params传参
	

9 watch可以监听到data里面数据的变化