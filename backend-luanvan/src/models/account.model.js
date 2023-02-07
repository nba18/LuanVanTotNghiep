const mongoose = require("mongoose");

const account = mongoose.Schema(
    {
        taikhoan: {
            type: String,
            required: true,
            unique: true,
        },
        matkhau: {
            type: String,
            required: true,
        },
        id_nguoidung: {
            type: String,
        },
        phanloai: {
            type: Number,
            //1: quản trị viên
            //2: trưởng khoa
            //3: giảng viên
            //4: sinh viên
        },
    },
    {timestamps: true}
);
module.exports = mongoose.model("Account",account);
