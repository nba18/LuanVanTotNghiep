const mongoose = require("mongoose");

const luanvan = mongoose.Schema(
    {
        tenluanvantiengviet: {
            type: String,
            required: true,
        },
        tenluanvantienganh: {
            type: String,
            default: ""
        },
        giangvien: {
            type: String,
            default: ''
        },
        sinhvien: {
            type: String,
            default: ''
        },
        mssv: {
            type: String,
        },
        hocky: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hocky'
        },
        thoigianbaove:
            {ngaybaove:{
                type: String,
                default: ''
            },
            thutu:{
                type: Number,
                default: null
            }

            }
        ,
        hoidong:[
            {giangvien: {
                type: String,
                default: ''
            },
            chucvu:{
                type: String,
                default: ''
            }}
        ],
    },
    { timestamps: true }
);
module.exports = mongoose.model("Luanvan", luanvan);
