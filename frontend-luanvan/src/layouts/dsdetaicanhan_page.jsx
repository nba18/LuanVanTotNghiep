import React, { useEffect, useState } from 'react';
import { useMatch } from 'react-router-dom';
import { detaiAPI } from '../api';
import Dashboard from '../components/dashboard';
import Chitietdetai from '../components/detai/chitietdetai';

Dsdetaicanhan_page.propTypes = {

};

function Dsdetaicanhan_page(props) {
    const match = useMatch('/detai/:id');
    const [detai, setDetai] = useState([]);
    const fetchDetai = async () => {
        const List = await detaiAPI.lay1detai(match.params.id);
        setDetai(List.data);
    };
    useEffect(() => {
        fetchDetai();
    }, []);
    return (
        <div className="grid grid-cols-[300px_minmax(900px,_1fr)] w-full bg-[#F0F2F5]">
            <div className="w-ful h-screen">
                <Dashboard />
            </div>
            <div className="w-full h-full ">
                <Chitietdetai tendetai={detai.tendetai} tentienganh={detai.tentienganh} mota_kienthuc={detai.mota_kienthuc} mota_gioithieu={detai.mota_gioithieu} mota_yeucau={detai.mota_yeucau} mota_tailieu={detai.mota_tailieu} mota_khac={detai.mota_khac}  />
            </div>
        </div>
    );
}

export default Dsdetaicanhan_page;