const { Router } = require("express");
const { registration, getAllStudent, studentLogin, getOneStudent } = require("../controller/registration.controller");
const { newAdmin, adminLogin } = require("../controller/admin.controller");
const { newApplication, getApplications, getOneApplication, approve, denied } = require('../controller/application.controller')

const router = Router()

router.post('/admin', newAdmin)
router.get('/admin/:adminId/:password', adminLogin)

router.post('/application', newApplication)
router.get('/applications', getApplications)
router.get('/application/:refId', getOneApplication)
router.put('/application/approve/:id', approve)
router.put('/application/deny/:id', denied)

router.post('/registration', registration)
router.get('/registration/:email/:password', studentLogin)
router.get('/registrations', getAllStudent)
router.get('/registration/:email', getOneStudent)

module.exports = router 