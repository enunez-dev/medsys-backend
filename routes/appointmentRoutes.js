// specialtyRoutes.js

const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// Endpoint para obtener todas las especialidades
router.get('/patient/:id', appointmentController.getAppointmentByPatient);
router.post('/check/:appointmentid/:patientid', appointmentController.regAppointment);
router.put('/checkout/:id', appointmentController.updateAppointmentCheckOut);
router.get('/:date/:doctorid', appointmentController.getAppointmentByDoctor);

module.exports = router;
