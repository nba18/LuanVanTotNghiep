import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

Detaicard_xetduyet.propTypes = {

};

function Detaicard_xetduyet(props) {
    const {id, ten, hocky, stt } = props;
    const cleanText = ten.replace(/<\/?[^>]+(>|$)/g, "");
    return (
        <div className="">
            <div className="">
                <div className="w-[75rem] m-auto bg-white shadow-lg">
                    <div className="grid grid-cols-[100px_550px_150px_245px_165px] py-2">
                        <div className=" w-1/8 text-center">{stt}</div>
                        <div className=" w-3/8">{cleanText}</div>
                        <div className=" 1/4 text-center">{hocky.nambatdau} - {hocky.namketthuc} : {hocky.hocky}</div>
                        <div className=" 1/8 text-center"></div>
                        <Link to={`/detai/${id}`}><div className="1/8 text-center"><Button type='submit' variant="contained" >Duyệt</Button></div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detaicard_xetduyet;