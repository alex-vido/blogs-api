const { postService } = require('../services');

const getAllPosts = async (_req, res) => {
  const posts = await postService.getAllPosts();
  return res.status(200).json(posts);
};

const getPost = async (req, res) => {
  const { id } = req.params;
  const post = await postService.getPost(id);
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(post);
};

module.exports = {
  getAllPosts,
  getPost,
};
