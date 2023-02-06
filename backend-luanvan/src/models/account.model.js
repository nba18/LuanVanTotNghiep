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
    },
    {timestamps: true}
);
module.exports = mongoose.model("Account",account);
