const mongoose = require("mongoose");
const Detai = require("../models/detai.model");
const giangvienModel = require("../models/giangvien.model");
const Hocky = require("../models/hocky.model");
const sinhvienModel = require("../models/sinhvien.model");
const luanvanModel = require("../models/luanvan.model")

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
                tukhoa: req.body.tukhoa
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
    layDetai: async (req, res) => {
        const detai = await Detai.find().populate({ path: 'hocky' })
        if (!detai) {
            return res.status(403).json("Rỗng")
        }
        return res.status(200).json(detai)
    },
    //Ds de tai cua gv
    laydsdetai: async (req, res) => {
        // console.log(req.params.id);
        try {
            const gv = await giangvienModel.findById(req.params.id).populate({ path: 'danhsachdetai_dexuat', populate: { path: 'hocky' } })
            // console.log(gv.danhsachdetai_dexuat);
            res.status(200).json(gv.danhsachdetai_dexuat);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //lay danh sach de tai chua duyet
    laydsdetaichuaduyet: async (req, res) => {
        try {
            const detai = await Detai.find({ trangthai: 1 }).populate({ path: 'hocky' })
            // console.log(gv.danhsachdetai_dexuat);
            res.status(200).json(detai);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    laydsdetaidaduyet: async (req, res) => {
        try {
            const detai = await Detai.find({ trangthai: 2 }).populate({ path: 'hocky' })
            // console.log(gv.danhsachdetai_dexuat);
            res.status(200).json(detai);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //lay danh sach de tai tong hop
    laydsdetatonghop: async(req, res) => {
        try{
            const detai = await Detai.find().populate({ path: 'sinhvien'}).populate({ path: 'giangvien'})
            const data = []
            
            detai.map(dt =>{
                if (dt.sinhvien !== null){
                    data.push(dt)
                }
            })
            // console.log(data)
            res.status(200).json(data);
        }catch(err){
            res.status(500).json(err);
        }
    },
    //lay 1 de tai
    lay1detai: async (req, res) => {
        // console.log(req.params.id);
        try {
            const detai = await Detai.findById(req.params.id).populate({ path: 'hocky' }).populate({path: 'giangvien'})
            res.status(200).json(detai);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //duyet de tai 
    duyetdetai: async (req, res) => {
        try {
            const detai = await Detai.findByIdAndUpdate(req.body.id,
                {
                    trangthai: 2,
                });
            return res.status(200).json(detai);
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    yeucauchinhsua: async (req, res) => {
        // console.log(req.params.id);
        try {
            const detai = await Detai.findByIdAndUpdate(req.body.id,
                {
                    trangthai: 3,
                });
            return res.status(200).json(detai);
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    chondetai: async (req, res) => {
        // try {
        //     const sinhvien1 = await sinhvienModel.findByIdAndUpdate(req.body[1].idsinhvien, {
        //             $push: {
        //                 danhsachdetai_muonlam: req.body[0]
        //             }    
        //     })
        //     console.log(sinhvien1)
        //     return res.status(200).json(sinhvien1);
        // } catch (err) {
        //     return res.status(500).json(err);
        // }
        try {
            const sinhvien1 = await sinhvienModel.findById(req.body[1].idsinhvien)
            let check = true;
            if(sinhvien1.sodetaiduocchon <= 0){
                check = false
            }
            sinhvien1.danhsachdetai_muonlam.forEach(element => {
                if (element.thutu == req.body[0].thutu) {
                    check = false
                }
            });
            if (check) {


                const sinhvien2 = await sinhvienModel.findByIdAndUpdate(req.body[1].idsinhvien, {
                    $push: {
                        danhsachdetai_muonlam: req.body[0]
                    },
                    sodetaiduocchon: sinhvien1.sodetaiduocchon - 1
                })
                sinhvien2.danhsachdetai_muonlam.sort(function(a, b){return a.thutu - b.thutu})
                
                res.status(200).json(sinhvien2);
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    capnhatdetai: async(req, res) => {
        try{
            if(req.body.check === false){
                const detai = await Detai.findByIdAndUpdate(req.body.id,
                    {
                        tendetai: req.body.tendetai,
                        tentienganh: req.body.tentienganh,
                        sinhvien: null                        
                    });
            }else{
                const detai = await Detai.findByIdAndUpdate(req.body.id,
                    {
                        tendetai: req.body.tendetai,
                        tentienganh: req.body.tentienganh,                     
                    });
            }

            return res.status(200).json('Cập nhật thành công');
        }catch(err){
            res.status(500).json(err);
        }},
        capnhathoidong: async(req, res) => {
            // console.log( req.body.hoidong);
            try{
                const detai = await Detai.findByIdAndUpdate(req.body.detai,
                    {
                        hoidong: req.body.hoidong,
                        thoigianbaove: req.body.thoigianbaove,
                                             
                    });
                
                // console.log(detai)
                return res.status(200).json('Cập nhật thành công');
            }catch(err){
                res.status(500).json(err);
            }},
            phancongdetai: async (req, res) => {
                try {
                    const luanvan = await luanvanModel.findOne({ mssv: req.body.mssv })
                    if(!luanvan){
                        const newluanvan = new luanvanModel({
                            tenluanvantiengviet: req.body.tendetai,
                            giangvien: req.body.tengiangvien,
                            hocky: req.body.hocky,
                            sinhvien: req.body.tensinhvien,
                            mssv: req.body.mssv,
                        });
                        await newluanvan.save();
                        await sinhvienModel.findByIdAndUpdate(req.body.idsv,{
                            tenluanvantiengviet : req.body.tendetai,
                        })
                        
                    } else {
                        await luanvanModel.findOneAndUpdate({mssv:req.body.mssv},{
                            tenluanvantiengviet: req.body.tendetai
                        })
                        await sinhvienModel.findByIdAndUpdate(req.body.idsv,{
                            tenluanvantiengviet : req.body.tendetai,
                        })
                    }
                    res.status(200)
                } catch (err) {
                    res.status(500).json(err)
                }
            },
        }
module.exports = detaiController;