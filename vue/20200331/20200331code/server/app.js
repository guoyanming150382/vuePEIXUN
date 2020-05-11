const express=require('express')
const app=new express()

app.get('/info',function(req,res){
	var data={
		name:'张三',
		age:26
	}
	res.json({code:200,data:data})
})

app.listen(3333,'127.0.0.1')
