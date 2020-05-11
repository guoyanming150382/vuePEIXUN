const express=require("express")

const app=new express()
//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Methods', '*');
	res.header('Content-Type', 'application/json;charset=utf-8');
	next();
});

app.get('/foods',(req,res)=>{
	var data={
		"city":[    
		{
			"title":"A",
			"lists":[
			"阿坝","阿拉善","阿里","安康","安庆","鞍山","安顺","安阳","澳门"
			]
		},
		{
			"title":"B",
			"lists":["北京","白银","保定","宝鸡","保山","包头","巴中","北海","蚌埠","本溪","毕节","滨州","百色","亳州"
			]
		},
		{
			"title":"C",
			"lists":["重庆","成都","长沙","长春","沧州","常德","昌都","长治","常州","巢湖","潮州","承德", "郴州","赤峰","池州","崇左","楚雄","滁州","朝阳"
			]
		},
		{
			"title":"D",
			"lists":["大连","东莞","大理","丹东","大庆","大同","大兴安岭","德宏","德阳","德州","定西","迪庆","东营"
			]
		},
		{
			"title":"E",
			"lists":["鄂尔多斯","恩施","鄂州"]
		},
		{
			"title":"F",
			"lists":["福州","防城港","佛山","抚顺","抚州","阜新","阜阳"
			]

		},
		{
			"title":"G",
			"lists":["广州","桂林","贵阳","甘南","赣州","甘孜","广安","广元","贵港","果洛"]

		},
		{
			"title":"H",
			"lists":["杭州","哈尔滨","合肥","海口","呼和浩特","海北","海东","海南","海西","邯郸","汉中","鹤壁","河池","鹤岗","黑河","衡水","衡阳","河源","贺州","红河","淮安","淮北","怀化","淮南","黄冈","黄南","黄山","黄石","惠州","葫芦岛","呼伦贝尔","湖州","菏泽"
			]
		},
		{
			"title":"J",
			"lists":["济南","佳木斯","吉安","江门","焦作","嘉兴","嘉峪关","揭阳","吉林","金昌","晋城","景德镇","荆门","荆州","金华","济宁","晋中","锦州","九江",
			"酒泉"
			]

		},
		{
			"title":"K",
			"lists":["昆明","开封"]

		},
		{
			"title":"L",
			"lists":["兰州","拉萨","来宾","莱芜","廊坊","乐山","凉山","连云港","聊城","辽阳","辽源","丽江","临沧","临汾","临夏","临沂","林芝","丽水","六安","六盘水",
			"柳州","陇南","龙岩","娄底","漯河","洛阳","泸州","吕梁"
			]

		},
		{
			"title":"M",
			"lists":["马鞍山","茂名","眉山","梅州","绵阳","牡丹江"]

		},
		{
			"title":"N",
			"lists":["南京","南昌","南宁","宁波","南充","南平","南通","南阳","那曲","内江", "宁德","怒江"
			]
		},
		{
			"title":"P",
			"lists":["盘锦","攀枝花","平顶山","平凉","萍乡","莆田","濮阳"]

		},
		{
			"title":"Q",
			"lists":["青岛","黔东南","黔南","黔西南","庆阳","清远","秦皇岛","钦州","齐齐哈尔","泉州","曲靖","衢州"]

		},
		{
			"title":"R",
			"lists":["日喀则","日照"]
		},
		{
			"title":"S",
			"lists":["上海","深圳","苏州","沈阳","石家庄","三门峡","三明","三亚","商洛","商丘","上饶","山南","汕头","汕尾","韶关","绍兴","邵阳","十堰","朔州","四平","绥化","遂宁","随州","宿迁","宿州"
			]

		},
		{
			"title":"T",
			"lists":["天津","太原","泰安","泰州","台州","唐山","天水","铁岭","铜川","通化","通辽","铜陵","铜仁","台湾","W","武汉","乌鲁木齐","无锡","威海","潍坊","文山","温州","乌海","芜湖","乌兰察布","武威","梧州"
			]
		},
		{
			"title":"X",
			"lists":["厦门","西安","西宁","襄樊","湘潭","湘西","咸宁","咸阳","孝感","邢台","新乡","信阳","新余","忻州","西双版纳","宣城","许昌","徐州","香港","锡林郭勒","兴安"
			]

		},
		{
			"title":"Y",
			"lists":["银川","雅安","延安","延边","盐城","阳江","阳泉","扬州","烟台","宜宾","宜昌","宜春","营口","益阳","永州","岳阳","榆林","运城","云浮","玉树","玉溪","玉林"
			]

		},
		{
			"title":"Z",
			"lists":["杂多县","赞皇县","枣强县","枣阳市","枣庄","泽库县","增城市","曾都区","泽普县","泽州县","札达县","扎赉特旗","扎兰屯市","扎鲁特旗","扎囊县","张北县","张店区","章贡区","张家港","张家界","张家口","漳平市","漳浦县","章丘市","樟树市","张湾区","彰武县","漳县","张掖","漳州","长子县","湛河区","湛江","站前区","沾益县","诏安县","召陵区","昭平县","肇庆","昭通","赵县","昭阳区","招远市","肇源县","肇州县","柞水县","柘城县","浙江","镇安县","振安区","镇巴县","正安县","正定县","正定新区","正蓝旗","正宁县","蒸湘区","正镶白旗","正阳县","郑州","镇海区","镇江","浈江区","镇康县","镇赉县","镇平县","振兴区","镇雄县","镇原县","志丹县","治多县","芝罘区","枝江市","芷江侗族自治县","织金县","中方县","中江县","钟楼区","中牟县","中宁县","中山","中山区","钟山区","钟山县","中卫","钟祥市","中阳县","中原区","周村区","周口","周宁县","舟曲县","舟山","周至县","庄河市","诸城市","珠海","珠晖区","诸暨市","驻马店","准格尔旗","涿鹿县","卓尼","涿州市","卓资县","珠山区","竹山县","竹溪县","株洲","株洲县","淄博","子长县","淄川区","自贡","秭归县","紫金县","自流井区","资溪县","资兴市","资阳"
			]
		}
		]
	}

	res.json({code:200,data:data,msg:"成功"})
})

