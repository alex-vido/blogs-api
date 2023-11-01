const { loginService } = require('../services');

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await loginService.login(email, password);
  console.log(token);
  if (!token) return res.status(400).json({ message: 'Invalid fields' });
  return res.status(200).json({ token });
};

module.exports = login;