const jwt = require('jsonwebtoken');
const { users } = require('../models');

const SECRET_KEY = process.env.SECRET_KEY || 'secret';

const generateToken = (payload) => jwt.sign(payload, SECRET_KEY);

const login = async (email) => {
  const user = await users.findOne({
    where: { email },
    attributes: { exclude: ['password'] },
  });

  const { id, displayName, role } = user.dataValues;

  const token = generateToken({ id, displayName, role });
  return token;
};

module.exports = {
  login,
};