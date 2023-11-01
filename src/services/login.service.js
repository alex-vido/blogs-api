const jwt = require('jsonwebtoken');
const { User } = require('../models');

const SECRET_KEY = process.env.JWT_SECRET || 'secret';

const generateToken = (payload) => jwt.sign(payload, SECRET_KEY);

const login = async (email, password) => {
  const user = await User.findOne({
    where: { email, password },
    attributes: { exclude: ['email', 'password'] },
  });

  if (!user) return null;

  const { id, displayName } = user.dataValues;

  const token = generateToken({ id, displayName });
  return token;
};

module.exports = {
  login,
};