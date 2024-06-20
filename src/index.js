// src/index.js

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, '..', 'public')));

// Ruta para servir el archivo inicio.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'inicio.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
