// pages/animalInfo/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    animalInfo: {},
    userId: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad({ id }) {
    console.log(id, 2232332)
    const userInfo = wx.getStorageSync('userInfo')
    this.setData({
      id: id,
      userId: userInfo._id,
    })

    this.getAnimalInfo()

    /* 显示页面转发按钮 */
    wx.showShareMenu({
      menus: ['shareAppMessage', 'shareTimeline'],
    })
  },

  /* 获取宠物详情 */
  async getAnimalInfo() {
    const { userId, id } = this.data
    console.log(id, 11111)
    let animalInfo = {}
    if (userId) {
      console.log(2323)
      // 登录时的操作
      const {
        result: { data },
      } = await wx.cloud.callFunction({
        name: 'getAnimalInfo',
        data: {
          animalId: id,
          userId,
        },
      })
      animalInfo = data
    } else {
      // 非登录情况的操作
      const { data } = await wx.cloud
        .database()
        .collection('animal')
        .doc(id)
        .get()
      animalInfo = data
    }

    console.log(animalInfo)

    this.setData({
      animalInfo,
    })
  },

  /* 关注 || 取消关注 */
  async onLike() {
    const { userId, id } = this.data
    if (!userId) {
      wx.showToast({
        icon: 'none',
        title: '登录后，一键关注',
      })
      return
    }

    wx.showLoading({
      title: '操作中...',
    })

    await wx.cloud.callFunction({
      name: 'patchLike',
      data: {
        userId,
        animalId: id,
      },
    })

    this.getAnimalInfo()

    wx.hideLoading()
  },

  /* 返回首页 */
  backHome() {
    // 想要保留搜索状态 使用switchTab
    wx.switchTab({
      url: '/pages/home/index',
    })
  },
  /* 当用户在当且页面分享时触发，可以定义分享内容 */
  onShareAppMessage() {
    const { varieties, age } = this.data.animalInfo
    return {
      title: `${varieties} -- ${age}个月`,
      path: `/pages/animalInfo/index?id=${this.data.id}`,
    }
  },
})
