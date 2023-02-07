const mongoose = require("mongoose");

const truongkhoa = mongoose.Schema(
    {
        msnd: {
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
