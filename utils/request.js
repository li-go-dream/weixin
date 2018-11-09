export default {
  get: (url) => {
    return new Promise((resolve, reject) => {
      wx.showLoading({
        title: '努力加载中...',
      })
      wx.request({
        url,
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          resolve(res);
        },
        fail: function(res) {
          reject(res);
        },
        complete: function(res) {
          wx.hideLoading();
        },
      })
    })
  }
}