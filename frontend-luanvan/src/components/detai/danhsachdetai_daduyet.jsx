import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { detaiAPI } from '../../api';
import Detaicard_daduyet from './detaicard_daduyet';
// import PropTypes from 'prop-types';

Danhsachdetai_daduyet.propTypes = {
    
};

function Danhsachdetai_daduyet(props) {

    const [list, setDetaiList] = useState([]);
    const fetchDetai = async () => {
        const List = await detaiAPI.laydsdetaidaduyet();
        setDetaiList(List.data);
        
    };
    useEffect(() => {
        fetchDetai();
    }, []);

    return (
        <div className="">
            <div className="">
                <div className="bg-[#2A84EB] rounded-lg h-10 w-[73rem] p-2 m-auto translate-y-6 shadow-lg shadow-blue-500/50 text-center text-white font-bold" >Danh sách đề tài đề xuất</div>
                <div className="w-[75rem] m-auto rounded-lg bg-white shadow-lg pt-5">
                    <div className="grid grid-cols-[100px_650px_150px_150px_100px] text-center py-5 font-bold">
                        <div className="w-1/8 p-1 ">STT</div>
                        <div className="w-3/8 p-1 ">Tên đề tài</div>
                        <div className="w-2/8 p-1 ">Niên khóa</div>
                        <div className="w-1/8 p-1 ">Học kỳ</div>
                    </div>
                    <div  className="">
                        {list.map((detai, index) => {
                            return (
                                
                                    <Detaicard_daduyet key={detai._id} id={detai._id} stt={index + 1} ten={detai.tendetai} hocky={detai.hocky} trangthai = {detai.trangthai} />
                               
                            );
                        })}
                    </div>
                    <div className="w-[75rem] m-auto rounded-br-lg rounded-bl-lg h-10 bg-white shadow-lg mb-5"></div>
                </div>
            </div>
        </div>
    );
}

export default Danhsachdetai_daduyet;