import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

Detaicard.propTypes = {
    
};

function Detaicard(props) {
    const {ten, hocky, trangthai, nienkhoa, stt} = props;
    return (
        <div className="">
            <Link to='/chitietdetaipage' className="">
                <div className="w-[75rem] m-auto h-10 bg-white shadow-lg">
                    <div className="grid grid-cols-[150px_300px_300px_300px_120px]">
                        <div className="pt-5 pl-10">{stt}</div>
                        <div className="pt-5 pl-5">{ten}</div>
                        <div className="pt-5 pl-3">{nienkhoa}</div>
                        <div className="pt-5 pl-5">{hocky}</div>
                        <div className="pt-5 text-center ">{trangthai}</div>
                        
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Detaicard;