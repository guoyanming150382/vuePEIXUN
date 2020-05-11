2 每次都得webpack ./src/main.js -o ./dist/boundle.js
3 上面的很繁琐，我想值使用webpack把文件打包,我不想指定
     打包的入口文件和出口文件
     
     
4 我每次修改代码之后都得webpack执行以下
    使用webpack-dev-server这个工具来实现自动打包编译的功能
	1 npm install webpack-dev-server -D安装
	2  安装完毕后使用方法和webpack命令的用法一样
	  webpack-dev-server命令配置成脚本
	3  我们是在项目本地安装的，所以不能把他当作脚本命令在控制台使用
	    只有安装到全局的才能执行
	4 webpack-dev-server要求我们本地要安装webpack 和webpack-cli
	  安装webpack和webpack-cli
	  cnpm install webpack -D
	  cnpm install webpack-cli -D
	5 localhost:8080/boundle.js
	  boundle.js并没有存放到实际的物理磁盘中，而是在内存之中
	6 webpack-dev-server以一种虚拟的形式托管到了项目的根目录中，我们在项目跟目中根本找不到
		和dist node_modules是平级的关系,叫做boundle.js
		
  7 我们准备打包完之后自动打开浏览器
  	webpack-dev-server --open --port 3333 --contentBase src --hot
  	--hot无刷新浏览器重载，--hot的作用是只把修改的地方打个补丁，也就是只修改需要修改的地方
  	
	8 webpackdevserver配置到webpack.config.js中
	
	9  把html也放进到内存中
		当引入html-webpack-plugin后，我们不再需要手动引入boundle.js了