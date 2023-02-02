const mongoose = require("mongoose");

const quantrivien = mongoose.Schema(
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
        phanloai: {
            type: Number,
            default: '1',
            //1: 
            //2:
            //3:
            //4:
        }
        
    },
    {timestamps: true}
);
module.exports = mongoose.model("Quantrivien",quantrivien);
