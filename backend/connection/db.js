const mongoose = require("mongoose");
require('dotenv').config()

const conn = mongoose.createConnection(process.env.MONGO_URL)

conn.on('connected', (err) => {
  if(!err) {
    console.log("Mongo Online")
  }
})

module.exports = {
  conn
}