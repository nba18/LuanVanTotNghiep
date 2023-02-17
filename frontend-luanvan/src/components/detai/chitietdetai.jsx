import React from "react";
import { Markup } from 'interweave';
import { Button } from "@mui/material";
import {  useNavigate } from "react-router-dom";
import { useMatch } from 'react-router-dom';
import { detaiAPI } from "../../api";

function Chitietdetai(props) {
    const {tendetai,tentienganh, mota_kienthuc, mota_gioithieu, mota_yeucau,mota_tailieu,mota_khac} = props;
    const navigate = useNavigate();
    const match = useMatch('/detai/:id')
    const duyet = async() => {
        const temp = await detaiAPI.duyetdetai({id:match.params.id})
        navigate('/duyetdetai')
    }
    const chinhsua = async() => {
        const temp = await detaiAPI.yeucauchinhsua({id:match.params.id})
        navigate('/duyetdetai')
    }
    return (
        <div>
            <div className="bg-[#2A84EB] rounded-lg h-10 w-[73rem] p-2 m-auto translate-y-6 shadow-lg shadow-blue-500/50 text-center text-white font-bold" >Chi tiết đề tài</div>
            <div className="w-[75rem] m-auto rounded-lg bg-white shadow-lg pt-5">
                <div className='my-5 ml-10 mr-10 '>
                    <div className='w-1/4 font-bold'>Tên đề tài</div>
                    <Markup content={tendetai} />
                </div>
                <div className='my-5 ml-10 mr-10 '>
                    <div className='w-1/4 font-bold'>Tên đề tài bằng tiếng Anh:</div>
                    <Markup content={tentienganh} />
                </div>
                <div className='my-4 ml-10 mr-10  '>
                    <div className='font-bold'>Sinh viên thực hiện</div>
                    <div></div>
                </div>
                <div className='my-4 ml-10 mr-10 '>
                    <div className='font-bold'>1. Yêu cầu kiến thức</div>
                    <Markup content={mota_kienthuc} />
                </div>
                <div className='my-4 ml-10 mr-10 '>
                    <div className='font-bold'>2. Giới thiệu</div>
                    <Markup content={mota_gioithieu} />
                </div>
                <div className='my-4 ml-10 mr-10 '>
                    <div className='font-bold'>3. Mục tiêu và yêu cầu chức năng</div>
                    <Markup content={mota_yeucau} />
                </div>
                <div className='my-4 ml-10 '>
                    <div className='font-bold'>4. Tài liệu tham khảo</div>
                    <Markup content={mota_tailieu} />
                </div>
                <div className='my-4 ml-10 mr-10 pb-5'>
                    <div className='font-bold'>5. Yêu cầu khác</div>
                    <Markup content={mota_khac} />
                </div>
                {localStorage.getItem('phanquyen') == 1 ? <div className="flex justify-center">
                    <div className="mr-3"><Button variant="contained" onClick={duyet}>Duyệt</Button></div>
                    <div className="ml-3"><Button variant="contained" onClick={chinhsua}>Yêu cầu chỉnh sửa</Button></div>
                </div> :<></>}
            </div>
        </div>
    )
}
export default Chitietdetai;