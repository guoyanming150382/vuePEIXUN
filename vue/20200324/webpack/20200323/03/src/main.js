 // 这是main.js，是我们项目的入口文件
 
// 1导入 jquery
// es6中导入其他模块的方式,因为es6的语法比较高级，
// 这一行执行会报错
//我想直接输入webpack就打包一下
import $ from 'jquery'
//const $=require('jquery')

$(function(){
	$("ul li:odd").css('backgroundColor','yellow')
	$("ul li:even").css('backgroundColor',function(){
		return '#'+'3b5f6e'
	})
})
