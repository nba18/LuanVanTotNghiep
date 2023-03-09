import React from 'react';
import Dashboard from '../components/dashboard';
import Danhsachdetaixetduyet from '../components/detai/danhsachdetai_xetduyet';

Xetduyetdetai_page.propTypes = {

};

function Xetduyetdetai_page(props) {
    return (
        <div className="grid grid-cols-[300px_minmax(900px,_1fr)] w-full bg-[#F0F2F5]">
            <div className="w-ful h-screen">
                <Dashboard />
            </div>
            <div className="w-full h-full">
                <Danhsachdetaixetduyet />
            </div>  
        </div>
    );
}

export default Xetduyetdetai_page;