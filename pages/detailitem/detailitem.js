// pages/detailitem/detailitem.js
import ajax from '../../utils/request';
const app = getApp();
var sliderWidth = 96;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details: {},
    total: '',
    // img: '',
    // desc: '',
    // prices: 0,
    // imgs: [],
    // comments: [],
    tabs: ["商品详情", "评论", "咨询"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },
  nav: function () {
    wx.switchTab({
      url: '../cart/cart',
    })
  },
  addcart: function () {
    app.addcart(this.data.details); 
    this.setData({
      total: app.total()
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '商品详情',
    })
    ajax.get(`http://rap2api.taobao.org/app/mock/116613/api/v1/itemdetail/${options.id}`)
    .then( resp => {
      this.setData({
        details: resp.data
      })
    })
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      total: app.total()
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

  }
})