const router = require('express').Router();
const { userController } = require('../controllers');
const { userMiddleware, tokenMiddleware } = require('../middlewares');

const { displayNameValidator, emailValidatior, isUserExists, passwordValidator } = userMiddleware;

router.post(
  '/', 
  displayNameValidator, 
  emailValidatior, 
  isUserExists, 
  passwordValidator, 
  userController.createUser,
);

router.get(
  '/', 
  tokenMiddleware.tokenIsValid,
  userController.getAllUsers,
);

router.get(
  '/:id', 
  tokenMiddleware.tokenIsValid,
  userController.getUserById,
);

module.exports = router;