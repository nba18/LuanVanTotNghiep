import ModeIcon from "@mui/icons-material/Mode";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useEffect, useState } from "react";

// import PropTypes from 'prop-types';
// import { utils, writeFileXLSX } from "xlsx";
import { detaiAPI } from "../../api";
// import Capnhatdetaiform from "./forms/capnhatdetai_form";
// import CapnhathoidongForm from "./forms/capnhatdoidong_form";

Nhapdiem.propTypes = {};

function Nhapdiem(props) {
  // console.log(localStorage.getItem("phanquyen") == 2);
  const [open, setOpen] = React.useState(false);

  // const [test, setTest] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  const [list, setDetaiList] = useState([]);
  // console.log(localStorage.getItem("phanquyen"));
  const fetchDetai = async () => {
    const List = await detaiAPI.laydetaitonghop();
    // console.log(List.data);
    setDetaiList(List.data);
  };
  useEffect(() => {
    fetchDetai();
  }, []);

  console.log(localStorage.getItem("id"));
  return (
    <div className="">
      <div className="bg-[#2A84EB] rounded-lg h-10 w-[73rem] p-2 m-auto translate-y-6 shadow-lg shadow-blue-500/50 text-center text-white font-bold">
        Danh sách đề tài
      </div>
      <div className="w-[75rem] m-auto rounded-lg bg-white shadow-lg pt-10">
        <table className="table-auto">
          <thead>
            <tr className="py-2 text-center">
              <th className="p-2">STT</th>
              <th className="p-2">MSSV</th>
              <th className="p-2">Họ tên sinh viên</th>
              <th className="p-2">Tên đề tài bằng tiếng việt</th>
              <th className="p-2">Tên đề tài bằng tiếng Anh</th>
              <th className="p-2">Điểm của chủ tịch</th>
              <th className="p-2">Điểm của ủy viên</th>
              <th className="p-2">Điểm của thư ký</th>
              <th className="p-2">Tổng điểm</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr> */}
            {list.map((detai, index) => {
              let tendetai = detai.tendetai.replace(/<\/?[^>]+(>|$)/g, "");
              return (
                <tr className="my-2" key={detai._id}>
                  <td className="p-2 text-center">{index + 1}</td>
                  <td className="p-2">{detai.sinhvien.mssv}</td>
                  <td className="p-2">{detai.sinhvien.hoten}</td>
                  <td className="p-2">{tendetai}</td>
                  <td className="p-2">{detai.tentienganh}</td>
                  {

                  }
                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="w-[75rem] m-auto rounded-br-lg rounded-bl-lg h-10 bg-white shadow-lg "></div>
    </div>
  );
}

export default Nhapdiem;
