/*
1. Crear data[X]
2. Crear funciones CRUD
    a. READ (listado/detalle)[X]
    b. CREATE [X]
    c. UPDATE [X]
    d. DELETE
*/
const express = require('express');

const app = express();

const library = require('./data');
// Middlewares
app.use(express.json());
// READ LIST
app.get('/books', (req, res) => {
  res.status(200).json({
    message: 'Books List',
    data: library,
  });
});
// READ DETAIL
app.get('/books/:id', (req, res) => {
  const i = req.params.id - 1;
  res.status(200).json({
    message: `Book with ID${req.params.id} Info`,
    data: library[i],
  });
});
// CREATE
app.post('/books', (req, res) => {
  const { title, author, year } = req.body;
  const book = {
    id: library.length + 1,
    title,
    author,
    year,
  };
  library.push(book);
  res.status(201).json({
    message: 'Book Created',
    data: book,
  });
});
// UPDATE
app.put('/books/:id', (req, res) => {
  const updatedBook = library.find((item) => item.id === parseInt(req.params.id, 10));
  const { title, author, year } = req.body;
  updatedBook.title = title;
  updatedBook.author = author;
  updatedBook.year = year;
  res.status(200).json({
    message: `Book with Id ${req.params.id} updated`,
    data: updatedBook,
  });
});
// DELETE
app.delete('/books/:id', (req, res) => {
  const index = library.indexOf(req.params.id);
  library.splice(index, 1);
  res.status(200).json({
    message: `Book with ID${req.params.id} deleted`,
  });
});
app.listen(3000, () => {
  console.log('Escuchando en puerto 3000');
});
