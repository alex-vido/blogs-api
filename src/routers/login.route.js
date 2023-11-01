const router = require('express').Router();
const { loginController } = require('../controllers');
const { loginMiddleware } = require('../middlewares');

router.post('/', loginMiddleware, loginController);

module.exports = router;