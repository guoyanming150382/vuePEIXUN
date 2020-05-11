1 axios前端和服务端都可以使用
	可以请求接口,第三方类库
	cnpm install axios --save
	cnpm install vue-resource --save (vue内置的第三方请求接口组件)
	
2 axios是什么东西
	axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端,可以请求接口
	联想一下vue-resource
		this.$http.get(url,{
			name:'张三',
			age:26
		})
		this.$http.post()
	如何使用axios
	1 单独的组件里面使用
		import axios from 'axios'
		axios.get
	2 全局引入
		上面的是单独组件引入，如果组件很多的话，每个组件都得引入axios，这样的话，对维护或者开发非常不利
		我能不能把他写道全局里面?
