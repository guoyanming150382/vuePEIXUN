const express=require("express")
const app=new express()



app.get('/list',(req,res)=>{
	var data=[
		{name:"刘德华",old:'56'},
		{name:"刘德华",old:'56'},
		{name:"刘德华",old:'56'},
		{name:"刘德华",old:'56'},
		{hobby:[
			[
				{funy:"吃饭"},{work:"明星"},{project:"car"},{bike:"自行车"}
			]
		]}
	]

	res.json({code:200,data:data,msg:"成功"})
})

app.listen(3000,'127.0.0.1')