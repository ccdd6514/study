const express = require('express')

const app = express()


app.get('/index', async (req, res) => {
  res.json({
    code: 200,
    message: '小鱼最强1221'
  })
})

app.listen(3333, () => {
  console.log('success serve http://localhost:3333/index')
})