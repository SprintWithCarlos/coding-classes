/* eslint-disable no-underscore-dangle */
require('dotenv').config();
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../models/user');
// GET UsersList
const getUsersList = async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    message: 'Users List',
    data: users,
  });
};
// Sign Up

const signUp = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({
      message: 'User already exists in the database',
    });
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  user = await new User({ name, email, password: hashPassword });
  await user.save();
  const jwtToken = user.generateJWT();
  console.log(user.generateJWT());
  return res
    .status(201)
    .header('Authorization', jwtToken)
    .send({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: jwtToken,
    });
};
// Login
const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ message: 'Wrong email or password' });
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({
      message: 'Wrong email or password',
    });
  }

  const jwtToken = user.generateJWT();
  console.log(jwtToken);
  return res
    .status(200)
    .header('Authorization', jwtToken)
    .json({
      message: 'Correct user and password',
      data: {
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: jwtToken,
      },
    });
};
const profile = (req, res) => {
  res.status(200).send('Profile');
};
module.exports = {
  getUsersList,
  signUp,
  login,
  profile,
};
