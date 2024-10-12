const express = require('express')
const router = express.Router()
const appointmentController = require('../controllers/appointments') 
const { ensureAuth } = require('../middleware/auth')

// get the confirm page
router.get('/', ensureAuth, appointmentController.getForm)
// book appt , save to user and appt models, pop up confirmation check or send to user profile
router.post('/create', appointmentController.createAppointment)
router.get('/confirm', appointmentController.getConfirmation) // migh tnot need?s
router.delete('/delete', appointmentController.deleteAppointment)
router.get('/getAppt', appointmentController.getAppointment)




module.exports = router