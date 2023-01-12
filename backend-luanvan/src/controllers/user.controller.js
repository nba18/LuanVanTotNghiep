const req = require("express/lib/request");
const mongoose = require("mongoose");
const SHA256 = require("sha256");

// const Document = require("../models/document.model");
// const Category = require("../models/category.model")
const User = require("../models/user.model");

const userController = {
    //Tạo tài khoản
    register: async (req, res) => {
        const hashed = await SHA256(req.body.matkhau)
        const uniqueUser = await User.findOne({ taikhoan: req.body.taikhoan })
        if (uniqueUser) {
            return res.status(300).json("User Name tồn tại !")
        }
        else {
            const newUser = User({
                taikhoan: req.body.taikhoan,
                matkhau: hashed,
                msnd: req.body.msnd,
                hoten: req.body.hoten,
                email: req.body.email,
                phanloai: req.body.phanloai
            })
            const user = await newUser.save()
            if (!user) {
                return res.status(404).json("Đăng kí không thành công !")
            }
            return res.status(200).json(user)
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

module.exports = userController