/* eslint-disable no-console */
/* eslint-disable consistent-return */
/*
1. Crear data[X]
2. Crear funciones CRUD
    a. READ (listado/detalle)[X]
    b. CREATE [X]
    c. UPDATE [X]
    d. DELETE
*/
const express = require('express');
const morgan = require('morgan');

const app = express();

const library = require('../data');
// Middlewares
app.use(express.json());
app.use(morgan('dev'));
// READ LIST
app.get('/books', async (req, res) => {
  try {
    const response = await res.status(200).json({
      message: 'Books List',
      data: library,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
});
// READ DETAIL
app.get('/books/:id', async (req, res) => {
  try {
    const i = req.params.id - 1;
    const response = await res.status(200).json({
      message: `Book with ID${req.params.id} Info`,
      data: library[i],
    });
    return response;
  } catch (error) {
    console.error(error);
  }
});
// CREATE
app.post('/books', async (req, res) => {
  try {
    const { title, author, year } = req.body;
    const book = {
      id: library.length + 1,
      title,
      author,
      year,
    };
    library.push(book);
    const response = await res.status(201).json({
      message: 'Book Created',
      data: book,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
});
// UPDATE
app.put('/books/:id', async (req, res) => {
  try {
    const updatedBook = library.find(
      (item) => item.id === parseInt(req.params.id, 10),
    );
    const { title, author, year } = req.body;
    updatedBook.title = title;
    updatedBook.author = author;
    updatedBook.year = year;
    const response = await res.status(200).json({
      message: `Book with Id ${req.params.id} updated`,
      data: updatedBook,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
});
// DELETE
app.delete('/books/:id', async (req, res) => {
  try {
    const index = library.indexOf(req.params.id);
    library.splice(index, 1);
    const response = await res.status(200).json({
      message: `Book with ID${req.params.id} deleted`,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
});
// Error Handling
app.use(async (req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});
app.use(async (error, req, res, next) => {
  const response = res.status(error.status || 500).json({
    error: {
      message: error.message,
    },
  });
  next();
  return response;
});
app.listen(3000, () => {
  console.log('Escuchando en puerto 3000');
});
