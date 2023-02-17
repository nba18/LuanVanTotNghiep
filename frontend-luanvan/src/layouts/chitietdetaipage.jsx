import { Button, textarea } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
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
    const id  =match.params.id
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        // let detai ={...data, id: match.params.id};
        console.log(id,data);
        // c
        const tempt = await detaiAPI.capnhatdetai(id,data);
        console.log(tempt);
    }
    return (
        <div className="grid grid-cols-[300px_minmax(900px,_1fr)] w-full bg-[#F0F2F5]">
            <div className="w-ful h-screen">
                <Dashboard />
            </div>
            <div className="w-full h-full ">
                {/* {detai.tendetai} */}
                <div className="bg-[#2A84EB] rounded-lg h-10 w-[73rem] p-2 m-auto translate-y-6 shadow-lg shadow-blue-500/50 text-center text-white font-bold" >Chi tiết đề tài</div>
                    <div className="w-[75rem] m-auto rounded-lg bg-white h-full shadow-lg mb-5">
                        <div className="pt-12 ml-[75px]">
                            <form className="" onSubmit={handleSubmit(onSubmit)}>
                                <div className="my-10 flex ">
                                    <div className='w-1/4 ml-10 font-bold'>Tên đề tài:</div>

                                    <textarea className='outline-0 border-b border-black w-[700px]' {...register('tendetai')}
                                        // name="tendetai"
                                        defaultValue={detai.tendetai}
                                    />
                                </div>

                                <div className="pt-4 flex">
                                    <div className='w-1/4 ml-10 font-bold'>Tên đề tài bằng tiếng Anh:</div>
                                    <textarea className='outline-0 border-b border-black w-[700px]' {...register('tentienganh')}
                                        name="tentienganh"
                                        defaultValue={detai.tentienganh}
                            
                                    />
                                </div>

                                <div className="pt-2 flex">
                                    <div className='w-1/4 ml-10 font-bold'>Sinh viên thực hiện</div>
                                    <textarea className='outline-0 border-b border-black w-[700px]'
                                        name="sinhvien"
                                        defaultValue={detai.sinhvien}
                                        // label="Sinh viên"
                                        disabled
            
                                    />
                                </div>
                                
                                <div className="my-10 flex">
                                    <div className='w-1/4 ml-10 font-bold'>1. Yêu cầu kiến thức</div>
                                    <textarea className='outline-0 border-b border-black w-[700px] h-[50px] resize' {...register('mota_kienthuc')}
                                        name="mota_kienthuc"
                                        defaultValue={detai.mota_kienthuc}
         
                                    />
                                </div>
                                <div className="my-10 flex">
                                    <div className='font-bold w-1/4 ml-10'>2. Giới thiệu</div>
                                    <textarea  className='outline-0 border-b border-black w-[700px] h-[200px] resize' {...register('mota_gioithieu')}
                                        name="mota_gioithieu"
                                        // label="Giới thiệu"
                                        defaultValue={detai.mota_gioithieu}
      
                                    />
                                </div>
                                <div className="my-10 flex">
                                    <div className='font-bold w-1/4 ml-10'>3. Yêu cầu chức năng</div>
                                    <textarea className='outline-0 border-b border-black w-[700px] h-[200px] resize' {...register('mota_yeucau')}
                                        defaultValue={detai.mota_yeucau}
                                        name="mota_yeucau"

                                    />
                                </div>
                                <div className="my-10 flex">
                                    <div className='font-bold w-1/4 ml-10'>4. Tài liệu tham khảo</div>
                                    <textarea className='selection:text-fuchsia-900 outline-0 border-b border-black w-[700px] h-[200px] resize' {...register('mota_tailieu')}
                                        defaultValue={detai.mota_tailieu}
                                        name="mota_tailieu"
 
                                    />
                                </div>
                                <div className="my-10 flex">
                                <div className='font-bold w-1/4 ml-10'>5. Yêu cầu khác</div>
                                    <textarea className='selection:text-fuchsia-900 outline-0 border-b border-black w-[700px] h-[100px] resize' {...register('mota_khac')}
                                        defaultValue={detai.mota_khac}
                                        name="mota_khac"

                                    />
                                </div>
                                <div className="my-10 flex w-full text-right relative ml-[800px]">
                                    <input  className='' 
                                            value={2}
                                            // name="trangthai"
                                            type="checkbox"

                                        />
                                    <label className=''>Xác nhận báo cáo</label>
                                </div>
                                <div className='w-full text-center'>
                                    <div className="py-5 mx-auto  relative"><Button type='submit' variant="contained" className="w-[500px] " >Thêm</Button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>  
    );
}

export default Chitietdetaipage;