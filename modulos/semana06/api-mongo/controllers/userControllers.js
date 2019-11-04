const User = require('../models/User');

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    message: 'User List',
    data: users,
  });
};
exports.getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ id });
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
    id,
    name,
    avatar,
    thumbnail,
    email,
  } = req.body;
  const user = new User({
    id,
    name,
    avatar,
    thumbnail,
    email,
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
    name, avatar, thumbnail, email,
  } = req.body;
  const updatedUser = await User.findOneAndUpdate(
    { id },
    {
      name,
      avatar,
      thumbnail,
      email,
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
  await User.findOneAndDelete({ id });
  res.status(204).json({
    message: `User with ID ${id} deleted`,
  });
};
