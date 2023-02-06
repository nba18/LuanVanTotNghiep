import React, { useEffect, useState } from 'react';
import { hockyAPI } from '../../api';

import DShockycard from "./hockycard";
function DShocky() {
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
                <div className="bg-[#2A84EB] rounded-lg h-10 w-[73rem] p-2 m-auto translate-y-6 shadow-lg shadow-blue-500/50 text-center text-white font-bold" >Danh sách học kỳ</div>
                <div className="w-[75rem] m-auto rounded-lg h-20 bg-white shadow-lg">
                    <div className="grid grid-cols-[150px_300px_300px_300px_120px]">
                        <div className="pt-10 pl-10">STT</div>
                        <div className="pt-10 pl-3">Niên khóa</div>
                        <div className="pt-10 pl-5">Học kỳ</div>
                        <div className="pt-10 pl-5">Trạng thái</div>
                        <div className="pt-10 pl-5">Khóa học kỳ</div>
                    </div>
                    <div className="">
                    {hockyList?.map((hocky, index) => {
                        return (
                            <div key={hocky._id} className='' >
                                <DShockycard stt={index + 1} nambatdau = {hocky?.nambatdau} namketthuc={hocky?.namketthuc} hocky={hocky?.hocky} trangthai = {hocky?.trangthai} id ={hocky?._id} reload={fetchHocky}/>
                            </div>
                        );
                    })}
                </div>
                    <div className="w-[75rem] m-auto rounded-br-lg rounded-bl-lg h-10 bg-white shadow-lg"></div>
                </div>
            </div>
        </div>
    );
}

export default DShocky;