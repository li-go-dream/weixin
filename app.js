//app.js
App({
  cart: wx.getStorageSync('cart') || [],
  totalPriceChecked() {
    const checkedcart=this.cart.filter(item => item.checked ===true);
    return checkedcart.reduce((result,item) => {
         return result += item.count* item.prices;
    },0)
  },
  addcart (newitem) {
    const isIncart = this.cart.some(item => item.id ===newitem.id)
    if(isIncart){
      this.cart = this.cart.map(item => {
        if(item.id ===newitem.id){
          item.count +=1;
        }
        return item;
      })
    }else{
      this.cart.push({
        ...newitem,
        count: 1,
        checked: true
      })
    }
    wx.setStorageSync('cart', this.cart);
  },
  deleteCartItemById (id) {
    this.cart = this.cart.filter(item => item.id !== id);
    wx.setStorageSync('cart', this.cart);
    this.total();
    return this.cart;
  },
  cartItemChange (id) {
    this.cart.map(item => {
      if(item.id === id){
        item.checked =!item.checked;
      }
      return item;
    })
    wx.setStorageSync('cart', this.cart);
    return this.cart;
  },
  checkedAllCart (check) {
    if(check){
      this.cart.map(item => {
        item.checked = true;
        return item;
      });
    }else{
      this.cart.map(item => {
        item.checked = false;
        return item;
      });
    }
    wx.setStorageSync('cart', this.cart);
    return this.cart;
  },
  increment (id) {
    this.cart.map(item => {
      if(item.id === id){
        item.count +=1;
      }
      return item;
    })
    wx.setStorageSync('cart', this.cart);
    this.total();
    return this.cart;
  },
  decrement(id) {
    this.cart.map(item => {
      if (item.id === id) {
        if(item.count > 1){
          item.count -= 1;
        }else{
          return this.cart = this.cart.filter(item => item.id !== id);
        }
      }
      return item;
    })
    wx.setStorageSync('cart', this.cart);
    this.total();
    return this.cart;
  },
  total () {
    var totalcount =  this.cart.reduce((result ,item) => {
      return result += item.count
    },0);
    if (totalcount >99){
      totalcount = "99+";
    }
    wx.setTabBarBadge({
      index: 2,
      text: `${totalcount}`
    })
    return totalcount;
  },
  onLaunch: function () {
    // this.total();
    // 展示本地存储能力
    this.totalPriceChecked();
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})