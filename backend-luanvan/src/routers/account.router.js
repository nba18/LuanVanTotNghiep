const router = require('express').Router();
const accountController = require('../controllers/account.controller');
const { route } = require('./giangvien.router');


router.post('/dangnhap', accountController.login);
router.post('/dangky', accountController.register);


module.exports = router;