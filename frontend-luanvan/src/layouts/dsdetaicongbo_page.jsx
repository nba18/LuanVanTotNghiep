import React, { useEffect, useState } from 'react';
import Dashboard from '../components/dashboard';
import Danhsachdetai_daduyet from '../components/detai/danhsachdetai_daduyet';

Dsdetaicongbo_page.propTypes = {

};

function Dsdetaicongbo_page(props) {
    return (
        <div className="grid grid-cols-[300px_minmax(900px,_1fr)] w-full bg-[#F0F2F5]">
            <div className="w-ful h-screen">
                <Dashboard />
            </div>
            <div className="w-full h-full">
                <Danhsachdetai_daduyet />
            </div>  
        </div>
    );
}

export default Dsdetaicongbo_page;