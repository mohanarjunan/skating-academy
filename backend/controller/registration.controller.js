const { registrationSchama } = require('../model/registeration.model')

const registration = async (req, res) => {
  try {
    const data = new registrationSchama(req.body)
    await data.save()
    res.json({
      status: true,
      msg: "Registration Success!",
      exitCode: 0
    })
  } catch (e) {
    res.json({
      status: false,
      msg: "Registration Faild!",
      exitCode: 1
    })
  }
}

const studentLogin = async (req, res) => {
  try {
    const data = await registrationSchama.findOne({email: req.params.email})
    if (data.password === req.params.password) {
      res.json({
        status: true,
        msg: "Login Success!",
        exitCode: 0
      })
    } else {
      res.json({
        status: false,
        msg: "Password Mismatch!",
        exitCode: 0
      })
    }
  } catch (e) {
    res.json({
      status: false,
      msg: "User Not Found!",
      exitCode: 1
    })
  }
}

const getAllStudent = async (req, res) => {
  try {
    const data = await registrationSchama.find()
    res.json({
      status: true,
      contents: data,
      exitCode: 0
    })
  } catch (e) {
    res.json({
      status: false,
      contents: null,
      exitCode: 1
    })
  }
}

const getOneStudent = async (req, res) => {
  try {
    const data = await registrationSchama.findOne({email: req.params.email})
    res.json({
      status: true,
      content: data,
      exitCode: 0
    })
  } catch (e) {
    res.json({
      status: false,
      content: null,
      exitCode: 1
    })
  } 
}

module.exports = {
  registration,
  studentLogin,
  getAllStudent,
  getOneStudent
}