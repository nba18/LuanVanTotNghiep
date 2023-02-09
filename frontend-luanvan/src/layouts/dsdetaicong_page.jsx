import React, { useEffect, useState } from 'react';
import { useMatch } from 'react-router-dom';
import { detaiAPI } from '../api';
import Dashboard from '../components/dashboard';
// import PropTypes from 'prop-types';

Chitietdetaipage.propTypes = {
    
};

function Chitietdetaipage(props) {
    const match = useMatch('/detai/:id');
    // console.log("a",match.params.id);
    const [detai, setDetai] = useState([]);
    const fetchDetai = async () => {
        const List = await detaiAPI.lay1detai(match.params.id);
        // console.log(List.data)
        setDetai(List.data);
        
    };
    useEffect(() => {
        
        fetchDetai();
    }, []);
    return (
        <div className="grid grid-cols-[300px_minmax(900px,_1fr)] w-full bg-[#F0F2F5]">
            <div className="w-ful h-screen">
                <Dashboard />
            </div>
            <div className="w-full h-full ">
                <div className="bg-[#2A84EB] rounded-lg h-10 w-[73rem] p-2 m-auto translate-y-6 shadow-lg shadow-blue-500/50 text-center text-white font-bold" >Chi tiết đề tài</div>
                {/* <div className='w-[73rem] p-2 m-auto flex mt-10'>
                    <div className='w-1/4 h-20 '></div>
                    <div className='w-3/4 bg-sky-200 h-20 '></div>
                </div> */}
                <div className="w-[73rem] p-4 m-auto mt-5">
                    {/* <tbody> */}
                        <div className='my-5'>
                            <div className='w-1/4 font-bold'>Tên đề tài:</div>
                            <div  className='w-3/4'>{detai.tendetai}</div>
                        </div>
                        <div className='my-5'>
                            <div className='w-1/4 font-bold'>Tên đề tài bằng tiếng Anh:</div>
                            <div  className='w-3/4 '>{detai.tentienganh}</div>
                        </div>
                        <div className='my-4 '>
                            <div className='font-bold'>Sinh viên thực hiện</div>
                            <div></div>
                        </div>
                        <div className='my-4'>
                            <div className='font-bold'>1. Yêu cầu chức năng</div>
                            <div>{detai.mota_kienthuc}</div>
                        </div>
                        <div className='my-4'>
                            <div className='font-bold'>2. Giới thiệu</div>
                            <div>{detai.mota_gioithieu}</div>
                        </div>
                        <div className='my-4'>
                            <div className='font-bold'>3. Mục tiêu và yêu cầu chức năng</div>
                            <div>{detai.mota_yeucau}</div>
                        </div>
                        <div>
                            <div className='font-bold'>4. Tài liệu tham khảo</div>
                            <div >{detai.mota_tailieu}</div>
                        </div>
                    {/* </tbody> */}
                </div>
            </div>  
        </div>
    );
}

export default Chitietdetaipage;