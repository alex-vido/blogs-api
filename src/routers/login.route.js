const router = require('express').Router();
const { loginController } = require('../controllers');
const authenticate = require('../middlewares/authenticate');

router.post('/', authenticate, loginController);

module.exports = router;