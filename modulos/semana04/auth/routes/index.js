const { Router } = require('express');

const router = Router();
const validation = require('../middleware/validator');
const {
  getUsersList, signUp, login, profile,
} = require('../controllers/');
const isLoggedin = require('../middleware/auth');
const isAdmin = require('../middleware/admin');

router
  .get('/users', [isLoggedin, isAdmin], getUsersList)
  .post('/signup', validation, signUp)
  .post('/login', validation, login)
  .get('/profile', isLoggedin, profile);

module.exports = router;
