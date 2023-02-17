import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { read, writeFileXLSX ,utils} from "xlsx";
import { detaiAPI } from '../../api';

Danhsachtonghop.propTypes = {
    
};

function Danhsachtonghop(props) {
    const [list, setDetaiList] = useState([]);
    const fetchDetai = async () => {
        const List = await detaiAPI.laydsdetai(localStorage.getItem("id"));
        // console.log(List.data)
        setDetaiList(List.data);
        
    };
    useEffect(() => {
        
        fetchDetai();
    }, []);
    const [hienthi,setHienthi]= useState(false);
    const handle = ()=>{
        // console.log
        const temp = list.map((x,index)=>{
            const data= new Array(8) ;
            data[0]=index+1
            for(let key in x) {
                switch (key) {
                    case "sinhvien":
                        data[1]=x[key].mssv
                        data[2]=x[key].hoten
                        break;
                    case "tendetai":
                        data[3]=x[key]
                        break;
                    case "tentienganh":
                        data[4]=x[key]
                        break;
                    case "giangvien":
                        data[5]=x[key].hoten
                        break;
                    case "giobaove":
                        data[6]=x[key]
                        break;
                    case "hoidong":
                        data[7]="hoidong"
                        break;
                    default:
                        break;
                }
            }
            return data
        })
        // console.log(temp);
        var ws_data = [
            [ "STT", "MSSV", "Họ tên sinh viên", "Tên đề tài bằng tiếng việt", "Tên đề tài bằng tiếng Anh", "Giảng viên hướng dẫn", "Giờ bảo vệ" ,"Hội đồng"],
          ];
          const children = ws_data.concat(temp);
          const ws = utils.aoa_to_sheet(children);
          const workbook = utils.book_new();
          utils.book_append_sheet(workbook, ws, "Dates");
          writeFileXLSX(workbook, "out.xlsx")
            }
    return (
        <div className="">
            <div className="bg-[#2A84EB] rounded-lg h-10 w-[73rem] p-2 m-auto translate-y-6 shadow-lg shadow-blue-500/50 text-center text-white font-bold" >Danh sách đề tài</div>
            <div className="w-[75rem] m-auto rounded-lg bg-white shadow-lg pt-5">
                <div className="flex font-bold">
                    <div className="mx-2 w-1/8">STT</div>
                    <div className="mx-2 w-1/8">MSSV</div>
                    <div className="mx-2 w-1/8">Họ tên sinh viên</div>
                    <div className="mx-2 w-1/8">Tên đề tài bằng tiếng việt</div>
                    <div className=" mx-2 w-1/8">Tên đề tài bằng tiếng Anh</div>
                    <div className="mx-2 w-1/8 ">Giảng viên hướng dẫn</div>
                    {hienthi&&
                        <>
                        <div className=" mx-2 w-1/8">Giờ bảo vệ</div>
                        <div className=" mx-2 w-1/8">Hội đồng</div></>
                    }

                </div>
                <div  className="">
                        {/* {list.map((detai, index) => {
                            return (
                                <div key={detai._id} className='flex' >
                                    <div className="mx-2 w-1/8">{index+1}</div>
                                    <div className="mx-2 w-1/8">MSSV</div>
                                    <div className="mx-2 w-1/8">Họ tên sinh viên</div>
                                    <div className="mx-2 w-1/8">{detai.tendetai}</div>
                                    <div className=" mx-2 w-1/8">Tên đề tài bằng tiếng Anh</div>
                                    <div className="mx-2 w-1/8 ">Giảng viên hướng dẫn</div>
                                    {hienthi&&
                                        <>
                                        <div className=" mx-2 w-1/8">Giờ bảo vệ</div>
                                        <div className=" mx-2 w-1/8">Hội đồng</div></>
                                    }
                                </div>
                            );
                        })} */}
                    </div>
                
                <div className="w-[75rem] m-auto rounded-br-lg rounded-bl-lg h-10 bg-white shadow-lg"></div>
            </div>
            <div onClick={()=>setHienthi(!hienthi)}>hienthi</div>
            <div onClick={handle}>aaaaaaaaaaaa</div>
        </div>


    );
}

export default Danhsachtonghop;