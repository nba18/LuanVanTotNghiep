import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import React from "react";
import LogoCTU from '../assets/logo.png';
function Loginpage() {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
    }
    return (
        <div class="w-full h-screen bg-[#F0F2F5]">
            <form class="text-center pt-10" onSubmit={handleSubmit(onSubmit)}>
                <img class="mx-auto" src={LogoCTU} alt="" width="160px" />
                <div class="pt-10 text-4xl">
                    HỆ THỐNG HỖ TRỢ ĐĂNG KÝ LUẬN VĂN
                </div>
                <div class="pt-10">
                    <TextField {...register('taikhoan')}
                        name="taikhoan"
                        label="Tài khoản"
                        type="text"
                        style={{ width: "300px" }}
                    />
                </div>
                <div class="pt-5">
                    <TextField {...register('matkhau')}
                        name="matkhau"
                        label="Mật khẩu"
                        type="password"
                        style={{ width: "300px" }}
                    />
                </div>
                <div class="pt-10"><Button type='submit' variant="contained" >Đăng nhập</Button></div>
            </form>
        </div>
    )
}

export default Loginpage;