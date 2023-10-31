const loginService = require('../services/login.service');

const login = async (req, res) => {
  const { email } = req.body;
  const token = await loginService.login(email);
  res.status(200).json({ token });
};

module.exports = {
  login,
};