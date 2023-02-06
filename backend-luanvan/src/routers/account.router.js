const router = require('express').Router();
const accountController = require('../controllers/account.controller');


// router.post('/login', userController.login)
router.post('/dangky', accountController.register);


module.exports = router;