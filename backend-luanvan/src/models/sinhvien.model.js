const mongoose = require("mongoose");

const sinhvien = mongoose.Schema(
    { 
        mssv: {
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
            default: '4',
            //1: quản trị viên
            //2: trưởng khoa
            //3: giảng viên
            //4: sinh viên
        },
        danhsachdetai_muonlam:[
            {
            tendetai: {
                type: String,
            },
            tengiangvien: {
                type: String,
            },
            hocky: {
                type: String,
            },
            thutu:{
                type: Number,
            },
            iddetai: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Detai'
            },}
        ],
        danhandetai: {
            type: Boolean,
            default: false
        },
        sodetaiduocchon:{
            type: Number,
            default: 4
        },
        tenluanvantiengviet: {
            type: String,
        },
        tenluanvantienganh: {
            type: String,
        },
        diemluanvan: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Diem'
        },     
        
    },
    {timestamps: true}
);
module.exports = mongoose.model("Sinhvien",sinhvien);
