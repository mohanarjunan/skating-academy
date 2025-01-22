const { default: mongoose } = require("mongoose");
const { conn } = require("../connection/db");

const Schema = mongoose.Schema({
  studentName: {
    type: String
  },
  refId: {
    type: Object,
    unique: true
  },
  email: {
    type: String
  },
  parentName: {
    type: String
  },
  gender: {
    type: String
  },
  dob: {
    type: String
  },
  phone: {
    type: Number
  },
  aadhar: {
    type: Number
  },
  place: {
    type: String
  },
  status: {
    type: String
  }
})

const applicationSchema = conn.model('application', Schema)

module.exports = {
  applicationSchema
}