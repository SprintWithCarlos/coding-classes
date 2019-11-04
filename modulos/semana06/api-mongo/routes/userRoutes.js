const { Router } = require('express');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userControllers');
const isLoggedin = require('../middleware/auth');

const router = Router();

router
  .route('/users')
  .get(getUsers)
  .post(isLoggedin, createUser);

router
  .route('/users/:id')
  .get(getUser)
  .put(isLoggedin, updateUser)
  .delete(isLoggedin, deleteUser);
module.exports = router;
