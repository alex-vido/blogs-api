const { postService } = require('../services');

const getAllPosts = async (_req, res) => {
  const posts = await postService.getAllPosts();
  return res.status(200).json(posts);
};

module.exports = {
  getAllPosts,
};
