const mongoose = require("mongoose");
const Detai = require("../models/detai.model");
const detaiController = {
    themDetai: async (req, res) => {
        const newDetai = new Detai({
            tendetai: req.body.tendetai,
            idgiangvien : req.body.idgiangvien,
            hocky: req.body.hocky,
            mota1: req.body.mota1,
            mota2: req.body.mota2,
            mota3: req.body.mota3,
            mota4: req.body.mota4,
            motakhac: req.body.motakhac,
        })
        const detai = await newDetai.save();
        if (!detai) {
            return res.status(500).json("Thêm thất bại")
        }
        return res.status(200).json(detai)
    },
}

module.exports = detaiController