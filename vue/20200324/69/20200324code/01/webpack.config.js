const path=require('path')   //引入path模块
module.exports={
	// 指定入口文件 表示webpack打包哪个文件
	entry:path.join(__dirname,'./src/main.js'),  
	output:{  //输出文件相关配置
		path:path.join(__dirname,'./dist'), //指定输出目录
		filename:'boundle.js'  //这是指定输出的文件的名称
	}
}


// 当我们在控制台输入webpack命令执行的时候，webpack做了一下几步
// 1首先webpack发现，我们并没有通过命令的形式，给他指定入口和出口
//		webpack ./src/main.js -o ./dist/boundle.js
// 2webpack就会去项目的根目录中查找一个叫做‘webpack.config.js’的配置文件
// 3当找到配置文件后，webpack会解析执行这个配置文件