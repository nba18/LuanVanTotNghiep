const mongoose = require("mongoose");
const Luanvan = require("../models/luanvan.model");
const luanvanController = {
    
    layLuanvan: async (req, res) => {
        const luanvan = await Luanvan.find().populate({ path: 'hocky' })
        if (!luanvan) {
            return res.status(403).json("Rỗng")
        }
        return res.status(200).json(luanvan)
    },
    capnhatluanvan: async(req, res) => {
        try{
            if(req.body.check === false){
                const luanvan = await Luanvan.findByIdAndUpdate(req.body.id,
                    {
                        tenluanvantiengviet: req.body.tenluanvantiengviet,
                        tenluanvantienganh: req.body.tenluanvantienganh,
                        sinhvien: ''                        
                    });
            }else{
                const luanvan = await Luanvan.findByIdAndUpdate(req.body.id,
                    {
                        tenluanvantiengviet: req.body.tenluanvantiengviet,
                        tenluanvantienganh: req.body.tenluanvantienganh,                     
                    });
            }

            return res.status(200).json('Cập nhật thành công');
        }catch(err){
            res.status(500).json(err);
        }},
        capnhathoidong: async(req, res) => {
            // console.log( req.body.hoidong);
            try{
                const luanvan = await Luanvan.findByIdAndUpdate(req.body.detai,
                    {
                        hoidong: req.body.hoidong,
                        thoigianbaove: req.body.thoigianbaove,
                                             
                    });
                
                // console.log(detai)
                return res.status(200).json('Cập nhật thành công');
            }catch(err){
                res.status(500).json(err);
            }},
}

module.exports = luanvanController;