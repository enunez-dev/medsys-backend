// specialtyController.js

// Ejemplo de controlador para manejar las especialidades médicas
const { getSpecialtyData } = require('../services/specialtyService')

// Controlador para obtener todas las especialidades
exports.getSpecialties = async (req, res) => {
  res.json(await getSpecialtyData());
};
