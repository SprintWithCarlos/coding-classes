/*
1. Crear data[X]
2. Crear funciones CRUD
    a. READ (listado/detalle)[X]
    b. CREATE [X]
    c. UPDATE [X]
    d. DELETE
*/
const library = require('./data');

// READ LIST
const readList = (data) => console.log(data);
readList(library);
// READ DETAIL
const readDetail = (id, data) => {
  const i = id - 1;
  return console.log(data[i]);
};
readDetail(2, library);
// CREATE
const createBook = (title, author, year, data) => {
  const book = {
    id: data.length + 1,
    title,
    author,
    year,
  };
  data.push(book);
};
createBook('El Libro de la Jungla', 'Rudyar Kiplin', 'N/D', library);
readList(library);
// UPDATE
const updateBook = (id, title, author, year, data) => {
  const updatedBook = data.find((item) => item.id === id);
  updatedBook.title = title;
  updatedBook.author = author;
  updatedBook.year = year;
};
updateBook(4, 'El Libro de la Selva', 'Rudyaard Kipling', 1894, library);
readList(library);
// DELETE
const deleteBook = (id, data) => {
  const index = data.indexOf(id);
  return data.splice(index, 1);
};
deleteBook(4, library);
readList(library);
