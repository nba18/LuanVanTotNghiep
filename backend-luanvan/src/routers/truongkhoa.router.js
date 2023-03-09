const router = require('express').Router()
const detaiController = require('../controllers/detai.controller')


router.get('/laydsdetaichuaduyet', detaiController.laydsdetaichuaduyet);
router.put('/duyetdetai', detaiController.duyetdetai);
router.put('/yeucauchinhsua', detaiController.yeucauchinhsua);
router.put('/capnhathoidong', detaiController.capnhathoidong);

module.exports = router