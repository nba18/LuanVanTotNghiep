import React from "react";


function DShockycard() {
    const data = {
        stt:1,
        nambatdau:2011,
        namketthuc:2013,
        hocky:1,
        trangthai:"Chưa khóa",
    }
    return (
        <div className="">
            <div className="">
                <div className="w-[75rem] m-auto h-10 bg-white shadow-lg">
                    <div className="grid grid-cols-[150px_300px_300px_300px_120px]">
                        <div className="pt-5 pl-10">{data.stt}</div>
                        <div className="pt-5 pl-3">{data.nambatdau}-{data.namketthuc}</div>
                        <div className="pt-5 pl-5">{data.hocky}</div>
                        <div className="pt-5 pl-5">{data.trangthai}</div>
                        <div className="pt-5 pl-5"></div>
                    </div>
                </div>
                <div className="w-[75rem] m-auto h-10 bg-white shadow-lg">
                    <div className="grid grid-cols-[150px_300px_300px_300px_120px]">
                        <div className="pt-5 pl-10">{data.stt}</div>
                        <div className="pt-5 pl-3">{data.nambatdau}-{data.namketthuc}</div>
                        <div className="pt-5 pl-5">{data.hocky}</div>
                        <div className="pt-5 pl-5">{data.trangthai}</div>
                        <div className="pt-5 pl-5"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DShockycard;