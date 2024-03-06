// specialtyRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Endpoint para obtener todas las especialidades
router.post('/', authController.login);

module.exports = router;
