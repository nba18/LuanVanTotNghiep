const mongoose = require("mongoose");
const Luanvan = require("../models/luanvan.model");
const luanvanController = {
    
    themLuanvan: async (req, res) => {
        try {
            const newLuanvan = new Luanvan({
                tenluanvantiengviet: req.body.tenluanvan,
                tenluanvantienganh: req.body.giangvien,
                giangvien: req.body.hocky,
                sinhvien: req.body.mota_kienthuc,
                hocky: req.body.hocky,
            });
            const luanvan = await newLuanvan.save();
            // console.log(luanvan);
            await Hocky.findByIdAndUpdate(
                { _id: req.body.hocky },
                {
                    $push: {
                        danhsachluanvan_dexuat: luanvan._id
                    }
                });
            await giangvienModel.findByIdAndUpdate(
                { _id: req.body.giangvien },
                {
                    $push: {
                        danhsachluanvan_dexuat: luanvan._id
                    }
                });
            res.status(200).json(luanvan);
        }

        catch (err) {
            res.status(500).json(err);
        }
    },
}

module.exports = luanvanController;