import React, {  } from "react";
import { useForm } from "react-hook-form";
import { nguoidungAPI } from "../api";
import LogoCTU from "../assets/logo.png";
import { Button, TextField } from '@mui/material';
import {  useNavigate } from "react-router-dom";
function Loginpage() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        const temp = await nguoidungAPI.dangnhap(data)
        console.log(temp.data)
        localStorage.setItem("phanquyen", temp.data.phanloai)
        localStorage.setItem("hoten", temp.data.hoten)
        localStorage.setItem("email", temp.data.email)
        localStorage.setItem("id", temp.data._id)
        if (temp.data.phanloai === 4) {
            localStorage.setItem("mssv", temp.data.mssv)
            navigate('/hocky')
        }
        if (temp.data.phanloai === 3) {
            localStorage.setItem("msgv", temp.data.msgv)
            navigate('/detai')
        }
        if (temp.data.phanloai === 2) {
            localStorage.setItem("msgv", temp.data.msgv)
            navigate('/detai')
        }

    }
    const chuyen = async => {
        navigate('/register')
    }
    return (
        <div className="w-full h-screen bg-[#F0F2F5]">
            <form className="text-center pt-10" onSubmit={handleSubmit(onSubmit)}>
                <img className="mx-auto" src={LogoCTU} alt="" width="160px" />
                <div className="pt-10 text-4xl">
                    HỆ THỐNG HỖ TRỢ TRIỂN KHAI THỰC HIỆN LUẬN VĂN
                </div>
                <div className="pt-3 text-4xl">
                    NGHÀNH KHOA HỌC MÁY TÍNH
                </div>
                <div className="pt-10">
                    <TextField {...register('taikhoan')}
                        name="taikhoan"
                        label="Tài khoản"
                        type="text"
                        style={{ width: "300px" }}
                    />
                </div>
                 <div className="pt-5">
                    <TextField {...register('matkhau')}
                        name="matkhau"
                        label="Mật khẩu"
                        type="password"
                        style={{ width: "300px" }}
                    />
                </div> 
                <div className="pt-7"><Button type='submit' variant="contained" >Đăng nhập</Button></div>
                <div className="pt-7"><Button variant="contained" onClick={chuyen}>Kích hoạt tài khoản</Button></div>
            </form>
            <div className="w-full bg-[#1565C0] h-20 mt-24"></div>
        </div>
    )
}

export default Loginpage;