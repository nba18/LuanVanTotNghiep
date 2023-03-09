import React, { useEffect, useState } from "react";
import { detaiAPI, nguoidungAPI } from "../api";
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

Danhsachsinhvien.propTypes = {

};

function Danhsachsinhvien(props) {
    const { stt, sv } = props;
    
    const data = {

    }
    const phancong = async (data) => {
        data.tensinhvien = sv.hoten
        data.idsv = sv._id
        data.mssv = sv.mssv
        const temp = detaiAPI.phancongdetai(data)
        console.log(data)
    }
    return (
        <div className="">
            <div className="grid grid-cols-[50px_170px_195px_195px_195px_195px_195px]">
                <div className="w-1/8 p-1 text-center ">{stt}</div>
                <div className="w-3/8 p-1 text-center ">{sv.hoten}</div>
                <div className="w-2/8 p-1 text-center ">{sv.mssv}</div>
                {sv.danhsachdetai_muonlam?.map(ds => {
                    return (
                        <div key={ds._id}>
                            {sv.tenluanvantiengviet == ds.tendetai ? <div className="w-1/8 p-1 "><input type="radio" defaultChecked name = "luanvan" onClick={() => phancong(ds)}/>{ds.tendetai} - {ds.tengiangvien}</div> : <div className="w-1/8 p-1 "><input type="radio" name = "luanvan" onClick={() => phancong(ds)} />{ds.tendetai} - {ds.tengiangvien}</div>}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Danhsachsinhvien;