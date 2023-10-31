const jwt = require('jsonwebtoken');
const users = require('../models');

const SECRET_KEY = process.env.SECRET_KEY || 'secret';

const authenticate = (req, res, next) => {
  const { authorization } = req.headers;
  const { email, password } = authorization;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const userLocated = users.find((u) => u.email === email);
  
  if (!userLocated || userLocated.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const user = jwt.verify(authorization, SECRET_KEY);

  req.user = user;
  next();
};

module.exports = authenticate;
