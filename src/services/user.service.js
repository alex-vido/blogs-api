const generateToken = require('../utils/generateToken');
const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const user = await User.create({ displayName, email, password, image });
  const token = generateToken(user.dataValues);
  return token;
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  if (!user) return { status: 404, message: 'User does not exist' };
  return user;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};