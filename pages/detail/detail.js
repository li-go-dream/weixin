// pages/detail/detail.js
import ajax from '../../utils/request';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    page: 1,
    count: 10,
    total: 0,
    headertext: ''
  },
  tolower () {
    this.loaditem();
  },
  refresh () {
    this.setData({
      list: [],
      page: 1,
      total: 0,
    }, () => {
      this.loaditem();
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  loaditem () {
    if(this.data.page === this.data.total) {
      return ;
    }
    ajax.get(`http://rap2api.taobao.org/app/mock/116613/api/v1/detail?title=${this.data.headertext}&page=${this.data.page}&count=${this.data.count}`)
      .then(resp => {
        this.setData(
          {
            list: this.data.list.concat(resp.data.data),
            page: this.data.page +1,
            total: resp.data.total
          })
      })
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title,
    })
    this.setData({
      headertext: options.title
    })
    this.loaditem();
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