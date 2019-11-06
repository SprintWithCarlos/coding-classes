const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('<h1>Hola Caracola!</h1>');
});
app.get('/hola', (req, res) => {
  res.status(200).send('<h1>Hola Usuario!</h1>');
});
app.get('/json', (req, res) => {
  res.json({ nombre: 'carlos', estado: true });
});

app.listen(5000, () => {
  console.log('Escuchando en puerto 5000');
});
