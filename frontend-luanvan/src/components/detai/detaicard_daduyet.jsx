import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

Detaicard_daduyet.propTypes = {

};

function Detaicard_daduyet(props) {
    const {id, ten, hocky, stt } = props;
    const cleanText = ten.replace(/<\/?[^>]+(>|$)/g, "");
    return (
        <div className="">
            <div className="">
                <div className="w-[75rem] m-auto bg-white shadow-lg">
                    <div className="grid grid-cols-[100px_650px_150px_150px_100px] py-2">
                        <div className=" w-1/8 text-center">{stt}</div>
                        <div className=" w-3/8">{cleanText}</div>
                        <div className=" 1/4 p-1 text-center">{hocky.nambatdau} - {hocky.namketthuc}</div>
                        <div className=" 1/8 p-1 text-center">{hocky.hocky}</div>
                        <Link to={`/detai/${id}`}><div className="1/8 text-center"><Button type='submit' variant="contained" >Xem</Button></div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detaicard_daduyet;