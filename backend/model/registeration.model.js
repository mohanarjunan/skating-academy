const { default: mongoose } = require("mongoose")
const { conn } = require("../connection/db")

const Schema = mongoose.Schema({
  studentName: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  phone: {
    type: Number
  },
  gender: {
    type: String
  },
  dob: {
    type: String
  }
})

const registrationSchama = conn.model('registration', Schema)

module.exports = {
  registrationSchama
}