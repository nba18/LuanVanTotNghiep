const mongoose = require("mongoose");

const sinhvien = mongoose.Schema(
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
        phanloai: {
            type: Number,
            default: '4',
            //1: 
            //2:
            //3:
            //4:
        },
        danhsachdetai_muonlam: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Detai'
        }],
        giangvienhuongdan: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Giangvien'
        },

        
    },
    {timestamps: true}
);
module.exports = mongoose.model("Sinhvien",sinhvien);
