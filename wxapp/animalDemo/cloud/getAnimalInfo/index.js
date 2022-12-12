// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()

  const { animalId, userId } = event

  const animalInfo = await db.collection('animal').doc(animalId).get() // 宠物信息

  const userInfo = await db.collection('userInfo').doc(userId).get() // 用户信息

  return {
    data: {
      ...animalInfo.data,
      like:
        userInfo.data.likeAnimalIds &&
        userInfo.data.likeAnimalIds.includes(animalInfo.data._id),
    },
  }
}
