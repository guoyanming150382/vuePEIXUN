Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[],
    isImgStire:false,
    play:"/images/music/music-start.png",
    stop:"/images/music/music-stop.png",
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src:"https://sharefs.yun.kugou.com/202004141850/b68956008b3a336f1980fabc3e69b84b/G144/M02/09/10/MIcBAFvJS0WAI6upABcysQm_qgM066.mp3",
    thisId:"",
    tuCollect:""
  },
  
  // 音乐
 
  dainbtn(){
    // this.setData({
    //   isImgStire:!this.data.isImgStire
    // })
    var that=this
    if(that.data.isImgStire){
        that.setData({
          isImgStire:false
        })
        that.audioCtx.pause()
    }else{
      that.setData({
        isImgStire:true
      })
      that.audioCtx.play()
    }
  },
  // 音乐
  /**
   * 生命周期函数--监听页面加载
   */
  // 收藏
  iscollection(e){
    var that = this
    wx.getStorage({
      key:'cang',
      success(res){
        console.log('值',res.data[that.data.thisId])
        var allzhi=res.data
        var zhi=allzhi[that.data.thisId]
        zhi=!zhi
        allzhi[that.data.thisId]=zhi
        if(zhi){
          wx.showToast({
            title: '收藏成功',
            icon: 'success',
            duration: 1000
          })
        }else{
          wx.showToast({
            title: '取消收藏',
            icon: 'success',
            duration: 1000
          })
        }
        that.setData({
          tuCollect:zhi
        })
        wx.setStorageSync('cang', allzhi)
        
      }
    })
  
  },
// 判断收藏的状态
collectStatus(shun){
  var that=this
  // 判断strong中是否存在收藏数据
  var collect=wx.getStorageSync('cang')
  if(collect){
    if(!collect[shun]){
      collect[shun]=false
      wx.setStorageSync('cang', collect)
    }else{
    var pageCollect=collect[shun]
    that.setData({
      tuCollect:pageCollect
    })
  }
  }else{
    
    var collect={}
    collect[shun]=false
    wx.setStorageSync('cang', collect)
  }
},
  onLoad: function (options) {
    
      console.log("options",options.id)
      var postid=options.id;
      this.data.thisId=postid
      this.getData(postid)
      this.collectStatus(postid)
  },
  getData(shun){
    var that=this
    wx.request({
          url:'http://127.0.0.1:3000/list',
          method:'get',
          header: {
                'content-type': 'application/json' // 默认值
              },
              success (res) {
                console.log("asdas",res.data.data[shun])
                that.setData({
                      arr:res.data.data[shun]
                })
                
              }
    })
},
onShareTap: function (event) {
  var itemList = [
      "分享给微信好友",
      "分享到朋友圈",
      "分享到QQ",
      "分享到微博"
  ];
  wx.showActionSheet({
      itemList: itemList,
      itemColor: "#405f80",
      success: function (res) {
          // res.cancel 用户是不是点击了取消按钮
          // res.tapIndex 数组元素的序号，从0开始
          wx.showModal({
              title: "用户 " + itemList[res.tapIndex],
              content: "用户是否取消？" + res.cancel + "现在无法实现分享功能，什么时候能支持呢"
          })
      }
  })
},
zhuanfa(e){
  console.log('分享',e.currentTarget.dataset.postid)
  var id=e.currentTarget.dataset.postid
  
  return{
    title:"转发标题",
    path:`pages/first/son/son?id=${id}`
  }
},
zhuanfa1(){
  wx.showActionSheet({
    itemList: ['A', 'B', 'C'],
    success (res) {
      console.log(res.tapIndex)
    },
    fail (res) {
      console.log(res.errMsg)
    }
  })
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.audioCtx = wx.createAudioContext('myAudio')
  
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