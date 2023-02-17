const req = require("express/lib/request");
const mongoose = require("mongoose");
const SHA256 = require("sha256");
const generator = require('generate-password');

const Account = require("../models/account.model");
const Sinhvien = require("../models/sinhvien.model");
const Giangvien = require("../models/giangvien.model");
const Truongkhoa = require("../models/truongkhoa.model");
const Quantrivien = require("../models/quantrivien.model");


const accountController = {
    //Tạo tài khoản
    register: async (req, res) => {
        const uniqueUser = await Account.findOne({ taikhoan: req.body.taikhoan })
        if (uniqueUser) {
            return res.status(300).json("User Name tồn tại !")
        }
        if (req.body.taikhoan.includes("ctu.edu.vn")) {
            const hashed = await SHA256(req.body.matkhau)
            const newAccount = Account({
                taikhoan: req.body.taikhoan,
                matkhau: hashed,
            })
            const account = await newAccount.save()
            if (req.body.taikhoan.includes("student")) {
                let a = req.body.taikhoan.search('@')
                let b = a - 8
                let ms = req.body.taikhoan.slice(b, a)
                const newSinhvien = Sinhvien({
                    mssv: ms,
                    hoten: req.body.taikhoan,
                    email: req.body.taikhoan,
                })
                const sinhvien = await newSinhvien.save()
                await Account.findByIdAndUpdate(
                    { _id: account._id },
                    {
                        id_nguoidung: sinhvien._id,
                        phanloai: sinhvien.phanloai
                    });
            } else {
                const newGiangvien = Giangvien({
                    hoten: req.body.taikhoan,
                    email: req.body.taikhoan,
                })
                const giangvien = await newGiangvien.save()
                await Account.findByIdAndUpdate(
                    { _id: account._id },
                    {
                        id_nguoidung: giangvien._id,
                        phanloai: giangvien.phanloai
                    });
            }
            if (!account) {
                return res.status(404).json("Đăng kí không thành công !")
            }
            return res.status(200).json(account)
        }
        else {
            return res.status(300).json("User Name  Không hợp lệ !")
        }
    },

    //Đăng nhập
    login: async (req, res) => {
        const account = await Account.findOne({ taikhoan: req.body.taikhoan })
        if (!account) {
            return res.status(404).json("Tài khoản không tồn tại.")
        }
        // const hashed = await SHA256(req.body.matkhau)
        const isPassword = (account.matkhau === req.body.matkhau) ? true : false
        if (!isPassword) {
            return res.status(404).json("Mật khẩu không chính xác.")
        }
        if (account.taikhoan && isPassword) {
            if (account.phanloai == 3) {
                console.log(account.id_nguoidung)
                const giangvien = await Giangvien.findById(account.id_nguoidung)
                console.log("xin chao")
                return res.status(200).json(giangvien)
            } else {
                if (account.phanloai == 4) {
                    const sinhvien = await Sinhvien.findById(account.id_nguoidung)
                    return res.status(200).json(sinhvien)
                } else {
                    if (account.phanloai == 2) {
                        const truongkhoa = await Truongkhoa.findById(account.id_nguoidung)
                        return res.status(200).json(truongkhoa)
                    } else {
                        if (account.phanloai == 1) {
                            const quantrivien = await Quantrivien.findById(account.id_nguoidung)
                            return res.status(200).json(quantrivien)
                        }
                    }
                }
            }
        }
        return res.status(500).json(err)
    }
}

module.exports = accountController