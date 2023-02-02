const mongoose = require("mongoose");
const Detai = require("../models/detai.model");
const Hocky = require("../models/hocky.model");
const detaiController = {
    themDetai: async (req, res) => {
    try{
        const newDetai = new Detai({
            tendetai: req.body.tendetai,
            idgiangvien : req.body.idgiangvien,
            hocky: req.body.hocky,
            mota_kienthuc: req.body.mota_kienthuc,
            mota_gioithieu: req.body.mota_gioithieu,
            mota_yeucau: req.body.mota_yeucau,
            mota_tailieu: req.body.mota_tailieu,
            mota_khac: req.body.mota_khac,
        });
        const detai = await newDetai.save();
        await Hocky.findByIdAndUpdate(
            {_id : req.body.hocky },
            {$push:{
                danhsachdetai : detai._id
            }});
        res.status(200).json(detai);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
}

module.exports = detaiController