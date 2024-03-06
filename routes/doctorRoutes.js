// doctorRoutes.js

const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// Endpoint para obtener todos los médicos
router.get('/specialty/:id', doctorController.getDoctorsBySpecialtyId);

module.exports = router;
