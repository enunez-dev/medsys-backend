// doctorController.js

// Ejemplo de controlador para manejar los médicos

const { getDoctorBySpecialtyData } = require('../services/doctorService')

// Controlador para obtener todos los médicos
exports.getDoctorsBySpecialtyId = async (req, res) => {
  const specialtyId = req.params.id;
  res.json(await getDoctorBySpecialtyData(specialtyId));
};
