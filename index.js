// index.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const specialtyRoutes = require('./routes/specialtyRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const patientRoutes = require('./routes/patientRoutes');
const authRoutes = require('./routes/authRoutes');

const authMiddleware = require('./middleware/authMiddleware');

var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

app.use('/specialty', authMiddleware, specialtyRoutes);
app.use('/doctor', authMiddleware, doctorRoutes);
app.use('/appointment', authMiddleware, appointmentRoutes);
app.use('/patient', authMiddleware, patientRoutes);
app.use('/auth', authRoutes);

// Puerto en el que el servidor escuchará
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
