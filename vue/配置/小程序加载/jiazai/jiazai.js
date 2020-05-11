// lianxi/jiazai/jiazai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 上拉加载
    list_all: [1, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
 // 上拉加载

 onReachBottom: function () {
  console.log(1111111)
  //上拉加载
  wx.showLoading({
    title: '正在加载',
  })

  var that = this

  //从接口获取数据
  wx.request({
    url: 'http://127.0.0.1:8001/list',
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function (res) {
      console.log(res.data.data)
      if (res.data.data != undefined) {
console.log('我不是undefind')
        //组合获取的数据
        for (var i = 0; i < res.data.data.length; i++) {

          that.data.list_all.push(res.data.data[i].title)
        }

        //往前台传递数据
        that.setData({
          list_all: that.data.list_all
        })

      } else if (res.data.data == undefined) {
        console.log('我是undefind')
        wx.showLoading({
          title: '加载完毕',
        })
      }


    }
  })
  setTimeout(function () {
    wx.hideLoading()
  }, 1000)
},



})