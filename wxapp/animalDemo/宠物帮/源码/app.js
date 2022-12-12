// 小程序逻辑
App({
  onLaunch(){
    wx.cloud.init({
      env: 'pro-9gpn0oyk98c1bfba',
      traceUser: true,
    })
  }
})
