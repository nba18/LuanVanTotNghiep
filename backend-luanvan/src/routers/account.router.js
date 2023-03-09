const router = require('express').Router();
const accountController = require('../controllers/account.controller');
const detaiController = require('../controllers/detai.controller')



router.post('/dangnhap', accountController.login);
router.post('/dangky', accountController.register);
router.put('/chondetai',detaiController.chondetai)
router.get('/laydsdetaidaduyet', detaiController.laydsdetaidaduyet)
router.get('/laydanhsachdetaimuonlam/:id',accountController.danhsachdetai_muonlam)
router.get('/sinhvien', accountController.dssinhvien)

module.exports = router;