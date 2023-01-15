const router = require('express').Router()
const hockyController = require('../controllers/hocky.controller')


router.post('/themhocky', hockyController.themHocky)


module.exports = router