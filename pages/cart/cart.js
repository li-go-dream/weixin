const app = getApp();
Page({
  totalPriceChecked () {
    this.setData({
      totalPrice: app.totalPriceChecked()
    })
    console.log(this.data.totalPrice);
  },
  cartItemChange(e) {
      this.setData({
        cart: app.cartItemChange(e.currentTarget.dataset.id),
      }, ()=> {
        this.setAllCheck();
        this.totalPriceChecked();
      })
  },
  increment(e) {
    this.setData({
      cart: app.increment(e.currentTarget.dataset.id)
    })
  },
  decrement(e) {
    this.setData({
      cart: app.decrement(e.currentTarget.dataset.id)
    })
  },
  deleteCartItemById(e) {
    this.setData({
      cart: app.deleteCartItemById(e.currentTarget.dataset.id)
    })
  },
  checkedAllCart() {
    this.setData({
      cart: app.checkedAllCart(!this.data.isCartAllCheck)
    }, ()=> {
      this.setAllCheck();
      this.totalPriceChecked();
    })
  },
  setAllCheck() {
    this.setData({
      isCartAllCheck: !this.data.cart.some(item => item.checked == false)
    })
  },
  data: {
    cart: [],
    totalPrice: 0,
    isCartAllCheck: true
  },
  onLoad: function (options) {
    
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
    this.setData({
      cart: app.cart
    }, ()=> {
      this.setAllCheck();
    })
    this.totalPriceChecked();
    // app.totalPriceChecked();
    app.total();
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