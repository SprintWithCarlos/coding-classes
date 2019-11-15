const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
  title: String,
  plot: String,
  poster: String,
  year: Number
}, { timestamps: true });
module.exports = model('Movie', movieSchema);
