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
  // .post(isLoggedin, createUser);
  .post(createUser);

router
  .route('/users/:id')
  .get(getUser)
  .put( updateUser)
  .delete( deleteUser);

  
  router.get('/users', getUsers)
  router.post('/users', createUser)
module.exports = router;
