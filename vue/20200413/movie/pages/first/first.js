// pages/first/first.js
var postdata=require('../../data/data.js')
// 引入外部数据
Page({

      /**
       * 页面的初始数据
       */
      data: {
            arr:[],
            autoplay:true,
            interval:2000,
            duration:500,
            circular:true,
            indicatorDots:true,
            imgurls:[
                  "http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180701/16160ee33eb54076aed6313843a2f137.jpeg",
                  "http://img.improve-yourmemory.com/pic/9fb3ee2c39d5c2d2c9199113f482004e-2.png",
                  "http://img.improve-yourmemory.com/pic/9fb3ee2c39d5c2d2c9199113f482004e-2.png",
                  "http://img.improve-yourmemory.com/pic/9fb3ee2c39d5c2d2c9199113f482004e-2.png",
                  "http://img.improve-yourmemory.com/pic/9fb3ee2c39d5c2d2c9199113f482004e-2.png"
            ]
      },
      /**
       * 生命周期函数--监听页面加载
       */
      postSend(e){
            var postId=e.currentTarget.dataset.postid;
            console.log(postId)
            wx.navigateTo({
              url: '/pages/first/son/son?id='+postId,
            })
      },
      getData(){
            var that=this
            wx.request({
                  url:'http://127.0.0.1:3000/list',
                  method:'get',
                  header: {
                        'content-type': 'application/json' // 默认值
                      },
                      success (res) {
                        that.setData({
                              arr:res.data.data
                        })
                      }
            })
      },
      onLoad: function (options) {
            // 引入的数据
            // this.setData({
            //       postList:postdata.postList
            // })
            // console.log(this.data.postList)//打印数据
            this.getData()
          
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