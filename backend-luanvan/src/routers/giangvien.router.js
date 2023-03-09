const router = require('express').Router();
const detaicontroller = require('../controllers/detai.controller');
const luanvanController = require('../controllers/luanvan.controller');

router.post('/themdetai', detaicontroller.themDetai);
//lay toan bo de tai
router.get('/laydetai', detaicontroller.layDetai);
//lay de tai de xuat
router.get('/laydsdetai/:id', detaicontroller.laydsdetai);
//laydetaitonghop
router.get('/laydetaitonghop', detaicontroller.laydsdetatonghop);
router.get('/laydsluanvan', luanvanController.layLuanvan);
//lay 1 de tai 
router.get('/lay1detai/:id', detaicontroller.lay1detai);
router.put('/capnhatdetai/', detaicontroller.capnhatdetai);
router.put('/capnhatluanvan/', luanvanController.capnhatluanvan);

module.exports = router;