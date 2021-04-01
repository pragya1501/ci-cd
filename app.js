const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello there!')
})

app.listen(port, () => {
  console.log(`Listening at ${port}`)
})