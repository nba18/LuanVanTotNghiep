import React from "react";
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { RiAccountCircleLine } from 'react-icons/ri';
import { GrDocumentTime } from 'react-icons/gr';
import { Link, useNavigate } from 'react-router-dom';
import { Button, linkClasses } from "@mui/material";

function Dashboard() {
    const navigate = useNavigate()
    const logout = async () => {
        navigate('/')
        localStorage.clear()
    }

    return (
        <div className="">
            <div className="bg-[#2A84EB] rounded-lg h-[44rem] w-[265px] m-5 fixed shadow-lg shadow-blue-500/50">
                <div className="mx-3 text-center text-4xl">
                    Menu
                </div>
                <Link to="/hocky">
                    <div className="hover:bg-fuchsia-600 flex p-2 mx-3 rounded-lg h-12 mt-1 text-xl cursor-default">
                        <div className="p-[5px]"><MdOutlineAddCircleOutline /></div>Thêm học kỳ
                    </div>
                </Link>
                <Link to="/detai">
                    <div className="hover:bg-fuchsia-600 flex p-2 mx-3 rounded-lg h-12 mt-1 text-xl cursor-default">
                        <div className="p-[5px]"><MdOutlineAddCircleOutline /></div>Thêm đề tài
                    </div>
                </Link>

                <Link to="/duyetdetai">
                    <div className="hover:bg-fuchsia-600 flex p-2 mx-3 rounded-lg h-12 mt-1 text-xl cursor-default">
                        <div className="p-[5px]"><GrDocumentTime /></div>Xét duyệt đề tài
                    </div>
                </Link>


                <Link to="/dsdetai">
                    <div className="hover:bg-fuchsia-600 flex p-2 mx-3 rounded-lg h-12 mt-1 text-xl cursor-default">
                        <div className="p-[5px]"><HiOutlineDocumentText /></div>DS đề tài cá nhân
                    </div>
                </Link>
                <Link to='/hoso'>
                    <div className="hover:bg-fuchsia-600 flex p-2 mx-3 rounded-lg h-12 mt-1 text-xl cursor-default">
                        <div className="p-[5px]"><RiAccountCircleLine /></div>Thông tin cá nhân
                    </div>
                </Link>

                <div onClick={logout} className="w-full text-center absolute bottom-5">
                    <Button variant="contained">Đăng xuất</Button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;