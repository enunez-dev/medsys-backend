// specialtyController.js

// Ejemplo de controlador para manejar las especialidades médicas
const { registerPatient } = require('../services/patientService')

// Controlador para obtener todas las especialidades
exports.registerPatient = async (req) => {
  return (await registerPatient(req.body));
};
