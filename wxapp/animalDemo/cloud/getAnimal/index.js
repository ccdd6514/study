// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const { type, pageIndex, pageSize } = event
  /* 1、初始化集合 */
  const db = cloud.database()

  /* 2、指定集合 */
  const animal = db.collection('animal')

  /* 3、查询符合条件的宠物 */
  const { data } = await animal
    .where({
      type,
    })
    .limit(pageSize)
    .skip((pageIndex - 1) * pageSize) // 略过多少条查询
    .get()

  return {
    data,
  }
}
