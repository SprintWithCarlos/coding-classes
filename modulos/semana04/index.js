const express = require('express');

const app = express();
app.get('/about', (req, res) => {
  res.send('Hola desde About');
});
app.get('/contact', (req, res) => {
  res.send('Hola desde Contact');
});
app.listen(3000, () => {
  console.log('Escuchando en puerto 3000');
})
;