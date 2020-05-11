//这个配置文件实际上就是一个js文件，通过nodejs中的模块操作，向外
//暴漏了一个配置对象
const path=require('path')
module.exports={
	// 入口文件 表示webpack打包哪个文件
	entry:path.join(__dirname,'./src/main.js'),
	output:{  //输出文件相关配置
		path:path.join(__dirname,'./dist'), //指定输出目录
		filename:'boundle.js'  //这是指定输出的文件的名称
	},
	devServer:{  //这是配置devserver命令参数的第二种形式，相对来说麻烦一些
		open:true, //自动打开浏览器
		port:3000, //这是启动时候的运行端口
		contentBase:'src',  //指定托管的根目录
		hot:true  //启用热更新
	}
}


// 当我们在控制台输入webpack命令执行的时候，webpack做了一下几步
// 1首先webpack发现，我们并没有通过命令的形式，给他指定入口和出口
// 2webpack就会去项目的根目录中查找一个叫做‘webpack.config.js’的配置文件
// 3当找到配置文件后，webpack会解析执行这个配置文件