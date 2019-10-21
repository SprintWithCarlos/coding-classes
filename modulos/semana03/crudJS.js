/*
1. Crear data[X]
2. Crear funciones CRUD
    a. READ (listado/detalle)[X]
    b. CREATE [X]
    c. UPDATE [X]
    d. DELETE
*/
// 1. Importación de los datos
const datos = require('../semana03/data');
// 2. Almacenamiento de los libros en variable "books"
const { books } = datos;

// 3. Creación de función "readList"
const readList = (arr) => console.log(arr);

// 4. Llamada de la función con el arreto 'book' como parámetro

// a. readBooks
// readList(books);

// 5. Creación y llamada de la función readDetail
const readDetail = (id, arr) => {
  const i = id - 1;
  return console.log(arr[i]);
};

// b. readDetails
// readDetail(2, books);


// 6. Creación y llamada de función createBook
const createBook = (title, author, year, arr) => {
  const book = {
    id: arr.length + 1,
    title,
    author,
    year,
  };
  arr.push(book);
  return console.log(arr);
};
// c. createBook
// createBook('El Libro de la Jungla', 'Rudyar Kiplin', 'N/D', books);


// 7. Creación y llamada de la función updateBook
const updateBook = (id, title, author, year, arr) => {
  const updatedBook = arr.find((item) => item.id === id);
  updatedBook.title = title;
  updatedBook.author = author;
  updatedBook.year = year;
  return console.log(arr);
};

// d. updateBook
// updateBook(2, 'El Libro de la Selva', 'Rudyaard Kipling', 1894, books);

// 8. Creación y llamada de la función deleteBook
const deleteBook = (id, arr) => {
  const index = arr.indexOf(id);
  arr.splice(index, 1);
  return console.log(arr);
};

// e. deleteBook
// deleteBook(1, books);
