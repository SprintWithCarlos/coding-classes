const {Schema, model} = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator')
const jwt = require('jsonwebtoken');

const userSchema = Schema({
  firstName: String,
  lastName: String,
  username: String,
  avatar: String,
  thumbnail: String,
  email: String,
  password: String,
  isAdmin: Boolean,
  posts: [
    { type: Schema.Types.ObjectId, ref: 'Post' }
  ]
}, { timestamps: true });
userSchema.methods.generateJWT = function () {
  return jwt.sign(
    { id: this.id, isAdmin: this.isAdmin },
    process.env.SECRET_JWT,
  );
};
// UserSchema.plugin(uniqueValidator, { message: 'ya existe en la base de datos' });
module.exports = model('User', userSchema);
