// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://t2.hddhhn.com/uploads/tu/201707/200/7.jpg',
      'http://t2.hddhhn.com/uploads/tu/201610/198/gzr3vxtsbgr.jpg',
      'http://t2.hddhhn.com/uploads/tu/201610/198/x1w1sxdhu45.jpg',
      'http://t2.hddhhn.com/uploads/tu/201607/136/kmzdiuer5iy.jpg'
    ],
    imgNavs: [
      {
        path: 'https://mi1.vanclimg.com/oms/2018_1_10_15_53_37_1188_55x60.jpg',
        text: '新品'
      },
      {
        path: 'http://i6.m.vancl.com/oms/2018_1_10_15_53_37_6172_59x54.jpg',
        text: '特惠'
      },
      {
        path: 'https://mi2.vanclimg.com/oms/2018_8_24_11_37_23_9993_59x59.jpg',
        text: '衬衫'
      },
      {
        path: 'http://i8.m.vancl.com/oms/2018_8_31_16_38_7_8073_59x59.jpg',
        text: '帆布鞋'
      },
      {
        path: 'http://i4.m.vancl.com/oms/2018_7_26_14_37_13_4000_59x56.jpg',
        text: 'V团'
      }
    ],
    Man: [
      {
        id: 1,
        prices: 298,
        name: '卫衣 暖绒开衫 男款 牛仔蓝',
        path: 'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378475/mid/6378475-1j201710171547247353.jpg'
      },
      {
        id: 2,
        prices: 198,
        name: '卫衣 暖绒开衫 男款 牛仔蓝',
        path: 'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378475/mid/6378475-1j201710171547247353.jpg'
      },
      {
        id: 3,
        prices: 128,
        name: '卫衣 暖绒开衫 男款 牛仔蓝',
        path: 'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378475/mid/6378475-1j201710171547247353.jpg'
      },
      {
        id: 4,
        prices: 788,
        name: '卫衣 暖绒开衫 男款 牛仔蓝',
        path: 'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378475/mid/6378475-1j201710171547247353.jpg'
      },
      {
        id: 5,
        prices: 498,
        name: '卫衣 暖绒开衫 男款 牛仔蓝',
        path: 'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378475/mid/6378475-1j201710171547247353.jpg'
      },
      {
        id: 6,
        prices: 438,
        name: '卫衣 暖绒开衫 男款 牛仔蓝',
        path: 'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378475/mid/6378475-1j201710171547247353.jpg'
      }
    ],
    Woman: [
      {
        id: 7,
        prices: 132,
        name: '卫衣 圆领 熊本熊 S7 浅花灰',
        path: 'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378354/mid/6378354-1j201801111409218163.jpg'
      },
      {
        id: 8,
        prices: 798,
        name: '卫衣 圆领 熊本熊 S7 浅花灰',
        path: 'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378354/mid/6378354-1j201801111409218163.jpg'
      },
      {
        id: 9,
        prices: 456,
        name: '卫衣 圆领 熊本熊 S7 浅花灰',
        path: 'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378354/mid/6378354-1j201801111409218163.jpg'
      },
      {
        id: 10,
        prices: 298,
        name: '卫衣 圆领 熊本熊 S7 浅花灰',
        path: 'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378354/mid/6378354-1j201801111409218163.jpg'
      },
      {
        id: 11,
        prices: 624,
        name: '卫衣 圆领 熊本熊 S7 浅花灰',
        path: 'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378354/mid/6378354-1j201801111409218163.jpg'
      },
      {
        id: 12,
        prices: 562,
        name: '卫衣 圆领 熊本熊 S7 浅花灰',
        path: 'http://i.vanclimg.com/276/356/q80/product/6/3/7/6378354/mid/6378354-1j201801111409218163.jpg'
      }
    ], 
    Children: [
      {
        id: 13,
        prices: 562,
        name: '女童吊带花裙AS 608913 桃粉色',
        path: 'http://i.vanclimg.com/640/q80/product/6/3/8/6382263/big/6382263-1j201806131417021709.jpg'
      },
      {
        id: 14,
        prices: 562,
        name: '女童吊带花裙AS 608913 桃粉色',
        path: 'http://i.vanclimg.com/640/q80/product/6/3/8/6382263/big/6382263-1j201806131417021709.jpg'
      },
      {
        id: 15,
        prices: 562,
        name: '女童吊带花裙AS 608913 桃粉色',
        path: 'http://i.vanclimg.com/640/q80/product/6/3/8/6382263/big/6382263-1j201806131417021709.jpg'
      }, 
      {
        id: 16,
        prices: 562,
        name: '女童吊带花裙AS 608913 桃粉色',
        path: 'http://i.vanclimg.com/640/q80/product/6/3/8/6382263/big/6382263-1j201806131417021709.jpg'
      },
      {
        id: 17,
        prices: 562,
        name: '女童吊带花裙AS 608913 桃粉色',
        path: 'http://i.vanclimg.com/640/q80/product/6/3/8/6382263/big/6382263-1j201806131417021709.jpg'
      },
    ],
    interval: 2500,
    duration: 1500,
    tabs: ["男装", "女装", "童装"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'http://m.vancl.com/Product/AjaxSonCateList?cateId=&np=10145&cateref=',
    //   success: (resp) => {
    //     console.log(resp);
    //   }
    // })
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