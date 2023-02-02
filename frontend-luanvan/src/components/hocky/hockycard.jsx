import React from "react";


function DShockycard(props) {

    const {stt,nambatdau,namketthuc,hocky,trangthai} = props;
    const khoa = () => {
        console.log("da khoaaaaaaa")
    }
    return (
        <div className="">
            <div className="">
                <div className="w-[75rem] m-auto h-10 bg-white shadow-lg">
                    <div className="grid grid-cols-[150px_300px_300px_300px_120px]">
                        <div className="pt-5 pl-10">{stt}</div>
                        <div className="pt-5 pl-3">{nambatdau}-{namketthuc}</div>
                        <div className="pt-5 pl-5">{hocky}</div>
                        {trangthai && <><div className="pt-5 pl-5">Chưa khóa</div><div className="pt-5 pl-5" onClick={khoa}>Khóa</div></>}
                        {!trangthai && <><div className="pt-5 pl-5">Đã khóa</div><div className="pt-5 pl-5">Mở khóa</div></>}
                        
                        <div className="pt-5 pl-5"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DShockycard;