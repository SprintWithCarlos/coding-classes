const { Router } = require('express');


const validation = require('../middleware/validator');
// TODO
// const {
//   signUp, login, profile,
// } = require('../controllers/authControllers');
const {
  signUp, login,
} = require('../controllers/authControllers');

// const isAdmin = require('../middleware/admin');

const router = Router();
router.route('/signup').post(validation, signUp)
router.route('/login').post(login);
// TODO
// .get('/profile', isLoggedin, profile);

module.exports = router;
