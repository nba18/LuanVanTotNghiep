import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import React, { useRef, useState } from 'react';
import LogoCTU from '../assets/logo.png';
import emailjs from '@emailjs/browser';
import { nguoidungAPI } from "../api";

function Loginpage() {
    const { register, handleSubmit } = useForm();
    const form = useRef();
    const [value, setValue] = useState('')
    // const onSubmit = async (data) => {
    //     data.message = 'okok'
    //     console.log(data)
    //     emailjs.sendForm('service_b3t71x9', 'template_zqtucoe', data, '4kX5PrAi7C9T7qjEc')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    const randomPassword = Math.random().toString(36).slice(6);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_b3t71x9', 'template_zqtucoe', form.current, '4kX5PrAi7C9T7qjEc')
          .then( async (result) => {
            let taikhoan = document.getElementsByTagName("input").item(0).value;
            let matkhau = document.getElementsByTagName("input").item(1).value;
            console.log(taikhoan,matkhau)
            const temp = await nguoidungAPI.dangky({taikhoan:taikhoan,matkhau:matkhau})
            console.log(result.text);
            console.log(temp);
          }, (error) => {
              console.log(error);
          });
      };
      const onSubmit = async (data) => {
        data.matkhau = value
        console.log(data);
      }
    
    return (
        <div className="w-full h-screen bg-[#F0F2F5]">
            {/* <form className="text-center pt-10" onSubmit={handleSubmit(onSubmit)}>
                <img className="mx-auto" src={LogoCTU} alt="" width="160px" />
                <div className="pt-10 text-4xl">
                    HỆ THỐNG HỖ TRỢ TRIỂN KHAI THỰC HIỆN LUẬN VĂN
                </div>
                <div className="pt-3 text-4xl">
                    NGHÀNH KHOA HỌC MÁY TÍNH
                </div>
                <div className="pt-10">
                    <TextField {...register('user_email')}
                        name="user_email"
                        label="Tài khoản"
                        type="text"
                        style={{ width: "300px" }}
                    />
                </div>
                {/* <div className="pt-5">
                    <TextField {...register('matkhau')}
                        name="matkhau"
                        label="Mật khẩu"
                        type="password"
                        style={{ width: "300px" }}
                    />
                </div> 
                <div className="pt-7"><Button type='submit' variant="contained" >Đăng nhập</Button></div>
            </form> */}
            <form className="text-center pt-10" ref={form} onSubmit={sendEmail} >
                <label>Email</label>
                <input type="email" name="user_email"/>
                <input className="hidden" name="message" defaultValue={randomPassword}/>
                <button type="submit">Gửi</button>
            </form>
            <div className="w-full bg-[#1565C0] h-20 mt-24"></div>
        </div>
    )
}

export default Loginpage;