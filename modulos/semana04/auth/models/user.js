/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});


userSchema.methods.generateJWT = () => jwt.sign({ _id: this._id, name: this.name, isAdmin: this.isAdmin }, process.env.SECRET);
const User = mongoose.model('user', userSchema);
module.exports = User;
