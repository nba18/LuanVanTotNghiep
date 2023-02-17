const mongoose = require("mongoose");
const Detai = require("../models/detai.model");
const giangvienModel = require("../models/giangvien.model");
const Hocky = require("../models/hocky.model");
const detaiController = {
    themDetai: async (req, res) => {
        try {
            const newDetai = new Detai({
                tendetai: req.body.tendetai,
                giangvien: req.body.giangvien,
                hocky: req.body.hocky,
                mota_kienthuc: req.body.mota_kienthuc,
                mota_gioithieu: req.body.mota_gioithieu,
                mota_yeucau: req.body.mota_yeucau,
                mota_tailieu: req.body.mota_tailieu,
                mota_khac: req.body.mota_khac,
            });
            const detai = await newDetai.save();
            // console.log(detai);
            await Hocky.findByIdAndUpdate(
                { _id: req.body.hocky },
                {
                    $push: {
                        danhsachdetai_dexuat: detai._id
                    }
                });
            await giangvienModel.findByIdAndUpdate(
                { _id: req.body.giangvien },
                {
                    $push: {
                        danhsachdetai_dexuat: detai._id
                    }
                });
            res.status(200).json(detai);
        }

        catch (err) {
            res.status(500).json(err);
        }
    },
    layDetai: async(req,res)=>{
        
        const detai = await Detai.find().populate( { path: 'hocky'} )
        if (!detai) {
            return res.status(403).json("Rỗng")
        }
        return res.status(200).json(detai)

    },
    //Ds de tai cua gv
    laydsdetai: async(req, res) => {
        // console.log(req.params.id);
        try{
            const gv = await giangvienModel.findById(req.params.id).populate({ path: 'danhsachdetai_dexuat', populate: { path: 'hocky' } })
            // console.log(gv.danhsachdetai_dexuat);
            res.status(200).json(gv.danhsachdetai_dexuat);
        }catch(err){
            res.status(500).json(err);
        }
    },
    //lay 1 de tai
    lay1detai: async(req,res)=>{
        // console.log(req.params.id);
        try{
            const detai = await Detai.findById(req.params.id).populate({ path: 'hocky'})
            res.status(200).json(detai);
        }catch(err){
            res.status(500).json(err);
        }
    },
    capnhatdetai: async(req, res) => {
        try{
            console.log("id",req.params.id,req.body);
            const updateData = req.body;
            await Detai.findByIdAndUpdate(req.params.id,updateData);
            return res.status(200).json('Cập nhật thành công');
        }catch(err){
            res.status(500).json(err);
        }
    },
}

module.exports = detaiController