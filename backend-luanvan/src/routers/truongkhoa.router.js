const router = require('express').Router()
const detaiController = require('../controllers/detai.controller')


router.get('/laydsdetaichuaduyet', detaiController.laydsdetaichuaduyet);
router.put('/duyetdetai', detaiController.duyetdetai);
router.put('/yeucauchinhsua', detaiController.yeucauchinhsua);
router.post('/phancong',detaiController.phancongdetai)
router.put('/capnhathoidong', detaiController.capnhathoidong);
module.exports = router