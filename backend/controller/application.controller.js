const { applicationSchema } = require('../model/application.model')

const newApplication = async (req, res) => {
  try {
    const data = new applicationSchema(req.body)
    await data.save()
    res.json({
      status: true,
      exitCode: 0,
      msg: "Application Submitted!"
    })
  } catch (e) {
    res.json({
      status: false,
      exitCode: 1,
      msg: "Submission Failed!"
    })
  }
}


const getApplications = async (req, res) => {
  try {
    const data = await applicationSchema.find()
    res.json({
      status: true,
      exitCode: 0,
      contents: data
    })
  } catch (e) {
    res.json({
      status: false,
      exitCode: 1,
      contents: null
    })
  }
}

const getOneApplication = async (req, res) => {
  try {
    const data = await applicationSchema.findOne({ refId: req.params.refId })
    res.json({
      status: true,
      exitCode: 0,
      contents: data,
      msg: "Application Found!"
    })
  } catch (e) {
    res.json({
      status: false,
      exitCode: 1,
      contents: null,
      msg: "Application Not Found!"
    })
  }
}

const approve = async (req, res) => {
  try {
    await applicationSchema.findOneAndUpdate({ _id: req.params.id }, req.body)
    res.json({
      status: true,
      msg: "Approved!"
    })
  } catch (e) {
    res.json({
      status: false,
      msg: "Approving Failed!"
    })
  }
}

const denied = async (req, res) => {
  try {
    await applicationSchema.findOneAndUpdate({ _id: req.params.id }, req.body)
    res.json({
      status: true,
      msg: "Denied!"
    })
  } catch (e) {
    res.json({
      status: false,
      msg: "Denying Failed!"
    })
  }
}

module.exports = {
  newApplication,
  getApplications,
  getOneApplication,
  approve,
  denied
}