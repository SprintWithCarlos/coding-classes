/*
1. Crear datos[X]
2. Crear funciones CRUD
    a. READ (listado/detalle)[X]
    b. CREATE [X]
    c. UPDATE [X]
    d. DELETE
*/
/* Dependencias importadas
- Externas: dotenv, express, morgan, multer, bcrypt, jsonwebtoken
- Propias: data
*/
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const bcrypt = require('bcrypt');
const jwtoken = require('jsonwebtoken');

const app = express();
const data = require('../semana03/data');

const { books, users } = data;
/* Inicio Variables de entorno */
const HOST = process.env.HOST || 'http://localhost';
const PORT = process.env.PORT || 5000;
const { SECRET } = process.env;
/* Fin Variables de entorno */
/* Inicio Multer */
// storage configura el directorio donde se archivarán las fotos y el nombre que se utilizará
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './uploads');
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});
// filefilter determina el tipo de archivos que pueden ser subidos al servidor.
// En este caso, jpeg y png. Otra extensión sería rechazada
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    return cb(null, true);
  }
  return cb(null, false);
};
// upload configura todas las opciones: storage y fileFilter ya las hemos configuradas
// limits restringe el tamaño a 3 MB
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 3,
  },
});
/* Fin Multer */

/* Inicio Middlewares  */
// morgan cuenta con varias opciones, en nuestro caso hemos optado por 'dev'.
// express.json() es necesario para que el servidor pueda interpretar json en las peticiones
// express.static define si el acceso a un directorio es público y la ruta por donde ingresar
app.use(morgan('dev'));
app.use(express.json());
app.use('/uploads', express.static('uploads'));
/* Fin Middlewares  */

/* Inicio Auth */
// Esta función crear un usuario con los datos enviados en la petición a la ruta '/signup'
// Adicionalmente encripta el password con bcrypt, para guardarlo de forma segura.
app.post('/signup', (req, res) => {
  const {
    name, email, password, role,
  } = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hashPassword) => {
      const user = {
        id: users.length + 1,
        name,
        email,
        password: hashPassword,
        role,
      };
      users.push(user);
    });
  });

  return res.status(201).json({
    mensaje: 'Usuario creado',
  });
});
// Para dejar ingresar al usuario evaluamos los datos enviados en su petición
// Verificamos que corresponden con nuestro datos y emitimos un token
// El token guarda datos (payload)que verificaremos antes de permitir el acceso a una ruta protegida

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const userExist = users.find((user) => user.email === email);
  if (!userExist) {
    return res.status(400).json({
      mensaje: 'No existe usuario con esos datos',
    });
  }
  return bcrypt.compare(password, userExist.password, (err, result) => {
    if (!result) {
      return res.status(401).json({
        mensaje: 'Datos Incorrectos',
      });
    }
    if (result) {
      const payload = { role: userExist.role, id: userExist.id };
      const token = jwtoken.sign(payload, SECRET);
      return res.status(200).header('Authorization', token).json({
        mensaje: 'Datos correctos',
        token,
      });
    }
  });
});
// Dentro del token hemos guardado el rol del usuario
// Si el rol = 'Admin' le permite el acceso a las rutas solas para administradores
const isAdmin = (req, res, next) => {
  const token = req.header('Authorization');
  console.log(token);
  jwtoken.verify(token, SECRET, (err, decoded) => {
    if (decoded.role !== 'admin') {
      res.status(403).json({
        mensaje: 'No estás autorizado',
      });
    }
    if (decoded.role === 'admin') {
      next();
    }
  });
};
/* Fin Auth */

/* Inicio Funciones CRUD */
// Sólo los usuarios con rol administrador pueden consultar la lista de usuarios
// Para ello usamos la función 'isAdmin' justo antes de procesar la respuesta

