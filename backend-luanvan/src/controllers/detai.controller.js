const mongoose = require("mongoose");
const Detai = require("../models/detai.model");
const detaiController = {
    themDetai: async (req, res) => {
        const newDetai = new Detai({
            tendetai: req.body.tendetai,
            giangvien : req.body.giangvien,
            hocky: req.body.hocky,
            mota: req.body.mota,
        })
        const detai = await newDetai.save();
        if (!detai) {
            return res.status(500).json("Thêm thất bại")
        }
        return res.status(200).json(detai)
    },
}

module.exports = detaiController