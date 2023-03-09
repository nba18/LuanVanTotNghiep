const mongoose = require("mongoose");

const truongkhoa = mongoose.Schema(
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
        phanloai: {
            type: Number,
            default: '2',
            //1: quản trị viên
            //2: trưởng khoa
            //3: giảng viên
            //4: sinh viên
        },
        
    },
    {timestamps: true}
);
module.exports = mongoose.model("Truongkhoa",truongkhoa);
