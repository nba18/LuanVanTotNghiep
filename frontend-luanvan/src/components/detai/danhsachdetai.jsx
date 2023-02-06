import React, { useState } from 'react';
import Detaicard from './detaicard';
// import PropTypes from 'prop-types';

Danhsachdetai.propTypes = {
    
};

function Danhsachdetai(props) {

    // const [list, setList] = useState([]);
    const Listtest = [
        {
            Name: "De tai a",
            NameE: "",
            NienKhoa: "2021-2022",
            HocKy: "1",
            SinhVien: "Nguyen Van a",
            TrangThai: "Duoc tiep nhan",
            MoTa: "De tai nay hay ne",

        },
        {
            Name: "De tai bbbbbbbbbb",
            NameE: "",
            NienKhoa: "2021-2022",
            HocKy: "2",
            SinhVien: "",
            TrangThai: "Da duyet",
            MoTa: "De tai nay hay ne",

        },
    ]

    
    // setList(Listtest);

    return (
        <div className="">
            <div className="">
                <div className="bg-[#2A84EB] rounded-lg h-10 w-[73rem] p-2 m-auto translate-y-6 shadow-lg shadow-blue-500/50 text-center text-white font-bold" >Danh sách đề tài</div>
                <div className="w-[75rem] m-auto rounded-lg h-20 bg-white shadow-lg">
                    <div className="grid grid-cols-[150px_300px_300px_300px_120px]">
                        <div className="pt-10 pl-10">STT</div>
                        <div className="pt-10 pl-5">Tên đề tài</div>
                        <div className="pt-10 pl-3">Niên khóa</div>
                        <div className="pt-10 pl-5">Học kỳ</div>
                        <div className="pt-10 pl-5">Trạng thái</div>
                    </div>
                    <div className="">
                    {Listtest.map((hocky, index) => {
                        return (
                            <div key={hocky._id} className='' >
                                <Detaicard stt={index + 1} ten={hocky.Name} hocky={hocky.HocKy} trangthai = {hocky.TrangThai} nienkhoa={hocky.NienKhoa}/>
                            </div>
                        );
                    })}
                </div>
                    <div className="w-[75rem] m-auto rounded-br-lg rounded-bl-lg h-10 bg-white shadow-lg"></div>
                </div>
            </div>
        </div>
    );
}

export default Danhsachdetai;