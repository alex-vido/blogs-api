const generateToken = require('../utils/generateToken');
const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const user = await User.create({ displayName, email, password, image });
  console.log(user.dataValues);
  const token = generateToken(user.dataValues);
  return token;
};

module.exports = {
  createUser,
};