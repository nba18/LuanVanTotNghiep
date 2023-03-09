import React from "react";
import Dashboard from "../components/dashboard";
import Hosocanhan from "../components/hosocanhan";

function Hosocanhan_page(){
    return(
        <div className="grid grid-cols-[300px_minmax(900px,_1fr)] w-full bg-[#F0F2F5]">
            <div className="w-ful h-screen">
                <Dashboard />
            </div>
            <div className="w-full h-full">
                <Hosocanhan />
            </div>  
        </div>
    );
}

export default Hosocanhan_page;