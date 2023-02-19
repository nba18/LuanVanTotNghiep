import React from "react";
import img from "../assets/logo.png"
function Hosocanhan(){

    return (
        <div>
            <div className="bg-[#2A84EB] rounded-lg h-[150px] w-[75rem] mt-5 p-2 m-auto  shadow-lg shadow-blue-500/50 text-white font-bold text-center" ></div>
            <div className="-translate-y-14 w-[70rem]  m-auto rounded-lg bg-white h-full shadow-lg mb-5">
            <div className="py-5 px-5 flex">
                <img className="inline-block h-16 w-16 rounded-full shadow-inner shadow-black-500/50" src={img} alt=""/>
                <div className="pl-5 self-center">
                    <b className="text-lg">{localStorage.getItem('hoten')}</b>
                    {localStorage.getItem('phanquyen') == 1 ? <div>Quản trị viên</div> : <></>}
                    {localStorage.getItem('phanquyen') == 2 ? <div>Trưởng khoa</div> : <></>}
                    {localStorage.getItem('phanquyen') == 3 ? <div>Giảng viên</div> : <></>}
                    {localStorage.getItem('phanquyen') == 4 ? <div>Sinh viên</div> : <></>}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Hosocanhan