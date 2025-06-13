const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Render define el puerto por variable de entorno

app.use(express.static('public')); // Para servir archivos estáticos

app.get('/', (req, res) => {
  res.send('Servidor Express funcionando en Render!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});