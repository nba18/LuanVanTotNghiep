import { Button } from "@mui/material";
import React from "react";
import { hockyAPI } from "../../api";


function DShockycard(props) {

    const {stt,nambatdau,namketthuc,hocky,trangthai,id, reload} = props;
    const khoa = async() => {
        await hockyAPI.khoahocky({id});
        reload();
        
    }

    const mokhoa = async() => {
        await hockyAPI.mokhoahocky({id});
        reload();
    }
    return (
        <div className="">
            <div className="">
                <div className="w-[75rem] m-auto h-10 bg-white shadow-lg">
                    <div className="grid grid-cols-[150px_300px_300px_300px_120px]">
                        <div className="pt-5 pl-10">{stt}</div>
                        <div className="pt-5 pl-3">{nambatdau}-{namketthuc}</div>
                        <div className="pt-5 pl-5">{hocky}</div>
                        {trangthai && <><div className="pt-5 px-5">Chưa khóa</div>
                            <div className="my-5 mx-4">
                                <Button onClick={khoa} type='submit' variant="contained" className="w-[100px]" >Khóa</Button>
                            </div></>}
                        {!trangthai && <><div className="pt-5 px-5">Đã khóa</div>
                            <div className="my-5 mx-4">
                                <Button onClick={mokhoa} type='submit' variant="contained" className="w-[100px]">Mở Khóa</Button>
                            </div></>}
                        
                        <div className="pt-5 pl-5"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DShockycard;