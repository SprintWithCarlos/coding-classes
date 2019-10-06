// Data Import
const posts = require("../data/posts.json");
const users = require("../data/users.json");
const post = posts[1];
exports.getList = (req, res) => {
  res.render("home", { posts });
};
exports.getDetail = (req, res) => {
  const { id } = req.params;
  res.render("details", { post: posts[id - 1] });
};
exports.getContact = (req, res) => {
  res.render("contact", { users });
};

exports.getAbout = (req, res) => {
  res.render("about", { users });
};
exports.getCategorias = (req, res) => {
  res.render("categorias", { posts });
};
exports.getUser = (req, res) => {
  res.render("about", { users });
};

exports.getListAPI = (req, res) => {
  res.json({ posts });
};
exports.getDetailAbout = (req, res) => {
  const { id } = req.params;
  res.render("aboutdetail", { user: users[id - 1] });
};
