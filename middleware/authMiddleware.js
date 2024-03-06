// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

module.exports = function(req, res, next) {
  // Obtener el token del encabezado de autorización
  const tokenWithBearer  = req.headers.authorization;


  // Verificar si el token está presente
  if (!tokenWithBearer) {
    return res.status(401).json({ message: 'No se proporcionó un token de acceso.' });
  }

  const token = tokenWithBearer.split(' ')[1];
  // Verificar y decodificar el token
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido o expirado.' });
    }
    
    // Si el token es válido, adjuntar el usuario decodificado al objeto de solicitud
    req.user = decoded;
    next();
  });
};
