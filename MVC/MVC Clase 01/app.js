/* eslint-disable no-console */
const http = require('http');


const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (url === '/') {
    res.write('<html>');
    res.write('<h1>Greetings from Home!</h1>');
    res.write('<form action="/create-user" method="POST"><input type="text" name="username" id="username" ></input><button>Submit</button></form>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.write('<html>');
    res.write('<h1>Greetings from Users!</h1>');
    res.write('<ul>');
    res.write('<li>Alicia</li>');
    res.write('<li>Monica</li>');
    res.write('<li>Robert</li>');
    res.write('<li>Tony</li>');
    res.write('</ul>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.write('<html>');
  res.write('<h1>Default Page</h1>');
  res.write('<p>Default</p>');
  res.write('</html>');
  return res.end();
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
