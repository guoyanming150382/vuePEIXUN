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
	res.json({code:20000,data:{token:"asdasd"}})
})

app.get('/user/info',(req,res)=>{
	res.json({code:20000,
		data:{
			roles:['editor'],
			//根据传入的roles不同，权限也不同
			name:"迷茫",
			avatar:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1191809484,1402587932&fm=26&gp=0.jpg",
			introduction:"萌宠物"
		}})

})

app.get('/tablelist',(req,res)=>{
	var id=req.query.id
	var data={
		total:3,
		list:[
		{
			id:1,
          date: '2016-05-02',
          name: '小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, 
        {
        	id:2,
          date: '2016-05-04',
          name: '王虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, 
        {
        	id:3,
          date: '2016-05-01',
          name: '王小',
          address: '上海市普陀区金沙江路 1519 弄'
        }, 
        {
        	id:4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },]
	}
	var data1={
	total:3,
		list:[
        {
			id:5,
          date: '2016-05-02',
          name: '5小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, 
        {
        	id:6,
          date: '2016-05-04',
          name: '6王虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, 
        {
        	id:7,
          date: '2016-05-01',
          name: '7王小',
          address: '上海市普陀区金沙江路 1519 弄'
        }, 
        {
        	id:8,
          date: '2016-05-03',
          name: '8王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
        ]
	}
	var data2={
		total:3,
		list:[
        {
			id:9,
          date: '2016-05-02',
          name: '9小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, 
        {
        	id:10,
          date: '2016-05-04',
          name: '10王虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, 
        {
        	id:11,
          date: '2016-05-01',
          name: '11王小',
          address: '上海市普陀区金沙江路 1519 弄'
        }, 
        {
        	id:12,
          date: '2016-05-03',
          name: '12王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        ]
	}
	if(id==1){
		res.json({code:20000,data:data})
	}else if(id==2){
		res.json({code:20000,data:data1})
	}else if(id==3){
		res.json({code:20000,data:data2})
	}
	
})



app.post('/vue-element-admin/user/logout',(req,res)=>{
	console.log(req.body)
	res.json({code:20000,data:{token:"asdasd"}})
})



// echarts

app.get('/echarts',(req,res)=>{

	var data={
		name:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋"],
		number:[5,20,36,10,10],
	}

	res.json({code:200,data:data})
})

// 三种
app.get('/echart',(req,res)=>{

	var id=req.query.id
	
    	console.log(id)
	var data1=[
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'},
        {value: 1548, name: '搜索引擎'}
    ]
    var data2=[
    	{value: 205, name: '直接访问'},
        {value: 110, name: '邮件营销'},
        {value: 334, name: '联盟广告'},
        {value: 235, name: '视频广告'},
        {value: 348, name: '搜索引擎'}
    ]
    var data3=[
    	{value: 1205, name: '直接访问'},
        {value: 2110, name: '邮件营销'},
        {value: 334, name: '联盟广告'},
        {value: 4235, name: '视频广告'},
        {value: 5348, name: '搜索引擎'}
    ]

    if(id==1){
    	res.json({code:200,data:data1})
    }else if(id==2){
    	res.json({code:200,data:data2})
    }else if(id==3){
    	res.json({code:200,data:data3})
    }

})

app.listen(3000,'127.0.0.1')