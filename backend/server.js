const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
const router = require('./router/router')

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/', router)

app.listen(process.env.PORT, () => {
  console.log("Server Online")
})