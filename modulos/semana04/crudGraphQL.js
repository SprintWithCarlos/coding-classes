/*
1. Crear data[X]
2. Crear funciones CRUD
    a. READ (listado/detalle)[X]
    b. CREATE [X]
    c. UPDATE [X]
    d. DELETE
*/
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const morgan = require('morgan');

const app = express();

const library = require('./data');

const schema = buildSchema(`
type Query{
  books: [Book!]!
  book(id:ID!): Book
}
type Mutation{
  createBook(id: ID!, title: String, author: String, year: Int): Book
}
type Book {
  id: ID
  title: String
  author: String
  year: Int
}
`);

const rootValue = {
  // READ LIST
  books: () => library,
  // READ DETAIL
  book: (args) => library.find((book) => book.id === parseInt(args.id, 0)),
  // CREATE BOOK
  createBook: ({
    title, author, year, data,
  }) => {
    const book = {
      id: data.length + 1,
      title,
      author,
      year,
    };
    library.push(book);
    return book;
  },
};
// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
}));

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
// Listening
app.listen(3000, () => {
  console.log('Escuchando en puerto 3000');
});
