import React from "react";
import Dashboard from "../components/dashboard";
function Homepage(){
    return(
        <div class="grid grid-cols-[300px_minmax(900px,_1fr)] w-full bg-[#F0F2F5]">
            <div class="w-ful h-full">
                <Dashboard />
            </div>
            <div class="w-full h-[100rem]">
                XIN CHAO DAY LA NOI DUNG
            </div>
        </div>
    );
}

export default Homepage;