const express=require('express')
const app=new express()

//app.all('*', function(req, res, next) {
////设为指定的域
//res.header('Access-Control-Allow-Origin', "*");
//res.header("Access-Control-Allow-Headers", "X-Requested-With");
//res.header('Access-Control-Allow-Headers', 'Content-Type');
//res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//res.header('Access-Control-Allow-Credentials', true);
//res.header("X-Powered-By", ' 3.2.1');
//next();
//})

app.get('/list',function(req,res){
	var data=[
		{id:1,name:'马云'},
		{id:2,name:'马化腾'},
		{id:3,name:'周鸿祎'},
		{id:4,name:'李彦宏'}
	]
	res.json(data)
})

app.listen(8001,'127.0.0.1')
