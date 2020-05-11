// pages/move/move.js
var app = getApp();
Page({

      /**
       * 页面的初始数据
       */
      data: {
            xianshi:'display:block',
            xianshi1:'display:none',
            inputShowed: false,
            starArr1: [],
            inTheatersUrl: [],
            comingSoonUrl: [],
            top250Url: [],
            XXarr:[],
            flag:true
      },

      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function (options) {
            var inTheatersUrl = app.globalData.doubanBase + //影集表，显示长度为3个
                  "/v2/movie/in_theaters" + "?start=0&count=3";
            var comingSoonUrl = app.globalData.doubanBase +
                  "/v2/movie/coming_soon" + "?start=0&count=3";
            var top250Url = app.globalData.doubanBase +
                  "/v2/movie/top250" + "?start=0&count=3";
                  this.getDataFen1(inTheatersUrl)
                  this.getDataFen2(comingSoonUrl)
                  this.getDataFen3(top250Url)
                  
      },
      // 请求数据1
      getDataFen1(URL) {
            var that = this
            wx.request({
                  url: URL,
                  method: 'get',
                  header: {
                        'content-type': 'application/json' // 默认值
                  },
                  success(res) {
                        console.log("电影1", res.data)
                          that.setData({
                              inTheatersUrl:res.data,
                          })
                  }
            })
      },
       // 请求数据2
       getDataFen2(URL) {
            var that = this
            wx.request({
                  url: URL,
                  method: 'get',
                  header: {
                        'content-type': 'application/json' // 默认值
                  },
                  success(res) {
                        console.log("电影2", res.data)
                          that.setData({
                              comingSoonUrl:res.data,
                          })
                  }
            })
      },
       // 请求数据3
       getDataFen3(URL) {
            var that = this
            wx.request({
                  url: URL,
                  method: 'get',
                  header: {
                        'content-type': 'application/json' // 默认值
                  },
                  success(res) {
                        console.log("电影3", res.data)
                          that.setData({
                              top250Url:res.data,
                          })
                  }
            })
      },
      // 星星组件
      // startFen(fen) {
      //       var starArr = []
      //       var zheng = Math.floor(fen)
      //       for (var i = 0; i < zheng; i++) {
      //             starArr.push("huang")
      //       }
      //       var hei = 5 - zheng;
      //       for (var i = 0; i < hei; i++) {
      //             starArr.push("hei")
      //       }
      //       this.setData({
      //             starArr1: this.data.starArr1.concat(starArr)
      //       })
      // },
      /**
       * 生命周期函数--监听页面初次渲染完成
       */
      // 取消叉xx
      cancel(){
            if(this.data.flag){
            this.setData({
                  flag:false,
                  xianshi:'display:none',
                  xianshi1:'display:block'
            })
            var that = this
            wx.request({
                  url: app.globalData.doubanBase + //影集表，显示长度为3个
                  "/v2/movie/in_theaters",
                  method: 'get',
                  header: {
                        'content-type': 'application/json' // 默认值
                  },
                  success(res) {
                        console.log("电影1", res)
                              that.setData({
                                    XXarr:res.data
                              })
                  }
            })
      }else{
            this.setData({
                  flag:true,
                  xianshi:'display:block',
                  xianshi1:'display:none'
            })
      }
      },
      jumpSon(e){
            console.log(e.currentTarget.dataset.id)
            var id=e.currentTarget.dataset.id
            wx.navigateTo({
              url: '/pages/move/move-list/move-list?id='+id,
            })
      },
      // 更多hot
      hotMore(e){
            console.log('浩特',e)
            var id=e.currentTarget.dataset.moreid
            wx.navigateTo({
              url: '/pages/move/move-more/move-more?id='+id,
            })
      },
      onReady: function () {

      },
      tiaojump(){
            wx.navigateTo({
              url: '/pages/move/searchMovie/searchMovie',
            })
      },
     
      /**
       * 生命周期函数--监听页面显示
       */
      onShow: function () {

      },

      /**
       * 生命周期函数--监听页面隐藏
       */
      onHide: function () {

      },

      /**
       * 生命周期函数--监听页面卸载
       */
      onUnload: function () {

      },

      /**
       * 页面相关事件处理函数--监听用户下拉动作
       */
      onPullDownRefresh: function () {

      },

      /**
       * 页面上拉触底事件的处理函数
       */
      onReachBottom: function () {

      },

      /**
       * 用户点击右上角分享
       */
      onShareAppMessage: function () {
            var that=this;

      }
})