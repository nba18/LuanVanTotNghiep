import React from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

Detaicard.propTypes = {

};

function Detaicard(props) {
    const { ten, hocky, trangthai, stt } = props;
    let tendt = ten.replace(/<\/?[^>]+(>|$)/g, "");
    return (
        <div className="">
            <div className="">
                <div className="w-[75rem] m-auto bg-white shadow-lg">
                    <div className="grid grid-cols-[100px_650px_150px_145px_150px] py-2">
                        <div className=" w-1/8 p-1 text-center">{stt}</div>
                        <div className=" w-3/8 p-1">{tendt}</div>
                        <div className=" 1/4 p-1 text-center">{hocky.nambatdau} - {hocky.namketthuc}</div>
                        <div className=" 1/8 p-1 text-center">{hocky.hocky}</div>
                        {trangthai === 1 ? <div className=" w-1/8 pl-2  text-center">Chưa duyệt</div> : <></>}
                        {trangthai === 2 ? <div className=" w-1/8 pl-2  text-center">Đã duyệt</div> : <></>}
                        {trangthai === 3 ? <div className=" w-1/8 pl-2  text-center">Yêu cầu chỉnh sửa</div> : <></>}
                        {trangthai === 4 ? <div className=" w-1/8 pl-2  text-center">Đã khóa</div> : <></>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detaicard;