const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const cars = require('./routes/cars.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/cars', cars)

app.listen(PORT, function() {
  console.log(`listening on port ${PORT} on day 9`)
})
