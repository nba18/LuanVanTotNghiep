const router = require('express').Router();
const accountController = require('../controllers/account.controller');
const detaiController = require('../controllers/detai.controller')
const { route } = require('./giangvien.router');


router.post('/dangnhap', accountController.login);
router.post('/dangky', accountController.register);
router.put('/chondetai',detaiController.chondetai)
router.get('/laydsdetaidaduyet', detaiController.laydsdetaidaduyet)



module.exports = router;