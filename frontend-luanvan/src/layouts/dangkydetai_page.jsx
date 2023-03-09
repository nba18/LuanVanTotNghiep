import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React, { useEffect, useState } from "react";
import { detaiAPI, nguoidungAPI } from "../api";
import Dashboard from "../components/dashboard";
import Danhsachsinhvien from "../components/danhsachsinhvien";
function Dangkydetai_page() {
    const [sinhvien, setSinhvien] = useState();

    const fetchDssinhvien = async () => {
        const List = await nguoidungAPI.sinhvien();
        setSinhvien(List.data);
        
    };
    useEffect(() => {
        fetchDssinhvien();
    }, []);
    return (
        <div className="grid grid-cols-[300px_minmax(900px,_1fr)] w-full bg-[#F0F2F5]">
            <div className="w-ful h-screen">
                <Dashboard />
            </div>
            <div className="w-full h-full">
                <div className="bg-[#2A84EB] rounded-lg h-10 w-[73rem] p-2 m-auto translate-y-6 shadow-lg shadow-blue-500/50 text-white font-bold text-center" >Phân bố đề tài</div>
                <div className="w-[75rem] m-auto rounded-lg bg-white shadow-lg">
                    <div className="grid grid-cols-[50px_170px_195px_195px_195px_195px_195px] text-center py-5 font-bold">
                        <div className="w-1/8 p-1 ">STT</div>
                        <div className="w-3/8 p-1 ">Tên</div>
                        <div className="w-2/8 p-1 ">MSSV</div>
                        <div className="w-1/8 p-1 ">Đề tài ưu tiên 1</div>
                        <div className="w-1/8 p-1 ">Đề tài ưu tiên 2</div>
                        <div className="w-1/8 p-1 ">Đề tài ưu tiên 3</div>
                        <div className="w-1/8 p-1 ">Đề tài ưu tiên 4</div>
                    </div>
                    <div>
                        
                        {sinhvien?.map((sv, index) => {
                            return (
                                <Danhsachsinhvien key={sv._id}  stt = {index+1} sv = {sv}/>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dangkydetai_page;