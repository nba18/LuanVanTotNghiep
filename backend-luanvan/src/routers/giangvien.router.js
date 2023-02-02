const router = require('express').Router()
const detaicontroller = require('../controllers/detai.controller')

router.post('/themdetai', detaicontroller.themDetai);


module.exports = router 