const router = require('express').Router();
const { categoryController } = require('../controllers');
const { categoryMiddleware, tokenMiddleware } = require('../middlewares');

router.post(
  '/',
  tokenMiddleware.tokenIsValid,
  categoryMiddleware.nameValidator,
  categoryController.createCategory,
);

module.exports = router;