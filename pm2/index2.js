const express = require('express')

const app = express()


app.get('/index2', async (req, res) => {
  res.json({
    code: 200,
    message: '小鱼最强1111'
  })
})

app.listen(4444, () => {
  console.log('success serve http://localhost:4444/index2')
})