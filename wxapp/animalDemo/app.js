// app.js
App({
  onLaunch() {
    if (!wx.cloud) {
      console.log('xx')
    }
    wx.cloud.init({
      env: 'dev-3g4qnhfa6108e17c',
      traceUser: true,
    })
  },
})
