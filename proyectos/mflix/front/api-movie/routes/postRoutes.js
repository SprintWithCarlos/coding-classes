const { Router } = require('express');
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/postControllers');

const router = Router();

router
  .route('/posts')
  .get(getPosts)
  .post(createPost);

router
  .route('/posts/:id')
  .get(getPost)
  .put(updatePost)
  .delete(deletePost);
module.exports = router;
