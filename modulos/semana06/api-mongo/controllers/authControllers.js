const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/User');


// Sign Up

exports.signUp = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const {
    id,
    name,
    avatar,
    thumbnail,
    email,
    password,
  } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({
      message: 'User already exists in the database',
    });
  }
  const salt = await bcrypt.genSalt(10);

  const hashPassword = await bcrypt.hash(password, salt);
  console.log(hashPassword);
  user = await new User({
    id,
    name,
    avatar,
    thumbnail,
    email,
    password: hashPassword,
  });

  await user.save();
  const jwtToken = user.generateJWT();
  return res
    .status(201)
    .header('Authorization', jwtToken)
    .json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: jwtToken,
    });
};
// Login
exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) { return res.status(400).json({ message: 'Wrong email or password' }); }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({
      message: 'Wrong email or password',
    });
  }

  const jwtToken = user.generateJWT();
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
// TODO
// exports.profile = (req, res) => {
//   res.status(200).send('Profile');
// };
