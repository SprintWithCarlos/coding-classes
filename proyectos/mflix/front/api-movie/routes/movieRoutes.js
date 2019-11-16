const { Router } = require('express');
const {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} = require('../controllers/movieControllers');

const router = Router();

router
  .route('/movies')
  .get(getMovies)
  .post(createMovie);

router
  .route('/movies/:id')
  .get(getMovie)
  .put(updateMovie)
  .delete(deleteMovie);
module.exports = router;
