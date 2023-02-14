const mongoose = require("mongoose");

const quantrivien = mongoose.Schema(
    {
        msnd: {
            type: String,
        },
        hoten: {
            type: String,
            default:"Admin"
        }, 
        phanloai: {
            type: Number,
            default: '1',
            //1: quản trị viên
            //2: trưởng khoa
            //3: giảng viên
            //4: sinh viên
        },
        
    },
    {timestamps: true}
);
module.exports = mongoose.model("Quantrivien",quantrivien);
