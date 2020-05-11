const express =require('express')
const app=new express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




app.all('*', function(req, res, next) {
 
res.header("Access-Control-Allow-Origin", "*");//项目上线后改成页面的地址
 
res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
 
res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
 
next();
 
});

app.post('/user/login',(req,res)=>{
	console.log(req.body)

})
app.listen(3000,'127.0.0.1')