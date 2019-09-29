
// Data Import
const posts = require('../data/posts.json');
const users = require('../data/users.json');

exports.getList = (req, res) => {
  res.render('home', { posts });
};
exports.getDetail = (req, res) => {
  const { id } = req.params;
  res.render('details', { post: posts[id - 1] });
};
exports.getUser = (req, res) => {
  res.render('about', { users });
};
exports.getContact = (req, res) => {
  res.render('contact');
};

exports.getListAPI = (req, res) => {
  res.json({ posts });
};
