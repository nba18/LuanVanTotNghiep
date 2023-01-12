// const router = require('express').Router()
// const adminController = require('../controllers/admin.controller')

// const multer = require('multer')
// const res = require('express/lib/response')
// const req =  require('express/lib/request')
// const { route } = require('./user.router')
// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, 'files')
//     },
//     filename: function(req, file, cb){
//         cb(null, file.originalname)
//     }
// })
// const upload = multer({storage: storage})


// router.post('/addCategory',adminController.addCategory)
// router.get('/getCategory',adminController.xemTheloai)
// router.post('/addDocument', upload.single('file'),adminController.addDocument)
// router.get('/getTailieuByMatheloai/:matheloai',adminController.xemTailieuByMatheloai)
// router.get('/getDocument',adminController.xemTailieu)
// router.delete('/deleteDocument',adminController.deleteDocument)
// router.post('/upgradeDocumnet',upload.single('file'),adminController.upgradeDocument)
// router.get('/getDocumentbyId/:id',adminController.xemTailieubyId)
// router.get('/getUserGv',adminController.getUserGv)
// router.get('/getUserSv',adminController.getUserSv)
// router.delete('/deleteUser',adminController.deleteUser)
// router.post('/upgradeUser',adminController.updateUser)

// router.post('/addLoai',adminController.addLoai)
// router.get('/getLoai',adminController.xemLoai)

// module.exports = router 