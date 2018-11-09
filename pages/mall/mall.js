// pages/mall/mall.js
import ajax from '../../utils/request';
Page({
  data: {
    tabs: [
      {
        "id":10366,
        "text":"推荐"
      }, 
      {
        "id": 10146,
        "text": "男装"
      },
      {
        "id": 10145,
        "text": "女装"
      },
      {
        "id": 10421,
        "text": "男鞋"
      },
      {
        "id": 10426,
        "text": "女鞋"
      },
      {
        "id": 10151,
        "text": "袜品"
      },
      {
        "id": 10154,
        "text": "家居"
      },
      {
        "id": 10378,
        "text": "童装"
      },
      {
        "id": 10149,
        "text": "内衣"
      }
    ],
    recommended: [],
    Mencloth: [],
    activeIndex: 10366,
    sliderOffset: 0,
    sliderTop: 0
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderTop: (res.windowHeight / that.data.tabs.length - sliderHidth),
          sliderOffset: res.windowHidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  id_load: function (id){
    ajax.get(`http://m.vancl.com/Product/AjaxSonCateList?cateId=&np=${id}&cateref=`)
    .then(resp => {
      this.setData({
        recommended: resp.data
      })
    })
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetTop,
      activeIndex: e.currentTarget.id
    });
    this.id_load(e.currentTarget.id);
  },
  /**
   * 页面的初始数据
   */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    ajax.get('http://m.vancl.com/Product/AjaxSonCateList?cateId=&np=10366&cateref=')
    .then(resp => {
      this.setData({
        recommended: resp.data
      });
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