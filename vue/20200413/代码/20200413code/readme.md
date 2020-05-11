1 什么是小程序
    网址:https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%8A%80%E6%9C%AF%E5%8F%91%E5%B1%95%E5%8F%B2
    
2 公众号是早于小程序的
    公众号用户体验比较差
    native (app)
        混合
    webapp
		以上用户体验从高到低
		
3 小程序出生的北京大家查阅一下

4 WebView 
	在app里面，WebView 实际上就是一个浏览器(微信本身是一个app，既然是app就具有webview)
	
5 地址
	小程序公众号地址:https://mp.weixin.qq.com/
	
6 安装开发者工具
	
7 小程序也是mvvm模式
	
8 app里面的内容都是全局的
	app.js    全局入口函数
	app.json  全局配置(路径配置/底部导航切换/窗口外观配置)
	app.wxss
	以上三个都是全局的，样式可以影响到每个路径下,
	pages页面
		xxx目录
		xxx.js
		xxx.json
		xxx.wxml
		xxx.wxss
	util------->目录
		关于处理业务逻辑辅助的工具js
	
9 小程序最多5层(意思就是说从父亲到结束最多只有四个回退箭头)
		redirectTo和navigateTo的区别
		view和text
		image
		
10 <text data-id="{{count}}" wx:if="false">测试语法</text>
   	这个会把false当成字符串,字符串本身就是真值,所以是要显示的
		
	
	
	
