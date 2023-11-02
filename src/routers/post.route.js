const router = require('express').Router();
const { postController } = require('../controllers');
const { tokenMiddleware } = require('../middlewares');

router.get(
  '/',
  tokenMiddleware.tokenIsValid,
  postController.getAllPosts,
);

router.get(
  '/:id',
  tokenMiddleware.tokenIsValid,
  postController.getPost,
);

module.exports = router;
