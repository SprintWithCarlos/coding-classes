const Post = require('../models/Post');

exports.getPosts = (async (req, res) => {
  const posts = await Post.find();
  res.status(200).json({
    message: 'Post List',
    data: posts,
  });
});
exports.getPost = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findOne({ id });
  if (!post) {
    return res.status(404).json({
      message: 'No Post with that ID',
    });
  }
  return res.status(200).json({
    message: `Post ID ${id}`,
    data: post,
  });
};

exports.createPost = async (req, res) => {
  const {
    id, userId, title, excerpt, description, postImg,
  } = req.body;
  const post = new Post({
    id,
    userId,
    title,
    excerpt,
    description,
    postImg,
  });
  const result = await post.save();
  res.status(201).json({
    message: 'Post Created',
    data: result,
  });
};

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const {
    userId, title, excerpt, description, postImg,
  } = req.body;
  const updatedPost = await Post.findOneAndUpdate(
    { id },
    {
      id,
      userId,
      title,
      excerpt,
      description,
      postImg,
    },
    {
      new: true,
    },
  );
  if (!updatedPost) {
    return res.status(404).json({
      message: 'There is no Post with that ID',
    });
  }
  return res.status(204).json({
    message: `Post with ${id} updated!`,
    data: updatedPost,
  });
};

// DELETE
exports.deletePost = async (req, res) => {
  const { id } = req.params;
  await Post.findOneAndDelete({ id });
  res.status(204).json({
    message: `Post with ID ${id} deleted`,
  });
};
