// pages/move/searchMovie/searchMovie.js
var app = getApp();
Page({

      /**
       * 页面的初始数据
       */
      data: {
            searchARR:[],
            hotMove:[],
            xianShow1:'display:none',
            xianShow:'display:block',
            message:""
      },
      onBindBlur(e){
            var txt=e.detail.value
                  this.setData({
                        xianShow1:'display:block',
                        xianShow:'display:none',
                  })
                  var Url=app.globalData.doubanBase+ "/v2/movie/search?q=" + txt;
                  this.getdata(Url)
      },
      chacha(){
            this.setData({
                  xianShow1:'display:none',
                  xianShow:'display:block',
            })
      },
      getdata(url){
            var that = this
            wx.request({
                  url: url,
                  method: 'get',
                  header: {
                        'content-type': 'application/json' // 默认值
                  },
                  success(res) {
                        console.log("搜查", res)
                        if(res.data.subjects.length==0){
                              // console.log("搜索不到")
                              that.setData({
                                    searchARR:"",
                              })
                              wx.showToast({
                                    title: '未搜索到',
                                    icon: 'loading',
                                    duration: 1000
                            })
                        }else{
                              that.setData({
                                    searchARR:res.data,
                              })
                              wx.showToast({
                                    title: '搜索成功',
                                    icon: 'success',
                                    duration: 1000
                            })
                        }
                  }
            })
      },
      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function (options) {
            var url = app.globalData.doubanBase + //影集表，显示长度为3个
                  "/v2/movie/in_theaters";
            this.getdatahot(url)
      },
      getdatahot(url){
            var that = this
            wx.request({
                  url: url,
                  method: 'get',
                  header: {
                        'content-type': 'application/json' // 默认值
                  },
                  success(res) {
                        console.log("redu", res)
                        that.setData({
                              hotMove:res.data
                        })
                  }
            })
      },
      /**
       * 生命周期函数--监听页面初次渲染完成
       */
      onReady: function () {

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

      }
})