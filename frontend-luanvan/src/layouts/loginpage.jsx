import React, {  } from "react";
import { useForm } from "react-hook-form";
import { nguoidungAPI } from "../api";
import LogoCTU from "../assets/logo.png";
import { Button, TextField } from '@mui/material';
function Loginpage() {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const temp = await nguoidungAPI.dangnhap(data)
        console.log(temp.data);
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
            </form>
            <div className="w-full bg-[#1565C0] h-20 mt-24"></div>
        </div>
    )
}

export default Loginpage;