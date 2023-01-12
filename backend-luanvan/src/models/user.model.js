const mongoose = require("mongoose");

const user = mongoose.Schema(
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
            default: '1',
        }
        
    },
    {timestamps: true}
);
module.exports = mongoose.model("User",user);
