/* eslint-disable no-console */
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));

app.get('/add-user', (req, res) => {
  res.send('<form action="/product" method="POST"><input type="text" name="username" id="username"/><button type="submit">Send</button></form>');
});
app.post('/product', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/users', (req, res) => {
  res.send('Hello World from users!');
});
app.listen(PORT, () => {
  console.log(`Listening from http://localhost:${PORT}`);
});
