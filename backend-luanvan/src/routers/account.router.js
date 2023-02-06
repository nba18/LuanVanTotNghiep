const router = require('express').Router();
const accountController = require('../controllers/account.controller');


// router.post('/login', userController.login)
router.post('/register', accountController.register);


module.exports = router;