// GET USERS LIST (PROTECTED)
app.get('/users', isAdmin, (req, res) => {
  if (!users.length > 0) {
    return res.status(200).json({
      mensaje: 'Aun no hay usuarios',
    });
  }
  return res.status(200).json({
    mensaje: 'Lista de Usuarios',
    total: users.length,
    datos: users.map((user) => ({
      id: user.id,
      nombre: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
    })),
  });
});
// READ LIST
app.get('/books', (req, res) => {
  if (!books.length > 0) {
    return res.status(200).json({ mensaje: 'Aún no hay libros en la librería' });
  }
  return res.status(200).json({
    mensaje: 'Lista de Libros',
    total: books.length,
    datos: {
      libros: books.map((book) => ({
        título: book.title,
        autor: book.author,
        año: book.year,
        portada: `${HOST}:${PORT}/${book.cover}`,
        petición: {
          tipo: 'GET',
          url: `${HOST}:${PORT}/books/${book.id}`,
        },
      })),
    },
  });
});
// READ DETAIL
app.get('/books/:id', (req, res) => {
  const book = books[req.params.id - 1];
  if (!book) {
    return res.status(404).json({
      mensaje: `No existe libro con ID: ${req.params.id}`,
    });
  }
  return res.status(200).json({
    mensaje: `Book with ID${req.params.id} Info`,
    datos: {
      título: book.title,
      autor: book.author,
      año: book.year,
      portada: `${HOST}:${PORT}/${book.cover}`,
      petición: {
        tipo: 'GET',
        url: `${HOST}:${PORT}/books/${book.id}`,
      },
    },
  });
});
// CREATE
app.post('/books', upload.single('cover'), (req, res) => {
  const { title, author, year } = req.body;
  if (!title || !author || !year || !req.file) {
    return res.status(400).json({ mensaje: 'Formulario Incompleto' });
  }
  const book = {
    id: books.length + 1,
    title,
    author,
    year,
    cover: req.file.path,
  };
  books.push(book);
  return res.status(201).json({
    mensaje: 'Libro creado',
    datos: {
      id: book.id,
      título: book.title,
      autor: book.author,
      año: book.year,
      portada: `${HOST}:${PORT}/${book.cover}`,
      petición: {
        tipo: 'GET',
        url: `${HOST}:${PORT}/books/${book.id}`,
      },
    },
  });
});
// UPDATE
app.put('/books/:id', (req, res) => {
  const i = req.params.id - 1;

  if (!books[i]) {
    return res.status(404).json({
      mensaje: `No existe libro con ID: ${req.params.id}`,
    });
  }
  const updatedBook = books.find((item) => item.id === parseInt(req.params.id, 10));


  const {
    title, author, year, cover,
  } = req.body;
  if (!title || !author || !year || !cover) {
    return res.status(400).json({ mensaje: 'Formulario Incompleto' });
  }
  updatedBook.title = title;
  updatedBook.author = author;
  updatedBook.year = year;
  updatedBook.cover = cover;
  return res.status(200).json({
    mensaje: `Libro con ID ${req.params.id} actualizado`,
    datos: {
      título: updatedBook.title,
      autor: updatedBook.author,
      año: updatedBook.year,
      portada: `${HOST}:${PORT}/${updatedBook.cover}`,
      petición: {
        tipo: 'GET',
        url: `${HOST}:${PORT}/books/${updatedBook.id}`,
      },
    },
  });
});
// DELETE
app.delete('/books/:id', (req, res) => {
  const i = req.params.id - 1;
  if (!books[i]) {
    return res.status(404).json({
      mensaje: `No existe libro con ID: ${req.params.id}`,
    });
  }
  const index = books.indexOf(req.params.id);
  books.splice(index, 1);
  return res.status(200).json({
    mensaje: `Libro con ID ${req.params.id} eliminado`,
  });
});
// Manejador de errores
app.use((req, res, next) => {
  const error = new Error('Página no encontrada');
  error.status = 404;
  next(error);
});
app.use((error, req, res) => res.status(error.status || 500).json({
  error: {
    mensaje: error.message || 'Ha ocurrido un error',
  },
}));
/* Fin Funciones CRUD */
/* Inicialización Servidor */
app.listen(PORT, () => {
  console.log(`Escuchando en ${HOST}:${PORT}`);
});
/* Fin - Inicialización Servidor */
