const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  id: Number,
  userId: Number,
  title: String,
  description: String,
  postImg: String,
});
module.exports = model('Post', postSchema);
