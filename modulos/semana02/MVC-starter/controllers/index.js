// Data Import
const bcrypt = require('bcrypt');
const posts = require('../data/posts.json');
const users = require('../data/users.json');

const datos = require('../data/datos');

const { usuarios, articulos, sesiones } = datos;
exports.getList = (req, res) => {
  res.render('home', { posts });
};
exports.getDetail = (req, res) => {
  const { id } = req.params;
  res.render('details', { post: posts[id - 1] });
};
exports.getContact = (req, res) => {
  res.render('contact', { users });
};

exports.getAbout = (req, res) => {
  res.render('about', { users });
};
exports.getCategorias = (req, res) => {
  if (!req.session.isLoggedIn) return res.status(403).send('No estás autorizado');
  res.render('categorias', { posts });
};
exports.getUser = (req, res) => {
  res.render('about', { users });
};

exports.getListAPI = (req, res) => {
  res.json({ posts });
};
exports.getDetailAbout = (req, res) => {
  const { id } = req.params;
  res.render('aboutdetail', { user: users[id - 1] });
};
exports.getSignup = (req, res) => {
  res.render('signup');
};
exports.postSignup = (req, res) => {
  const {
    name, email, password, role,
  } = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hashPassword) => {
      const user = {
        id: usuarios.length + 1,
        name,
        email,
        password: hashPassword,
        role,
      };
      usuarios.push(user);
      console.log(usuarios);
      res.redirect('/');
    });
  });
};
exports.getLogin = (req, res) => {
  res.render('login');
};
exports.postLogin = (req, res) => {
  const { email, password } = req.body;
  const userExist = usuarios.find((user) => user.email === email);
  console.log(userExist);
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
      req.session.isLoggedIn = true;
      req.session.user = userExist;
      sesiones.push({ sessionID: req.sessionID });
      console.log(sesiones);
      return res.redirect('/');
    }
  });
};

exports.getLibros = (req, res) => {
  res.render('libros', { libros });
};
