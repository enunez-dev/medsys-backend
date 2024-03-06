// specialtyController.js

// Ejemplo de controlador para manejar las especialidades médicas
const { getAppointmentByDoctorData, regAppointment, getAppointmentByPatient, updateAppointmentCheckOut } = require('../services/appointmentService')

// Controlador para obtener todas las especialidades
exports.getAppointmentByDoctor = async (req, res) => {
  const date = req.params.date;
  const doctorId = req.params.doctorid;
  res.json(await getAppointmentByDoctorData(date, doctorId));
};

exports.regAppointment = async (req, res) => {
  const appointmentid = req.params.appointmentid;
  const patientid = req.params.patientid;

  res.json(await regAppointment(appointmentid, patientid));
};

exports.getAppointmentByPatient = async (req, res) => {
  const patientid = req.params.id;
  res.json(await getAppointmentByPatient(patientid));
};

exports.updateAppointmentCheckOut = async (req, res) => {
  const id = req.params.id;
  res.json(await updateAppointmentCheckOut(id));
};