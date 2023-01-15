const mongoose = require("mongoose");
const Hocky = require("../models/hocky.model");
const hockyController = {
    
    //Thêm học kỳ mới.
    themHocky: async (req, res) => {
        const newHocky = new Hocky({
            hocky: req.body.hocky,
            nambatdau : req.body.nambatdau,
            namketthuc: req.body.namketthuc,
        })
        const hocky = await newHocky.save();
        if (!hocky) {
            return res.status(500).json("Thêm thất bại")
        }
        return res.status(200).json(hocky)
    },
}

module.exports = hockyController;