// const req = require("express/lib/request");
// const mongoose = require("mongoose");
// const SHA256 = require("sha256");

// const Document = require("../models/document.model");
// const Category = require("../models/category.model");
// const User = require("../models/user.model");
// const Loai = require("../models/loai");

// const setfile = (filename) => {
//     return "http://localhost:5000/files/" + filename
// }

// const adminController = {
//     addCategory: async (req, res) => {
//         const newCategory = Category({
//             matheloai: req.body.matheloai,
//             tentheloai: req.body.tentheloai,
//         })
//         const category = await newCategory.save();
//         if (!category) {
//             res.status(403).json("Thêm thất bại")
//         }
//         res.status(200).json(category)
//     },
//     addLoai: async (req, res) => {
//         const newLoai = Loai({
//             maloai: req.body.maloai,
//             tenloai: req.body.tenloai,
//         })
//         const loai = await newLoai.save();
//         if (!loai) {
//             res.status(403).json("Thêm thất bại")
//         }
//         res.status(200).json(loai)
//     },
//     //Thêm sản phẩm mới
//     addDocument: async (req, res) => {
//         const newDocument = new Document({
//             matailieu: req.body.matailieu,
//             matheloai: req.body.matheloai,
//             maloai: req.body.maloai,
//             tentailieu: req.body.tentailieu,
//             nguoithuchien: req.body.nguoithuchien,
//             nguoihuongdan: req.body.nguoihuongdan,
//             namthuchien: req.body.namthuchien,
//             nameDocument: req.file.originalname,
//             file: req.file
//         })
//         const document = await newDocument.save();
//         await Category.findOneAndUpdate(
//             { matheloai: req.body.matheloai },
//             {
//                 $push: {
//                     documentList: document.matailieu
//                 }
//             }
//         );
//         await Loai.findOneAndUpdate(
//             { maloai: req.body.maloai },
//             {
//                 $push: {
//                     documentList: document.matailieu
//                 }
//             }
//         );
//         if (!document) {
//             return res.status(500).json("Thêm thất bại")
//         }
//         return res.status(200).json(document)

//     },
//     xemTheloai: async (req, res) => {
//         const theloai = await Category.find()
//         if (!theloai) {
//             return res.status(403).json("Rỗng")
//         }
//         return res.status(200).json(theloai)
//     },
//     xemLoai: async (req, res) => {
//         const loai = await Loai.find()
//         if (!loai) {
//             return res.status(403).json("Rỗng")
//         }
//         return res.status(200).json(loai)
//     },
//     xemTailieuByMatheloai: async (req, res) => {
//         const tailieu = await Document.find({ matheloai: req.params.matheloai })
//         if (!tailieu) {
//             return res.status(403).json("Rỗng")
//         }
//         tailieu.forEach(item => {
//             item.nameDocument = setfile(item.nameDocument)
//         })
//         return res.status(200).json(tailieu)
//     },
//     xemTailieu: async (req, res) => {
//         const tailieu = await Document.find().sort({namthuchien: -1})
//         if (!tailieu) {
//             return res.status(403).json("Rỗng")
//         }
//         tailieu.forEach(item => {
//             item.nameDocument = setfile(item.nameDocument)
//         })
//         return res.status(200).json(tailieu)
//     },
//     xemTailieubyId: async (req, res) => {
//         const tailieu = await Document.findById(req.params.id)
//         if (!tailieu) {
//             return res.status(403).json("Rỗng")
//         }
//         tailieu.nameDocument = setfile(tailieu.nameDocument)
//         return res.status(200).json(tailieu)
//     },
//     upgradeDocument: async (req, res) => {
//         if (req.file != null) {
//             const document = await Document.findByIdAndUpdate(req.body.id,
//                 {
//                     matailieu: req.body.matailieu,
//                     matheloai: req.body.matheloai,
//                     tentailieu: req.body.tentailieu,
//                     nguoithuchien: req.body.nguoithuchien,
//                     nguoihuongdan: req.body.nguoihuongdan,
//                     namthuchien: req.body.namthuchien,
//                     nameDocument: req.file.originalname,
//                     file: req.file
//                 }
//             )
//             await Category.findOneAndUpdate(
//                 { matheloai: req.body.matheloai },
//                 {
//                     $push: {
//                         documentList: document.matailieu
//                     }
//                 }
//             )
//             if (!document) {
//                 res.status(403).json("Cập nhật thất bại")
//             }
//             res.status(200).json(document)
//         }
//         else {
//             const document = await Document.findByIdAndUpdate(req.body.id,
//                 {
//                     matailieu: req.body.matailieu,
//                     matheloai: req.body.matheloai,
//                     tentailieu: req.body.tentailieu,
//                     nguoithuchien: req.body.nguoithuchien,
//                     nguoihuongdan: req.body.nguoihuongdan,
//                     namthuchien: req.body.namthuchien,
//                 }
//             )
//             await Category.findOneAndUpdate(
//                 { matheloai: req.body.matheloai },
//                 {
//                     $push: {
//                         documentList: document.matailieu
//                     }
//                 }
//             )
//             if (!document) {
//                 res.status(403).json("Cập nhật thất bại")
//             }
//             res.status(200).json(document)
//         }
//     },
//     //Xóa sản phẩm
//     deleteDocument: async (req, res) => {
//         try {
//             const document = await Document.findByIdAndDelete(req.body.id)
//             if (!document) {
//                 return res.status(403).json("Không tồn tại sản phẩm")
//             }
//             await Category.findOneAndUpdate(
//                 { matheloai: req.body.matheloai },
//                 {
//                     $push: {
//                         documentList: document.matailieu
//                     }
//                 }
//             )
//             res.status(200).json("Thành công xóa !")
//         }
//         catch (err) {
//             res.status(500).json("Lỗi: ", err)
//         }
//     },
//     //Xem danh sách User
//     getUserGv: async (req, res) => {
//         const user = await User.find({ phanloai: "2" })
//         if (!user) {
//             return res.status(403).json("Rỗng")
//         }
//         return res.status(200).json(user)
//     },
//     getUserSv: async (req, res) => {
//         const user = await User.find({ phanloai: "1" })
//         if (!user) {
//             return res.status(403).json("Rỗng")
//         }
//         return res.status(200).json(user)
//     },
//     //Cập nhật User
//     updateUser: async (req, res) => {
//         const user = await User.findByIdAndUpdate(req.body.id,
//             {
//                 msnd: req.body.msnd,
//                 hoten: req.body.hoten,
//                 email: req.body.email,
//             }
//         )
//         if (!user) {
//             res.status(403).json("Cập nhật thất bại")
//         }
//         res.status(200).json(user)
//     },
//     //Xóa User
//     deleteUser: async (req, res) => {
//         console.log(req.body.id)
//         const user = await User.findByIdAndDelete(req.body.id)
//         if (!user) {
//             res.status(403).json("Không thể xóa")
//         }
//         res.status(200).json("Xóa thành công")
//     },
// }

// module.exports = adminController