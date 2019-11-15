const Post = require('../models/Post');
const User = require('../models/User');

exports.getPosts = (async (req, res) => {
  try {
    const posts = await Post.find().populate('author')
    res.status(200).json({
      message: 'Post List',
      count: posts.length,
      data: posts,
    });
  } catch (err) {
    console.error(err)
  }
});
exports.getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findOne({ id }).populate('author');
    if (!post) {
      return res.status(404).json({
        message: 'No Post with that ID',
      });
    }
    return res.status(200).json({
      message: `Post ID ${id}`,
      data: post,
    });
  } catch (err) {
    console.log(err)
  }
};

exports.createPost = async (req, res) => {
  try {
    const {
      title, excerpt, description, postImg, author
    } = req.body;

    const post = new Post({
      title,
      excerpt,
      description,
      postImg,
      author
    });
    const foundUser = await User.findOne({ _id: author })

    foundUser.posts.push(post._id)
    await foundUser.save()
    const result = await post.save(foundUser);

    res.status(201).json({
      message: 'Post Created',
      data: result,
    });
  } catch (err) {
    console.error(err)
  }
};

exports.updatePost = async (req, res) => {
  try {
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
  } catch (err) {
    console.error(err)
  }
};

// DELETE
exports.deletePost = async (req, res) => {
  const { id } = req.params;
  await Post.findOneAndDelete({ id });
  res.status(204).json({
    message: `Post with ID ${id} deleted`,
  });
};
