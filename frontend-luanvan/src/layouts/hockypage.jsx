import React from "react";
import Dashboard from "../components/dashboard";
import DShocky from "../components/hocky/danhsachhocky";
function Hockypage(){
    return(
        <div className="grid grid-cols-[300px_minmax(900px,_1fr)] w-full bg-[#F0F2F5]">
            <div className="w-ful h-screen">
                <Dashboard />
            </div>
            <div className="w-full h-full">
                <DShocky />
            </div>  
        </div>
    );
}

export default Hockypage;