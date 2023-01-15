const mongoose = require("mongoose");

const detai = mongoose.Schema(
    {
        tendetai: {
            type: String,
            required: true,
        },
        giangvien: {
            type: String,
            require: true,
        },
        hocky: {
            type: String,
            require: true,
        },
        mota: {
            type: String,
        },
        trangthai: {
            type: Number,
            default: 1,
            //Trạng thái 1: Đang chờ xét duyệt.
            //Trạng thái 2: Đã xét duyệt.
            //Trạng thái 3: Yêu cầu chỉnh sữa.
            //Trạng thái 4: Đã khóa.
        }
    },
    { timestamps: true }
);
module.exports = mongoose.model("Detai", detai);
