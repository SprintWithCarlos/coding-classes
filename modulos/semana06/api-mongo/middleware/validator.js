const { check } = require('express-validator');

const validation = [
  check('email').isEmail(),
  check('password').isLength({ min: 5 }),
];
module.exports = validation;
