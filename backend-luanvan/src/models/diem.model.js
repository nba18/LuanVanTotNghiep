const mongoose = require("mongoose");

const diem = mongoose.Schema(
    {
        diemtrungbinh: {
            type: Number,
            required: true,
        },
        diemchutich: {
            chutich: {
                type: String,
                default: ''
            },
            diem:{
                type: Number,
                default: null
            }
        },
        diemthuky: {
            thuky: {
                type: String,
                default: ''
            },
            diem:{
                type: Number,
                default: null
            }
        },
        diemuyvien:{
            uyvien: {
                type: String,
                default: ''
            },
            diem:{
                type: Number,
                default: null
            }
        },
        sinhvien: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Sinhvien',
            default: null
        },

        
    },
    { timestamps: true }
);
module.exports = mongoose.model("Diem", diem);
