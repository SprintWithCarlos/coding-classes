/* eslint-disable no-underscore-dangle */
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
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/library', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error(err);
  });


const morgan = require('morgan');


// Middlewares
app.use(express.json());
app.use(morgan('tiny'));
// Model
const Book = mongoose.model('Book', {
  title: String,
  author: String,
  year: Number,
});


// READ LIST
app.get('/books', async (req, res) => {
  const books = await Book.find();
  const lastID = books[books.length - 1]._id;
  res.status(200).json({
    message: 'Book List',
    data: books,
    lastID,
  });
});

// READ DETAIL
app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);
  if (!book) {
    return res.status(404).json({
      message: 'No Book with that ID',
    });
  }
  return res.status(200).json({
    message: `Book ID ${id}`,
    data: book,
  });
});
// CREATE
app.post('/books', async (req, res) => {
  const {
    title, author, year,
  } = req.body;
  const book = new Book({
    title,
    author,
    year,
  });
  const result = await book.save();
  res.status(201).json({
    message: 'Book Created',
    data: result,
  });
});
// UPDATE
app.put('/books/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author, year } = req.body;
  const updatedBook = await Book.findByIdAndUpdate(id, {
    title, author, year,
  }, {
    new: true,
  });
  if (!updatedBook) {
    return res.status(404).json({
      message: 'There is no book with that ID',
    });
  }
  return res.status(200).json({
    message: `Book with ${id} updated!`,
    data: updatedBook,
  });
});

// DELETE
app.delete('/books/:id', async (req, res) => {
  const { id } = req.params;
  await Book.findByIdAndDelete(id);
  res.status(200).json({
    message: `Book with ID ${id} deleted`,
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
