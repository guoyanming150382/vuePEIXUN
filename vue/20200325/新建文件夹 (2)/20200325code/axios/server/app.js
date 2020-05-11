const express=require('express')
const app=new express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 

//app.all('*',function (req, res, next) {
//res.header('Access-Control-Allow-Origin', '*');
//res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
//res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//if (req.method == 'OPTIONS') {
//  res.send(200);
//}
//else {
//  next();
//}
//})


app.get('/user',function(req,res){
	console.log(req.query)
	const data={
		name:'张三',
		age:26
	}
	res.json({code:200,data:data})
})
app.post('/list',function(req,res){
	console.log(req.body)

	
	const list=[1,2,3,4,5]
	res.json({code:200,list:list})
})

app.listen(8001,'127.0.0.1')



// 18937443085