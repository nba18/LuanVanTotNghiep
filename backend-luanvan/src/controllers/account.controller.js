const req = require("express/lib/request");
const mongoose = require("mongoose");
const SHA256 = require("sha256");

const mailer = require("../config/mailer");
var generator = require('generate-password');



// const Document = require("../models/document.model");
// const Category = require("../models/category.model")
const User = require("../models/quantrivien.model");
const Account = require("../models/account.model");
const Sinhvien = require("../models/sinhvien.model");
const Giangvien = require("../models/giangvien.model");
const accountController = {
    //Tạo tài khoản
    register: async (req, res) => {
        const uniqueUser = await Account.findOne({ taikhoan: req.body.taikhoan })
        if (uniqueUser) {
            return res.status(300).json("User Name tồn tại !")
        }
        else {
            const hashed = await SHA256(req.body.matkhau)
            const newAccount = Account({
                taikhoan: req.body.taikhoan,
                matkhau: hashed,
            })
            const account = await newAccount.save()
            if (req.body.taikhoan.includes("student")) {
                const newSinhvien = Sinhvien({
                    hoten: req.body.taikhoan,
                    email: req.body.taikhoan,
                })
                console.log("sinhvien",req.body.taikhoan)
                const account2 = await newSinhvien.save()
            } else {
                const newGiangvien = Giangvien({
                    hoten: req.body.taikhoan,
                    email: req.body.taikhoan,
                })
                console.log(req.body.taikhoan)
                const account1 = await newGiangvien.save()
            } 
            if (!account) {
                return res.status(404).json("Đăng kí không thành công !")
            }
            return res.status(200).json(account)
        }
    },
    //Đăng nhập
    login: async (req, res) => {
        const user = await User.findOne({ taikhoan: req.body.taikhoan })
        if (!user) {
            return res.status(404).json("Tài khoản không tồn tại.")
        }
        const hashed = await SHA256(req.body.matkhau)
        const isPassword = (user.matkhau === hashed) ? true : false
        if (!isPassword) {
            return res.status(404).json("Mật khẩu không chính xác.")
        }
        if (user.taikhoan && isPassword) {
            return res.status(200).json(user)
        }
        return res.status(500).json(err)
    },
    //Xem tất cả sản phẩm
    // viewAll: async(req, res) => {
    //     const product = await Product.find()
    //     if (!product) {
    //         return res.status(404).json("Không tìm thấy sản phẩm")
    //     }
    //     return res.status(200).json(product)
    // },
    //Tìm một sản phẩm theo tên
    viewDetail: async (req, res) => {
        const product = await Product.findOne({ id: req.params })
        if (!product) {
            return res.status(404).json("Không tìm thấy sản phẩm")
        }
        return res.status(200).json(product)
    },
    cart: async (req, res) => {
        res.send('cart')
    },
}

module.exports = accountController