const mongoose = require("mongoose");

const giangvien = mongoose.Schema(
    {
        msgv: {
            type: String,
        },
        hoten: {
            type: String,
        },
        email: {
            type: String,
        },
        danhsachdetai_dexuat: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Detai'
        }],
        danhsachsinhvien_huongdan: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Sinhvien'
        }],
        phanloai: {
            type: Number,
            default: '3',
            //1: quản trị viên
            //2: trưởng khoa
            //3: giảng viên
            //4: sinh viên
        },
        
    },
    {timestamps: true}
);
module.exports = mongoose.model("Giangvien",giangvien);
