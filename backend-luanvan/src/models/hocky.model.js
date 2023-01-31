const mongoose = require("mongoose");

const hocky = mongoose.Schema(
    {
        hocky: {
            type: String,
            required: true,
        },
        nambatdau: {
            type: Number,
            require: true,
        },
        namketthuc: {
            type: Number,
            require: true,
        },
        detaiList: [{
            type: String,
            //Danh sách đề tài.
        }],
        trangthai: {
            type: Boolean,
            default: true,
            //Trạng thái true: Học kỳ có thể chỉnh sữa.
            //Trạng thái false: Học kỳ đã khóa không thể chỉnh sữa.
        }
    },
    { timestamps: true }
);
module.exports = mongoose.model("Hocky", hocky);
