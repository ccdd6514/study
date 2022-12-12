// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const { animalId, userId } = event

  const { data } = await db.collection('userInfo').doc(userId).get()

  const likeAnimalIds = data.likeAnimalIds || []

  await db
    .collection('userInfo')
    .doc(userId)
    .update({
      data: {
        likeAnimalIds: likeAnimalIds.includes(animalId)
          ? likeAnimalIds.filter((item) => item !== animalId)
          : [...likeAnimalIds, animalId],
      },
    })

  return {
    data: {
      message: '操作成功',
      code: 200,
    },
  }
}
