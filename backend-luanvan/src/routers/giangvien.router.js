const router = require('express').Router();
const detaicontroller = require('../controllers/detai.controller');

router.post('/themdetai', detaicontroller.themDetai);
//lay toan bo de tai
router.get('/laydetai', detaicontroller.layDetai);
//lay de tai de xuat
router.get('/laydsdetai/:id', detaicontroller.laydsdetai);
//lay 1 de tai 
router.get('/lay1detai/:id', detaicontroller.lay1detai);

module.exports = router;