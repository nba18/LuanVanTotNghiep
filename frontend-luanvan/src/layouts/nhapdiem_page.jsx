import React from "react";
import Dashboard from "../components/dashboard";
import Nhapdiem from "../components/diem/nhapdiem";
// import Danhsachtonghop from "../components/detai/danhsachtonghop";
// import Themdetai from "../components/detai/themdetai";

function Nhapdiem_page(){
    return(
        <div className="grid grid-cols-[300px_minmax(900px,_1fr)] w-full bg-[#F0F2F5]">
            <div className="w-ful h-screen">
                <Dashboard />
            </div>
            <div className="w-full h-full">
                <Nhapdiem />
            </div>  
        </div>
    );
}

export default Nhapdiem_page;