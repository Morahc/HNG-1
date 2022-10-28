const express = require('express')

const app = express()

app.get('/profile', (req, res) => {
  res.json({ "slackUsername": "morah stephen", "backend": true, "age": 23, "bio": "Always pushing for self improvement and development" })
})

app.listen(3001, ()=> {
  console.log("Server running ...")
})