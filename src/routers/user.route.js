const router = require('express').Router();
const { userController } = require('../controllers');
const { userMiddleware } = require('../middlewares');

const { displayNameValidator, emailValidatior, isUserExists, passwordValidator } = userMiddleware;

router.post(
  '/', 
  displayNameValidator, 
  emailValidatior, 
  isUserExists, 
  passwordValidator, 
  userController.createUser,
);

module.exports = router;