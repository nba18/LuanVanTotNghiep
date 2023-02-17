import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { detaiAPI, hockyAPI } from "../../api";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
function Themdetai() {
    const id_nguoidung = localStorage.getItem("id");
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');
    const [value6, setValue6] = useState('');
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        data.tendetai = value1;
        data.mota_kienthuc = value2;
        data.mota_gioithieu = value3;
        data.mota_yeucau = value4;
        data.mota_tailieu = value5;
        data.mota_khac = value6;
        console.log(data);
        let detai = { ...data, giangvien: id_nguoidung };
        const tempt = await detaiAPI.themdetai(detai);
        console.log(tempt);
        window.alert("them thanh cong")
    }

    const [hockyList, sethockyList] = useState([]);

    const fetchHocky = async () => {
        const List = await hockyAPI.layhocky();
        sethockyList(List.data);
    };
    useEffect(() => {

        fetchHocky();
    }, []);

    return (
        <div className="">
            <div className="">
                <div className="bg-[#2A84EB] rounded-lg h-10 w-[73rem] p-2 m-auto translate-y-6 shadow-lg shadow-blue-500/50 text-white font-bold text-center" >Thêm đề tài mới</div>
                <div className="w-[75rem] m-auto rounded-lg bg-white h-full shadow-lg mb-5">
                    <div className="pt-12">
                        <form className="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="">
                                <div className="font-bold ml-10">1.Tên đề tài</div>
                                <ReactQuill theme="snow" value={value1} onChange={setValue1} className="w-[1000px] m-auto mt-2" />
                            </div>
                            <div className="pt-2 h-[230px]">
                                <div className="font-bold ml-10">2. Mô tả kiến thức</div>
                                <ReactQuill theme="snow" value={value2} onChange={setValue2} className="w-[1000px] h-[150px] m-auto mt-2 " />
                            </div>
                            <div className="pt-2 h-[230px]">
                                <div className="font-bold ml-10">3. Mô tả giới thiệu</div>
                                <ReactQuill theme="snow" value={value3} onChange={setValue3} className="w-[1000px] h-[150px] m-auto mt-2" />
                            </div>
                            <div className="pt-2 h-[230px]">
                                <div className="font-bold ml-10">4. Mô tả yêu cầu</div>
                                <ReactQuill theme="snow" value={value4} onChange={setValue4} className="w-[1000px] h-[150px] m-auto mt-2" />
                            </div>
                            <div className="pt-2 h-[230px]">
                                <div className="font-bold ml-10">5. Mô tả tài liệu</div>
                                <ReactQuill theme="snow" value={value5} onChange={setValue5} className="w-[1000px] h-[150px] m-auto mt-2" />
                            </div>
                            <div className="pt-2 h-[230px]">
                                <div className="font-bold ml-10">6. Mô tả khác</div>
                                <ReactQuill theme="snow" value={value6} onChange={setValue6} className="w-[1000px] h-[150px] m-auto mt-2" />
                            </div>
                            <div className="pt-2">
                                <div className="font-bold ml-10">7.Niên khóa</div>
                                <div className="w-[1000px] m-auto mt-2">
                                    <select id="hocky" type='select'   {...register('hocky', { required: true })} className="">
                                        {hockyList?.map(hocky => {
                                            return (
                                                <option key={hocky?._id} value={hocky?._id}>{hocky?.nambatdau} - {hocky?.namketthuc} Học kỳ: {hocky?.hocky}</option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="text-center pt-5 pb-5 w-full"><Button type='submit' variant="contained" className="w-[1000px]" >Thêm</Button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Themdetai;