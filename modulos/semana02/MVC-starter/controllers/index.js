
// Data Import
const posts = require('../data/posts.json');

exports.getList = (
  (req, res) => {
    res.render('home', { posts });
  }
);
exports.getDetail = (req, res) => {
  const { id } = req.params;
  res.render('details', { post: posts[id - 1] });
};
