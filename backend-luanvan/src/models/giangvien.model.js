const mongoose = require("mongoose");

const giangvien = mongoose.Schema(
    {
        msnd: {
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
            //1: 
            //2:
            //3:
            //4:
        }
        
    },
    {timestamps: true}
);
module.exports = mongoose.model("Giangvien",giangvien);
