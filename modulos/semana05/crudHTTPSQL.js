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
const morgan = require('morgan');

const mysqlConnection = require('./database');

// Middlewares
app.use(express.json());
app.use(morgan('tiny'));
// READ LIST
app.get('/books', (req, res) => {
  mysqlConnection.query('SELECT * FROM library', (err, result) => {
    if (err) throw err;
    res.status(200).json({
      message: 'Books List',
      count: result.length,
      data: result,
    });
  });
});

// READ DETAIL
app.get('/books/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('SELECT * FROM library WHERE book_id = ?', [id], (err, result) => {
    if (err) throw err;
    res.status(200).json({
      message: `Books ID ${id}`,
      data: result,
    });
  });
});
// CREATE
app.post('/books', (req, res) => {
  const {
    title, author, year,
  } = req.body;
  const book = {
    title,
    author,
    year,
  };
  mysqlConnection.query('INSERT INTO library SET ?', book, (err) => {
    if (err) throw err;
    res.status(201).json({
      message: 'Book Created',
      data: book,
    });
  });
});
// UPDATE
app.put('/books/:id', (req, res) => {
  const param = [
    req.body,
    req.params.id,
  ];
  mysqlConnection.query('UPDATE library SET ? WHERE book_id = ?', param, (err) => {
    if (err) throw err;
    res.status(200).json({
      message: 'Book Updated!',
    });
  });
});
// DELETE
app.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM library WHERE book_id = ?', id, (err) => {
    if (err) throw err;
    res.status(200).json({
      message: `Book with ID ${id} deleted`,
    });
  });
});
// Error Handling
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
  next();
});
app.listen(3000, () => {
  console.log('Escuchando en puerto 3000');
});
