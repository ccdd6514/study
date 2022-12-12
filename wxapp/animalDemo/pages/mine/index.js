// pages/mine/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {},

  onShow() {
    this.getTabBar().setData({
      active: 'mine',
    })
    this.getUserInfo()
  },

  /* 获取用户信息 */
  async getUserInfo() {
    // 用户是否登录
    const data = wx.getStorageSync('userInfo')
    if (data) {
      // 登录了，更新数据
      const userInfo = await wx.cloud
        .database()
        .collection('userInfo')
        .doc(data._id)
        .get()
      this.setData({
        userInfo: userInfo.data,
      })
    }
  },

  // 用户授权登录
  async login() {
    let userInfo = {}
    await wx.getUserProfile({
      desc: '用于完善回应资料',
      success: (res) => {
        userInfo = res.userInfo
        console.log(userInfo)

        // 传递数据给后端
        wx.cloud
          .callFunction({
            name: 'login',
            data: {
              nickName: userInfo.nickName,
              avatarUrl: userInfo.avatarUrl,
            },
          })
          .then((res) => {
            // 3、将用户信息进行存储
            wx.setStorageSync('userInfo', res.result.data)
            this.setData({
              userInfo: res.result.data,
            })
          })
      },
    })
  },

  /* 退出登录 */
  close() {
    wx.clearStorage()
    this.setData({
      userInfo: null,
    })
  },
})
