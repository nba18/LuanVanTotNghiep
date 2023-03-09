const router = require('express').Router()
const detaiController = require('../controllers/detai.controller');
const luanvanController = require('../controllers/luanvan.controller');


router.get('/laydsdetaichuaduyet', detaiController.laydsdetaichuaduyet);
router.put('/duyetdetai', detaiController.duyetdetai);
router.put('/yeucauchinhsua', detaiController.yeucauchinhsua);
router.post('/phancong',detaiController.phancongdetai)
// router.put('/capnhathoidong', detaiController.capnhathoidong);
router.put('/capnhathoidong', luanvanController.capnhathoidong);
module.exports = router