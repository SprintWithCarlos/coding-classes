const Movie = require('../models/Movie');


exports.getMovies = (async (req, res) => {
  try {
    const movies = await Movie.find().limit(10)
    res.status(200).json({
      message: 'Movie List',
      count: movies.length,
      data: movies,
    });
  } catch (err) {
    console.error(err)
  }
});
exports.getMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findOne({ id });
    if (!movie) {
      return res.status(404).json({
        message: 'No Movie with that ID',
      });
    }
    return res.status(200).json({
      message: `Movie ID ${id}`,
      data: movie,
    });
  } catch (err) {
    console.log(err)
  }
};

exports.createMovie = async (req, res) => {
  try {
    const {
      title, excerpt, description, movieImg, author
    } = req.body;

    const movie = new Movie({
      title,
      excerpt,
      description,
      movieImg,
      author
    });
    const foundUser = await User.findOne({ _id: author })

    foundUser.movies.push(movie._id)
    await foundUser.save()
    const result = await movie.save(foundUser);

    res.status(201).json({
      message: 'Movie Created',
      data: result,
    });
  } catch (err) {
    console.error(err)
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      userId, title, excerpt, description, movieImg,
    } = req.body;
    const updatedMovie = await Movie.findOneAndUpdate(
      { id },
      {
        id,
        userId,
        title,
        excerpt,
        description,
        movieImg,
      },
      {
        new: true,
      },
    );
    if (!updatedMovie) {
      return res.status(404).json({
        message: 'There is no Movie with that ID',
      });
    }
    return res.status(204).json({
      message: `Movie with ${id} updated!`,
      data: updatedMovie,
    });
  } catch (err) {
    console.error(err)
  }
};

// DELETE
exports.deleteMovie = async (req, res) => {
  const { id } = req.params;
  await Movie.findOneAndDelete({ id });
  res.status(204).json({
    message: `Movie with ID ${id} deleted`,
  });
};
