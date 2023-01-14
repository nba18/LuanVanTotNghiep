import React from "react";
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { RiAccountCircleLine } from 'react-icons/ri';
import { GrDocumentTime } from 'react-icons/gr';

function Dashboard() {
    return (
        <div>
            <div class="bg-[#2A84EB] rounded-lg h-[44rem] w-[265px] m-5 fixed">
                <div class="mx-3 text-center text-4xl">
                    Menu
                </div>
                <div class="hover:bg-fuchsia-600 flex p-2 mx-3 rounded-lg h-12 mt-1 text-xl cursor-default">
                    <div class="p-[5px]"><MdOutlineAddCircleOutline /></div>Thêm học kỳ
                </div>
                <div class="hover:bg-fuchsia-600 flex p-2 mx-3 rounded-lg h-12 mt-1 text-xl cursor-default">
                    <div class="p-[5px]"><MdOutlineAddCircleOutline /></div>Thêm đề tài
                </div>
                <div class="hover:bg-fuchsia-600 flex p-2 mx-3 rounded-lg h-12 mt-1 text-xl cursor-default">
                    <div class="p-[5px]"><GrDocumentTime /></div>Xét duyệt đề tài
                </div>
                <div class="hover:bg-fuchsia-600 flex p-2 mx-3 rounded-lg h-12 mt-1 text-xl cursor-default">
                    <div class="p-[5px]"><HiOutlineDocumentText /></div>Danh sách đề tài
                </div>
                <div class="hover:bg-fuchsia-600 flex p-2 mx-3 rounded-lg h-12 mt-1 text-xl cursor-default">
                    <div class="p-[5px]"><RiAccountCircleLine /></div>Thông tin cá nhân
                </div>
            </div>
        </div>
    );
}

export default Dashboard;