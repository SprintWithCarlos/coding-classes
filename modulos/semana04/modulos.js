const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === '/about') {
    res.write('Hola desde About');
    res.end();
  }
  if (req.url === '/contact') {
    res.write('Hola desde Contact');
    res.end();
  }
});
server.listen(3000, () => {
  console.log('Escuchando en puerto 3000');
});
