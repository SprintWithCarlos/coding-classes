const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  title: String,
  description: String,
  postImg: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });
module.exports = model('Post', postSchema);
