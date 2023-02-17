const mongoose = require("mongoose");

const sinhvien = mongoose.Schema(
    { 
        mssv: {
            type: String,
        },
        hoten: {
            type: String,
        },
        email: {
            type: String,
        },
        phanloai: {
            type: Number,
            default: '4',
            //1: quản trị viên
            //2: trưởng khoa
            //3: giảng viên
            //4: sinh viên
        },
        danhsachdetai_muonlam: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Detai'
        }],
        danhandetai: {
            type: Boolean,
            default: false
        }

        
    },
    {timestamps: true}
);
module.exports = mongoose.model("Sinhvien",sinhvien);
