const User = require('../models/User');
const { Schema } = require('mongoose');
exports.getUsers = async (req, res) => {
  const users = await User.find()
  res.status(200).json({
    message: 'User List',
    count: users.length,
    data: users,
  });
};
exports.getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ _id: id });
  if (!user) {
    return res.status(404).json({
      message: 'No User with that ID',
    });
  }
  return res.status(200).json({
    message: `User ID ${id}`,
    data: user,
  });
};

exports.createUser = async (req, res) => {
  const {
    firstName,
    lastName,
    username,
    avatar,
    thumbnail,
    email,
    password
  } = req.body;
  const user = new User({
    firstName,
    lastName,
    username,
    avatar,
    thumbnail,
    email,
    password
  });

  const result = await user.save();
  res.status(201).json({
    message: 'User Created',
    data: result,
  });
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const {
    firstName,
    lastName,
    username,
    avatar,
    thumbnail,
    email,
    password
  } = req.body;
  const updatedUser = await User.findOneAndUpdate(
    {  _id: id  },
    {
      firstName,
      lastName,
      username,
      avatar,
      thumbnail,
      email,
      password
    },
    {
      new: true,
    },
  );
  if (!updatedUser) {
    return res.status(404).json({
      message: 'There is no User with that ID',
    });
  }
  return res.status(204).json({
    message: `User with ${id} updated!`,
    data: updatedUser,
  });
};

// DELETE
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findOneAndDelete({  _id: id  });
  res.status(204).json({
    message: `User with ID ${id} deleted`,
  });
};
