const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

router.post('/register', async (req, res) =>{
    const result = await patientController.registerPatient(req, res);
    res.json(result)
} );

module.exports = router;
