// pages/testWeb/token.js
const ConstId = require('./token.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    webUrl: 'http://192.168.101.102:8080/'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    setTimeout(() => {
      this.webUrl = "http://localhost:8080/about?token=测试token"
      console.info('debug',wx.getSystemInfoAsync)
    }, 500);
    this.webUrl = options.url + '?token=' + decodeURIComponent(options.token)
    
       new ConstId({
      appId: '82075406e106f2080ae195d5494a9b9b', // 唯一标识，必填
    }, (e, id) => {
      if (e) {
        console.log(e)
        return
      }
      console.log('constId:', id)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})