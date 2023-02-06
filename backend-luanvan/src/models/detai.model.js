const mongoose = require("mongoose");

const detai = mongoose.Schema(
    {
        tendetai: {
            type: String,
            required: true,
        },
        tentienganh: {
            type: String,
        },
        giangvien: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Giangvien'
        },
        hocky: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hocky'
        },
        mota_kienthuc: {
            type: String,
            //Kiến thức yêu cầu.
        },
        mota_gioithieu: {
            type: String,
            //Giới thiệu.
        },
        mota_yeucau: {
            type: String,
            //Mục tiêu và yêu cầu chức năng.
        },
        mota_tailieu: {
            type: String,
            //Tài liệu tham khảo.
        },
        mota_khac:{
            type: String,
            //Mô tả khác.
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
