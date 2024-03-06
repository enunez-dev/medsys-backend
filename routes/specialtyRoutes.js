// specialtyRoutes.js

const express = require('express');
const router = express.Router();
const specialtyController = require('../controllers/specialtyController');

// Endpoint para obtener todas las especialidades
router.get('/', specialtyController.getSpecialties);

module.exports = router;
