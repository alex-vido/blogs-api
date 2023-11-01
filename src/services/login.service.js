const jwt = require('jsonwebtoken');
const { User } = require('../models');

const SECRET_KEY = process.env.SECRET_KEY || 'secret';

const generateToken = (payload) => jwt.sign(payload, SECRET_KEY);

const login = async (email, password) => {
  const user = await User.findOne({
    where: { email, password },
    attributes: { exclude: ['email', 'password'] },
  });

  const { id, displayName } = user.dataValues;

  const token = generateToken({ id, displayName });
  return token;
};

module.exports = {
  login,
};