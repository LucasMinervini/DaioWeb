��const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para servir archivos estáticos desde el directorio 'public'
app.use(express.static('public'));

// Ruta para servir inicio.html como página principal (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/inicio.html'));
});

// Iniciar el servidor
app.listen(port, (=> {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
