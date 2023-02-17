import React, { useEffect, useState } from "react";
import { hockyAPI } from "../api";
import Dashboard from "../components/dashboard";
import DShocky from "../components/hocky/danhsachhocky";
import Themhocky from "../components/hocky/themhocky"
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