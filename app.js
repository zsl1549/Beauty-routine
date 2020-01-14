//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);
    this.checkForUpdate();
  },
  checkForUpdate: function() {
    const updateManager = wx.getUpdateManager();

    updateManager.onUpdateReady(function() {
      wx.showModal({
        title: "更新提示",

        content: "新版本已经准备好，是否重启应用？",

        success: function(res) {
          if (res.confirm) {
            updateManager.applyUpdate();
          }
        }
      });
    });

    updateManager.onUpdateFailed(function() {});
  },
  getUserInfo: function(cb) {
    var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo);
    } else {
      //调用登录接口
      wx.login({
        success: function() {
          wx.getUserInfo({
            success: function(res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo);
            }
          });
        }
      });
    }
  },
  globalData: {
    userInfo: null
  }
});
