const User = require('../models/User');

exports.getUsers = async (req, res,next) => {
  try {
    const users = await User.find();
    if (users.length === 0) { return res.status(200).json({ message: 'There is no users yet!' }) }
    res.status(200).json({
      message: 'User List',
      count: users.length,
      data: users,
    })
  } catch (err) {
    const error = new Error(err)
    error.httpStatusCode = 500;
    next(error)
  }
};
exports.getUser = async (req, res) => {
  const id  = req.params.id;
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
    password,
    isAdmin
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
      password,
      isAdmin
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
  return res.status(200).json({
    message: `User with ${id} updated!`,
    data: updatedUser,
  });
};

// DELETE
exports.deleteUser =  async (req, res) => {
  const { id } = req.params;
  await User.findOneAndDelete({  _id: id  });
  res.status(204).json({
    message: `User with ID ${id} deleted`,
  });
};
