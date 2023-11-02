const router = require('express').Router();
const { postController } = require('../controllers');
const { tokenMiddleware } = require('../middlewares');

router.get(
  '/',
  tokenMiddleware.tokenIsValid,
  postController.getAllPosts,
);

module.exports = router;
