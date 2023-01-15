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
        }],
        trangthai: {
            type: Boolean,
            default: false,
            //Trạng thái false: Học kỳ có thể chỉnh sữa.
            //Trạng thái true: Học kỳ đã khóa không thể chỉnh sữa.
        }
    },
    { timestamps: true }
);
module.exports = mongoose.model("Hocky", hocky);
