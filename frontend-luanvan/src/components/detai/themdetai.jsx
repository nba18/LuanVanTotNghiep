import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { detaiAPI, hockyAPI } from "../../api";

function Themdetai() {

    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        data.giangvien = localStorage.getItem("id_nguoidung")
        const tempt = await detaiAPI.themdetai(data);
        console.log(tempt);
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
                        <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                            <div className="">
                                <TextField {...register('tendetai')}
                                    name="tendetai"
                                    label="Tên đề tài"
                                    type="text"
                                    style={{ width: "700px" }}
                                />
                            </div>
                            <div className="w-[700px] m-auto mt-2">
                                <label  className=''>Niên khóa:</label>
                                <select  id="hocky" type='select'   {...register('hocky',{ required: true })}>
                                    {hockyList?.map(hocky=>{
                                            return(
                                                <option key={hocky?._id} value={hocky?._id}>{hocky?.nambatdau} - {hocky?.namketthuc} Học kỳ: {hocky?.hocky}</option>
                                            );
                                    })}
                                </select>   
                            </div>
                            <div className="pt-2">
                                <TextField {...register('mota_kienthuc')}
                                    name="mota1"
                                    label="Yêu cầu kiến thức"
                                    type="text"
                                    multiline
                                    rows={5}
                                    style={{ width: "700px" }}
                                />
                            </div>
                            <div className="pt-2">
                                <TextField {...register('mota_gioithieu')}
                                    name="mota2"
                                    label="Giới thiệu"
                                    type="text"
                                    multiline
                                    rows={5}
                                    style={{ width: "700px" }}
                                />
                            </div>
                            <div className="pt-2">
                                <TextField {...register('mota_yeucau')}
                                    name="mota3"
                                    label="Mục tiêu và yêu cầu chức năng"
                                    type="text"
                                    multiline
                                    rows={5}
                                    style={{ width: "700px" }}
                                />
                            </div>
                            <div className="pt-2">
                                <TextField {...register('mota_tailieu')}
                                    name="mota4"
                                    label="Tài liệu tham khảo"
                                    type="text"
                                    multiline
                                    rows={5}
                                    style={{ width: "700px" }}
                                />
                            </div>
                            <div className="pt-2">
                                <TextField {...register('mota_khac')}
                                    name="motakhac"
                                    label="Yêu cầu khác"
                                    type="text"
                                    multiline
                                    rows={5}
                                    style={{ width: "700px" }}
                                />
                            </div>
                            
                            <div className="pt-5 pb-5"><Button type='submit' variant="contained" className="w-[500px]" >Thêm</Button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Themdetai;