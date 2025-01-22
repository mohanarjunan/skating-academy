const { adminSchema } = require("../model/admin.model")

const newAdmin = async (req, res) => {
  try {
    const data = new adminSchema(req.body)
    await data.save()
    res.json({
      status: true,
      exitCode: 0,
      msg: "Admin Created!"
    })
  } catch (e) {
    res.json({
      status: false,
      exitCode: 1,
      msg: "Admin Not Created!"
    })
  }
}

const adminLogin = async (req, res) => {
  try {
    const data = await adminSchema.findOne({adminId: req.params.adminId})
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
      msg: "Admin Not Found!",
      exitCode: 1
    })
  }
}

module.exports = {
  newAdmin,
  adminLogin
}