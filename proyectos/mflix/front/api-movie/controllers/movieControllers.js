const Movie = require('../models/Movie');


exports.getMovies = (async (req, res) => {
  const currentPage = req.query.page || 1
  try {
    const perPage = 20;
    const movies = await Movie.find()
    .skip((currentPage -1) * perPage)
    .limit(perPage)
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
    const movie = await Movie.findOne({ _id: id });
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
      title,  
      plot,
      poster,
      year    } = req.body;

    const movie = new Movie({
      title,
      plot,
      poster,
      year
    });
    
    const result = await movie.save();

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
      title,
      plot,
      poster,
      year    } = req.body;
    const updatedMovie = await Movie.findOneAndUpdate(
      { _id: id },
      {
        id,
        title,
        plot,
        poster,
        year
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
  await Movie.findOneAndDelete({ _id: id });
  res.status(204).json({
    message: `Movie with ID ${id} deleted`,
  });
};
