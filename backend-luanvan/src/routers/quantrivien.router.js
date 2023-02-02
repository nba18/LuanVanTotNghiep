const router = require('express').Router()
const hockyController = require('../controllers/hocky.controller')


router.post('/themhocky', hockyController.themHocky);
router.get('/layhocky', hockyController.layHocky);
router.put('/khoahocky', hockyController.khoaHocky);
router.put('/mokhoahocky', hockyController.mokhoaHocky);

module.exports = router