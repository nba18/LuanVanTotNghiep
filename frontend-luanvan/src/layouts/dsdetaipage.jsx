import React from 'react';
import Dashboard from '../components/dashboard';
import Danhsachdetai from '../components/detai/danhsachdetai';
// import PropTypes from 'prop-types';

Dsdetaipage.propTypes = {
    
};

function Dsdetaipage(props) {
    return (
        <div className="grid grid-cols-[300px_minmax(900px,_1fr)] w-full bg-[#F0F2F5]">
            <div className="w-ful h-screen">
                <Dashboard />
            </div>
            <div className="w-full h-full">
                <Danhsachdetai />
            </div>  
        </div>
    );
}

export default Dsdetaipage;