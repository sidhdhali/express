const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
 app.get('/contact',(req,res) => {
  res.send('sidqgmail.com')
 })
 
 app.get('/about',(req,res) => {
  res.send("i'm a developer")
 })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})