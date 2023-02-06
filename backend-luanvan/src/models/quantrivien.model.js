const mongoose = require("mongoose");

const quantrivien = mongoose.Schema(
    {
        msnd: {
            type: String,
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
