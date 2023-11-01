const { userService } = require('../services');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const token = await userService.createUser(displayName, email, password, image);
  if (token.message) return res.status(token.status).json({ message: token.message });
  return res.status(201).json({ token });
};

module.exports = {
  createUser,
};