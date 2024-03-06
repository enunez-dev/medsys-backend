// authController.js

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { getLogin } = require('../services/authService')
const { JWT_SECRET } = require('../config')


// Función para autenticar al usuario
exports.login = async (req, res) => {
    const { email, password } = req.body;

    const result = await getLogin(email, password);

    // Si no se encontró el usuario
    if (result.data.length === 0) {
        res.status(401).json({ error: 'Credenciales inválidas' });
        return;
    }

    // Verificar la contraseña
    const patient = result.data[0];
    const validPassword = await bcrypt.compare(password, patient.pass);
    if (!validPassword) {
        res.status(401).json({ error: 'Credenciales inválidas' });
        return;
    }

    // Generar y enviar el token JWT
    const token = jwt.sign({ id: patient.id, email: patient.email }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, id: patient.id, fullName: patient.fullname, email: patient.email });
};
