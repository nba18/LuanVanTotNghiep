import React from "react";
import Dashboard from "../components/dashboard";
import Themdetai from "../components/detai/themdetai";

function Detaipage(){
    return(
        <div className="grid grid-cols-[300px_minmax(900px,_1fr)] w-full bg-[#F0F2F5]">
            <div className="w-ful h-screen">
                <Dashboard />
            </div>
            <div className="w-full h-full">
                <Themdetai />
            </div>  
        </div>
    );
}

export default Detaipage;