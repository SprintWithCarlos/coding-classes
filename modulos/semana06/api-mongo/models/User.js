const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
  id: Number,
  name: String,
  avatar: String,
  thumbnail: String,
  email: String,
  password: String,
});
userSchema.methods.generateJWT = function () {
  return jwt.sign(
    { id: this.id, name: this.name, isAdmin: this.isAdmin },
    process.env.SECRET_JWT,
  );
};
module.exports = mongoose.model('User', userSchema);
