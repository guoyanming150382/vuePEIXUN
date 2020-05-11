1 npm install vue-cli -g   //这是vue-cli 2.x
			vue init webpack projectName
2 npm uninstall vue-cli -g  //卸载
3 npm install -g @vue/cli
		vue create hello-world
			
		new Vue({
			el:'#app',
			components:{ App },
			template:'</App>'
		})
		
		new Vue({
		  el: '#app',
		  render: h => h(App) // 让我们可以通过JavaScript的方式去初始化一个模板,吧APP组件传入然后就可以去渲染 app 组件
		});
