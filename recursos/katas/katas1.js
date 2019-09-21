const passwordValidator = (password) => (password.match(/^(?=.*\d)(?=.*[a-z])([a-z0-9]{3,20})$/i)
  ? 'VALID'
  : 'INVALID');


module.exports = passwordValidator;
