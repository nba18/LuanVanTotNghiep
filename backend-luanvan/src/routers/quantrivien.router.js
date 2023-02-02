const router = require('express').Router()
const hockyController = require('../controllers/hocky.controller')


router.post('/themhocky', hockyController.themHocky)
router.get('/layhocky', hockyController.layHocky)

module.exports = router