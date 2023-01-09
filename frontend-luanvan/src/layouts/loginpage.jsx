import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import React from "react";
import "./css/loginpage.css";
import LogoCTU from '../assets/logo.png';
function Loginpage() {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
    }
    return (
        <div className="loginpage">
            <form className="loginpage-form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <img src={LogoCTU} alt="" width="140px" />
                </div>
                <div className="loginpage-text">
                    ĐĂNG NHẬP
                </div>
                <div className="loginpage-input">
                    <TextField {...register('taikhoan')}
                        name="taikhoan"
                        label="Tài khoản"
                        type="text"
                        style={{width:"300px"}}
                    />
                </div>
                <div className="loginpage-input">
                    <TextField {...register('matkhau')}
                        name="matkhau"
                        label="Mật khẩu"
                        type="password"
                        style={{width:"300px"}}
                    />
                </div>
                <div className="loginpage-submit"><Button type='submit' variant="contained" >Đăng nhập</Button></div>
            </form>
        </div>
    )
}

export default Loginpage;