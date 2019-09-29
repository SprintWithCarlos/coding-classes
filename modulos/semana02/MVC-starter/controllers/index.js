
// Data Import
const posts = require('../data/posts.json');


exports.getDetail = (req, res) => {
  const { id } = req.params;
  res.render('details', { post: posts[id - 1] });
};
exports.getUser = (req, res) => {
  const { link } = req.params;
  res.send('user-profile', {});
};
exports.getList = (req, res) => {
  res.render('home', { posts });
};
exports.getListAPI = (req, res) => {
  res.json({ posts });
};