app.get('/food',(req,res)=>{
	var data={
		"seller": {
			"name": "粥品香坊（回龙观）",
			"description": "蜂鸟专送",
			"deliveryTime": 38,
			"score": 4.2,
			"serviceScore": 4.1,
			"foodScore": 4.3,
			"rankRate": 69.2,
			"minPrice": 20,
			"deliveryPrice": 4,
			"ratingCount": 24,
			"sellCount": 90,
			"bulletin": "粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。",
			"supports": [
			{
				"type": 0,
				"description": "在线支付满28减5"
			},
			{
				"type": 18,
				"description": "VC无限橙果汁全场8折"
			},
			{
				"type": 2,
				"description": "单人精彩套餐"
			},
			{
				"type": 3,
				"description": "该商家支持发票,请下单写好发票抬头"
			},
			{
				"type": 4,
				"description": "已加入“外卖保”计划,食品安全保障"
			}
			],
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg",
			"pics": [
			"http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180",
			"http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180",
			"http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180",
			"http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180"
			],
			"infos": [
			"该商家支持发票,请下单写好发票抬头",
			"品类:其他菜系,包子粥店",
			"北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340",
			"营业时间:10:00-20:30"
			]
		},
		"goods": [
		{
			"name": "热销榜",
			"type": -1,
			"foods": [
			{
				"name": "皮蛋瘦肉粥",
				"price": 10,
				"oldPrice": "",
				"description": "咸粥",
				"sellCount": 229,
				"rating": 100,
				"info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 0,
					"text": "很喜欢的粥",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "3******b",
					"rateTime": 1469261964000,
					"rateType": 1,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
			},
			{
				"name": "扁豆焖面",
				"price": 14,
				"oldPrice": "",
				"description": "",
				"sellCount": 188,
				"rating": 96,
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "3******b",
					"rateTime": 1469261964000,
					"rateType": 1,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"info": "",
				"icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
			},
			{
				"name": "葱花饼",
				"price": 10,
				"oldPrice": "",
				"description": "",
				"sellCount": 124,
				"rating": 85,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 1,
					"text": "没啥味道",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 1,
					"text": "很一般啊",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "3******b",
					"rateTime": 1469261964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
			},
			{
				"name": "牛肉馅饼",
				"price": 14,
				"oldPrice": "",
				"description": "",
				"sellCount": 114,
				"rating": 91,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 1,
					"text": "难吃不推荐",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "3******b",
					"rateTime": 1469261964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
			},
			{
				"name": "招牌猪肉白菜锅贴/10个",
				"price": 17,
				"oldPrice": "",
				"description": "",
				"sellCount": 101,
				"rating": 78,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 1,
					"text": "不脆,不好吃",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "3******b",
					"rateTime": 1469261964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
			},
			{
				"name": "南瓜粥",
				"price": 9,
				"oldPrice": "",
				"description": "甜粥",
				"sellCount": 91,
				"rating": 100,
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "3******b",
					"rateTime": 1469261964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
			},
			{
				"name": "红豆薏米美肤粥",
				"price": 12,
				"oldPrice": "",
				"description": "甜粥",
				"sellCount": 86,
				"rating": 100,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "3******b",
					"rateTime": 1469261964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
			},
			{
				"name": "八宝酱菜",
				"price": 4,
				"oldPrice": "",
				"description": "",
				"sellCount": 84,
				"rating": 100,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "3******b",
					"rateTime": 1469261964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
			},
			{
				"name": "红枣山药糙米粥",
				"price": 10,
				"oldPrice": "",
				"description": "",
				"sellCount": 81,
				"rating": 91,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "3******b",
					"rateTime": 1469261964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
			},
			{
				"name": "糊塌子",
				"price": 10,
				"oldPrice": "",
				"description": "",
				"sellCount": 80,
				"rating": 93,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "3******b",
					"rateTime": 1469261964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
			}
			]
		},
		{
			"name": "单人精彩套餐",
			"type": 2,
			"foods": [
			{
				"name": "红枣山药粥套餐",
				"price": 29,
				"oldPrice": 36,
				"description": "红枣山药糙米粥,素材包,爽口莴笋丝,四川泡菜或八宝酱菜,配菜可备注",
				"sellCount": 17,
				"rating": 100,
				"info": "",
				"ratings": [
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/750/h/750"
			}
			]
		},
		{
			"name": "冰爽饮品限时特惠",
			"type": 1,
			"foods": [
			{
				"name": "VC无限橙果汁",
				"price": 8,
				"oldPrice": 10,
				"description": "",
				"sellCount": 15,
				"rating": 100,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 0,
					"text": "还可以",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
			}
			]
		},
		{
			"name": "精选热菜",
			"type": -1,
			"foods": [
			{
				"name": "娃娃菜炖豆腐",
				"price": 17,
				"oldPrice": "",
				"description": "",
				"sellCount": 43,
				"rating": 92,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 0,
					"text": "菜量还可以,味道还可以",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750"
			},
			{
				"name": "手撕包菜",
				"price": 16,
				"oldPrice": "",
				"description": "",
				"sellCount": 29,
				"rating": 100,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/750/h/750"
			},
			{
				"name": "香酥黄金鱼/3条",
				"price": 11,
				"oldPrice": "",
				"description": "",
				"sellCount": 15,
				"rating": 100,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/750/h/750"
			}
			]
		},
		{
			"name": "爽口凉菜",
			"type": -1,
			"foods": [
			{
				"name": "八宝酱菜",
				"price": 4,
				"oldPrice": "",
				"description": "",
				"sellCount": 84,
				"rating": 100,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "3******b",
					"rateTime": 1469261964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
			},
			{
				"name": "拍黄瓜",
				"price": 9,
				"oldPrice": "",
				"description": "",
				"sellCount": 28,
				"rating": 100,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "3******b",
					"rateTime": 1469261964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750"
			}
			]
		},
		{
			"name": "精选套餐",
			"type": -1,
			"foods": [
			{
				"name": "红豆薏米粥套餐",
				"price": 37,
				"oldPrice": "",
				"description": "红豆薏米粥,三鲜干蒸烧卖,拍黄瓜",
				"sellCount": 3,
				"rating": 100,
				"info": "",
				"ratings": [
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750"
			},
			{
				"name": "皮蛋瘦肉粥套餐",
				"price": 31,
				"oldPrice": "",
				"description": "",
				"sellCount": 12,
				"rating": 100,
				"info": "",
				"ratings": [
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750"
			}
			]
		},
		{
			"name": "果拼果汁",
			"type": -1,
			"foods": [
			{
				"name": "蜜瓜圣女萝莉杯",
				"price": 6,
				"oldPrice": "",
				"description": "",
				"sellCount": 1,
				"rating": "",
				"info": "",
				"ratings": [],
				"icon": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750"
			},
			{
				"name": "加多宝",
				"price": 6,
				"oldPrice": "",
				"description": "",
				"sellCount": 7,
				"rating": 100,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "3******b",
					"rateTime": 1469261964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750"
			},
			{
				"name": "VC无限橙果汁",
				"price": 8,
				"oldPrice": 10,
				"description": "",
				"sellCount": 15,
				"rating": 100,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 0,
					"text": "还可以",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
			}
			]
		},
		{
			"name": "小吃主食",
			"type": -1,
			"foods": [
			{
				"name": "扁豆焖面",
				"price": 14,
				"oldPrice": "",
				"description": "",
				"sellCount": 188,
				"rating": 96,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "3******b",
					"rateTime": 1469261964000,
					"rateType": 1,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
			},
			{
				"name": "葱花饼",
				"price": 10,
				"oldPrice": "",
				"description": "",
				"sellCount": 124,
				"rating": 85,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 1,
					"text": "没啥味道",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 1,
					"text": "很一般啊",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "3******b",
					"rateTime": 1469261964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
			},
			{
				"name": "牛肉馅饼",
				"price": 14,
				"oldPrice": "",
				"description": "",
				"sellCount": 114,
				"rating": 91,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 1,
					"text": "难吃不推荐",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "3******b",
					"rateTime": 1469261964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
			},
			{
				"name": "招牌猪肉白菜锅贴/10个",
				"price": 17,
				"oldPrice": "",
				"description": "",
				"sellCount": 101,
				"rating": 78,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 1,
					"text": "不脆,不好吃",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "3******b",
					"rateTime": 1469261964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
			},
			{
				"name": "糊塌子",
				"price": 10,
				"oldPrice": "",
				"description": "",
				"sellCount": 80,
				"rating": 93,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "3******b",
					"rateTime": 1469261964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
			}
			]
		},
		{
			"name": "特色粥品",
			"type": -1,
			"foods": [
			{
				"name": "皮蛋瘦肉粥",
				"price": 10,
				"oldPrice": "",
				"description": "咸粥",
				"sellCount": 229,
				"rating": 100,
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 0,
					"text": "很喜欢的粥",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "3******b",
					"rateTime": 1469261964000,
					"rateType": 1,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
			},
			{
				"name": "南瓜粥",
				"price": 9,
				"oldPrice": "",
				"description": "甜粥",
				"sellCount": 91,
				"rating": 100,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "3******b",
					"rateTime": 1469261964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
			},
			{
				"name": "红豆薏米美肤粥",
				"price": 12,
				"oldPrice": "",
				"description": "甜粥",
				"sellCount": 86,
				"rating": 100,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "3******b",
					"rateTime": 1469261964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
			},
			{
				"name": "红枣山药糙米粥",
				"price": 10,
				"oldPrice": "",
				"description": "",
				"sellCount": 81,
				"rating": 91,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "3******b",
					"rateTime": 1469261964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
			},
			{
				"name": "鲜蔬菌菇粥",
				"price": 11,
				"oldPrice": "",
				"description": "咸粥",
				"sellCount": 56,
				"rating": 100,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": ""
				},
				{
					"username": "3******b",
					"rateTime": 1469261964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/750/h/750"
			},
			{
				"name": "田园蔬菜粥",
				"price": 10,
				"oldPrice": "",
				"description": "咸粥",
				"sellCount": 33,
				"rating": 100,
				"info": "",
				"ratings": [
				{
					"username": "3******c",
					"rateTime": 1469281964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "2******3",
					"rateTime": 1469271264000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				},
				{
					"username": "3******b",
					"rateTime": 1469261964000,
					"rateType": 0,
					"text": "",
					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
				}
				],
				"icon": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/114/h/114",
				"image": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750"
			}
			]
		}
		],
		"ratings": [
		{
			"username": "3******c",
			"rateTime": 1469281964000,
			"deliveryTime": 30,
			"score": 5,
			"rateType": 0,
			"text": "不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.",
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			"recommend": [
			"南瓜粥",
			"皮蛋瘦肉粥",
			"扁豆焖面",
			"娃娃菜炖豆腐",
			"牛肉馅饼"
			]
		},
		{
			"username": "2******3",
			"rateTime": 1469271264000,
			"deliveryTime": "",
			"score": 4,
			"rateType": 0,
			"deliveryTime": "",
			"text": "服务态度不错",
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			"recommend": [
			"扁豆焖面"
			]
		},
		{
			"username": "3******b",
			"rateTime": 1469261964000,
			"score": 3,
			"rateType": 1,
			"text": "",
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			"recommend": []
		},
		{
			"username": "1******c",
			"rateTime": 1469261864000,
			"deliveryTime": 20,
			"score": 5,
			"rateType": 0,
			"text": "良心店铺",
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			"recommend": []
		},
		{
			"username": "2******d",
			"rateTime": 1469251264000,
			"deliveryTime": 10,
			"score": 4,
			"rateType": 0,
			"text": "",
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			"recommend": []
		},
		{
			"username": "9******0",
			"rateTime": 1469241964000,
			"deliveryTime": 70,
			"score": 1,
			"rateType": 1,
			"text": "送货速度蜗牛一样",
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			"recommend": []
		},
		{
			"username": "d******c",
			"rateTime": 1469231964000,
			"deliveryTime": 30,
			"score": 5,
			"rateType": 0,
			"text": "很喜欢的粥店",
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			"recommend": []
		},
		{
			"username": "2******3",
			"rateTime": 1469221264000,
			"deliveryTime": "",
			"score": 4,
			"rateType": 0,
			"text": "量给的还可以",
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			"recommend": []
		},
		{
			"username": "3******8",
			"rateTime": 1469211964000,
			"deliveryTime": "",
			"score": 3,
			"rateType": 1,
			"text": "",
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			"recommend": []
		},
		{
			"username": "a******a",
			"rateTime": 1469201964000,
			"deliveryTime": "",
			"score": 4,
			"rateType": 0,
			"text": "孩子喜欢吃这家",
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			"recommend": [
			"南瓜粥"
			]
		},
		{
			"username": "3******3",
			"rateTime": 1469191264000,
			"deliveryTime": "",
			"score": 4,
			"rateType": 0,
			"text": "粥挺好吃的",
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			"recommend": []
		},
		{
			"username": "t******b",
			"rateTime": 1469181964000,
			"deliveryTime": "",
			"score": 3,
			"rateType": 1,
			"text": "",
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			"recommend": []
		},
		{
			"username": "f******c",
			"rateTime": 1469171964000,
			"deliveryTime": 15,
			"score": 5,
			"rateType": 0,
			"text": "送货速度很快",
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			"recommend": []
		},
		{
			"username": "k******3",
			"rateTime": 1469161264000,
			"deliveryTime": "",
			"score": 4,
			"rateType": 0,
			"text": "",
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			"recommend": []
		},
		{
			"username": "u******b",
			"rateTime": 1469151964000,
			"deliveryTime": "",
			"score": 4,
			"rateType": 0,
			"text": "下雨天给快递小哥点个赞",
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			"recommend": []
		},
		{
			"username": "s******c",
			"rateTime": 1469141964000,
			"deliveryTime": "",
			"score": 4,
			"rateType": 0,
			"text": "好",
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			"recommend": []
		},
		{
			"username": "z******3",
			"rateTime": 1469131264000,
			"deliveryTime": "",
			"score": 5,
			"rateType": 0,
			"text": "吃了还想再吃",
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			"recommend": []
		},
		{
			"username": "n******b",
			"rateTime": 1469121964000,
			"deliveryTime": "",
			"score": 3,
			"rateType": 1,
			"text": "发票开的不对",
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			"recommend": []
		},
		{
			"username": "m******c",
			"rateTime": 1469111964000,
			"deliveryTime": 30,
			"score": 5,
			"rateType": 0,
			"text": "好吃",
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			"recommend": []
		},
		{
			"username": "l******3",
			"rateTime": 1469101264000,
			"deliveryTime": 40,
			"score": 5,
			"rateType": 0,
			"text": "还不错吧",
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			"recommend": []
		},
		{
			"username": "3******o",
			"rateTime": 1469091964000,
			"deliveryTime": "",
			"score": 2,
			"rateType": 1,
			"text": "",
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			"recommend": []
		},
		{
			"username": "3******p",
			"rateTime": 1469081964000,
			"deliveryTime": "",
			"score": 4,
			"rateType": 0,
			"text": "很喜欢的粥",
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			"recommend": []
		},
		{
			"username": "o******k",
			"rateTime": 1469071264000,
			"deliveryTime": "",
			"score": 5,
			"rateType": 0,
			"text": "",
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			"recommend": []
		},
		{
			"username": "k******b",
			"rateTime": 1469061964000,
			"deliveryTime": "",
			"score": 4,
			"rateType": 0,
			"text": "",
			"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			"recommend": []
		}
		]
	}
	res.json({code:200,data:data})
})
app.listen(3000,'127.0.0.1')