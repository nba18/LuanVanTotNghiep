import React from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

Detaicard.propTypes = {
    
};

function Detaicard(props) {
    const {ten, hocky, trangthai, stt} = props;
    return (
        <div className="">
            <div className="">
                <div className="w-[75rem] m-auto bg-white shadow-lg">
                    <div className="grid grid-cols-[100px_650px_150px_150px_150px] text-center py-2">
                        <div className=" w-1/8 p-1 ">{stt}</div>
                        <div className=" w-3/8 p-1">{ten}</div>
                        <div className=" 1/4 p-1 ">{hocky.nambatdau} - {hocky.namketthuc}</div>
                        <div className=" 1/8 p-1 ">{hocky.hocky}</div>
                        <div className=" w-1/8 pl-2  ">{trangthai}</div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detaicard;