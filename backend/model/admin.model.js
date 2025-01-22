const { default: mongoose } = require("mongoose");
const { conn } = require("../connection/db");

const Schema = mongoose.Schema({
  adminId: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  name: {
    type: String
  },
  designation: {
    type: String
  }
})

const adminSchema = conn.model('admin', Schema)

module.exports = {
  adminSchema
}