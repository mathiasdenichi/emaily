const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send({Adam: 'is a gay head'})
})

const PORT = process.env.PORT || 5000
app.listen(PORT)