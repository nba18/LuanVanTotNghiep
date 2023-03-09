import ModeIcon from "@mui/icons-material/Mode";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useEffect, useState } from "react";

// import PropTypes from 'prop-types';
import { utils, writeFileXLSX } from "xlsx";
import { detaiAPI, luanvanAPI } from "../../api";
import Capnhatdetaiform from "./forms/capnhatdetai_form";
import CapnhathoidongForm from "./forms/capnhatdoidong_form";

Danhsachtonghop.propTypes = {};

function Danhsachtonghop(props) {
  // console.log(localStorage.getItem("phanquyen") == 2);
  const [open, setOpen] = React.useState(false);
  const [openHD, setOpenHD] = React.useState(false);
  const [openthongke, setOpenThongke] = React.useState(false);
  const [detai, setDetai] = React.useState(null);
  // const [test, setTest] = useState([]);

  const handleClickOpen = (dt) => {
    setDetai(dt);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenHD = () => {
    setOpenHD(true);
  };

  const handleCloseHD = () => {
    setOpenHD(false);
  };
  const handleClickOpenThongke = () => {
    setOpenThongke(true);
  };

  const handleCloseThongke = () => {
    setOpenThongke(false);
  };

  const [list, setDetaiList] = useState([]);
  // console.log(localStorage.getItem("phanquyen"));
  const fetchDetai = async () => {
    const List = await luanvanAPI.laydsluanvan();
    // console.log(List.data);
    setDetaiList(List.data);
  };
  useEffect(() => {
    fetchDetai();
  }, [list]);

  const handle = () => {
    // console.log
    const temp = list.map((x, index) => {
      const data = new Array(11);
      data[0] = index + 1;
      for (let key in x) {
        switch (key) {
          case "mssv":
            data[1] = x[key];
            break;
          case "sinhvien":
            data[2] = x[key];
            break;
          case "tenluanvantiengviet":
            let cleanText = x[key].replace(/<\/?[^>]+(>|$)/g, "");
            data[3] = cleanText;
            break;
          case "tenluanvantienganh":
            let text = x[key].replace(/<\/?[^>]+(>|$)/g, "");
            data[4] = text;
            break;
          case "giangvien":
            data[5] = x[key];
            break;
          case "thoigianbaove":
            if (x[key].ngaybaove !== "") {
              data[6] = x[key].ngaybaove;
              data[7] = x[key].thutu;
            } else {
              data[6] = "";
              data[7] = "";
            }
            break;
          case "hoidong":
            if (x[key].length !== 0) {
              x[key].map((gv) => {
                if (gv.chucvu === "Chủ tịch") data[8] = gv.giangvien;
                else if (gv.chucvu === "Ủy viên") data[9] = gv.giangvien;
                else if (gv.chucvu === "Thư ký") data[10] = gv.giangvien;
                else {
                  data[8] = "";
                  data[9] = "";
                  data[10] = "";
                }
              });
            } else {
              data[8] = "";
              data[9] = "";
              data[10] = "";
            }
            break;
          default:
            break;
        }
      }
      return data;
    });
    // console.log(temp);
    var ws_data = [
      [
        "STT",
        "MSSV",
        "Họ tên sinh viên",
        "Tên đề tài bằng tiếng việt",
        "Tên đề tài bằng tiếng Anh",
        "Giảng viên hướng dẫn",
        "Ngày bảo vệ",
        "Thứ tự bảo vệ",
        "Chủ tịch",
        "Ủy viên",
        "Thư ký",
      ],
    ];
    const children = ws_data.concat(temp);
    const ws = utils.aoa_to_sheet(children);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, ws, "Danhsach");
    writeFileXLSX(workbook, "Danhsachbaocaoluanvan.xlsx");
  };
  //Thong ke
  // const testfunc = () => {
  const dulieu = [];
  const thongke = list.map((x, index) => {
    // console.log("dtso",index+1);

    for (let key in x) {
      // console.log(key);
      if (key === "hoidong") {
        for (let j in x[key]) {
          // console.log(j);
          if (dulieu.length === 0) {
            dulieu.push({ giangvien: x[key][j].giangvien, count: 1 });
            // console.log(dulieu, "truonghopdautien")
          } else {
            var flag = false;
            for (let i in dulieu) {
              // console.log(dulieu[i].giangvien , x[key][j].giangvien, "ss ")
              if (dulieu[i].giangvien === x[key][j].giangvien) {
                dulieu[i].count++;
                flag = true;
                break;
              }
            }
            if (flag === false) {
              dulieu.push({ giangvien: x[key][j].giangvien, count: 1 });
            }
          }
        }
        // }
      }
    }
  });
  // console.log(dulieu);
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
              <th className="p-2">Giảng viên hướng dẫn</th>
              <th className="p-2">Thời gian bảo vệ</th>
              <th className="p-2">Hội đồng</th>
              <th className="p-2">Chỉnh sửa</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr> */}
            {list.map((detai, index) => {
              let tendetai = detai.tenluanvantiengviet.replace(/<\/?[^>]+(>|$)/g, "");
              return (
                <tr className="my-2" key={detai._id}>
                  <td className="p-2 text-center">{index + 1}</td>
                  <td className="p-2">{detai.mssv}</td>
                  <td className="p-2">{detai.sinhvien}</td>
                  <td className="p-2">{tendetai}</td>
                  <td className="p-2">{detai.tenluanvantienganh}</td>
                  <td className="text-center p-2">{detai.giangvien}</td>
                  <td className="p-2">
                    <div>{detai.thoigianbaove.ngaybaove}</div>
                    <div className="text-center">
                      {detai.thoigianbaove.thutu}
                    </div>
                  </td>
                  {detai.hoidong[0]?.giangvien && (
                    <td className="p-2">
                      <div>1.{detai.hoidong[0]?.giangvien}</div>
                      <div>2.{detai.hoidong[1]?.giangvien}</div>
                      <div>3.{detai.hoidong[2]?.giangvien}</div>
                    </td>
                  )}
                  {!detai.hoidong[0]?.giangvien && <td className="p-2"></td>}
                  {localStorage.getItem("hoten") === detai.giangvien && (
                    <td className="text-center">
                      <ModeIcon
                        sx={{
                          color: "blue",
                          margin: "0 auto",
                          cursor: "pointer",
                        }}
                        onClick={() => handleClickOpen(detai)}
                      ></ModeIcon>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="text-center mt-10">
          Ghi chú vai trò của các thành viên Hội đồng gồm: (1) Chủ tịch, (2) Ủy
          viên, (3) Thư ký
        </p>

        <div className="flex pt-10 relative">
          <div className="absolute right-0">
            <Button
              onClick={handle}
              size="small"
              sx={{ marginRight: "10px" }}
              variant="contained"
            >
              In file
            </Button>
            {localStorage.getItem("phanquyen") === "2" && (
              <>
                <Button
                  onClick={handleClickOpenThongke}
                  variant="contained"
                  size="small"
                  sx={{ marginRight: "10px" }}
                >
                  Thống kê
                </Button>
                <Button
                  onClick={handleClickOpenHD}
                  variant="contained"
                  size="small"
                >
                  Cập nhật giờ bảo vệ và hội đồng
                </Button>
              </>
            )}
          </div>
        </div>
        <div>
          <Dialog
            maxWidth={"lg"}
            fullWidth={true}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle
              sx={{
                color: "white",
                backgroundColor: "#2A84EB",
                textAlign: "center",
                fontWeight: "bold",
              }}
              id="alert-dialog-title"
            >
              {"Cập nhật đề tài"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description"></DialogContentText>
              <Capnhatdetaiform
                detai={detai}
                close={handleClose}
                fetch={fetchDetai}
              ></Capnhatdetaiform>
            </DialogContent>
            <DialogActions></DialogActions>
          </Dialog>
        </div>
        <div>
          <Dialog
            maxWidth={"sm"}
            fullWidth={true}
            open={openthongke}
            onClose={handleCloseThongke}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle
              sx={{
                color: "white",
                backgroundColor: "#2A84EB",
                textAlign: "center",
                fontWeight: "bold",
              }}
              id="alert-dialog-title"
            >
              {"Bảng thống kê số lần tham dự hội đồng của giảng viên"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description"></DialogContentText>
              <div>
                <table className="">
                  <thead>
                    <tr>
                      <th className="w-1/6">STT</th>
                      <th className="w-1/6">Giảng viên</th>
                      <th className="w-1/6">Số hội đồng tham dự</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dulieu.map((gv, index) => {
                      return (
                        <tr className="my-2" key={index}>
                          <td className="p-2 text-center">{index + 1}</td>
                          <td className="p-2 text-center">{gv.giangvien}</td>
                          <td className="p-2 text-center">{gv.count}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </DialogContent>
            <DialogActions></DialogActions>
          </Dialog>
        </div>
        <div>
          <Dialog
            maxWidth={"lg"}
            fullWidth={true}
            open={openHD}
            onClose={handleCloseHD}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle
              sx={{
                color: "white",
                backgroundColor: "#2A84EB",
                textAlign: "center",
                fontWeight: "bold",
              }}
              id="alert-dialog-title"
            >
              {"Cập nhật hội đồng và thời gian bảo vệ"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description"></DialogContentText>
              <CapnhathoidongForm
                danhsach={list}
                close={handleCloseHD}
                fetch={fetchDetai}
              ></CapnhathoidongForm>
            </DialogContent>
            <DialogActions></DialogActions>
          </Dialog>
        </div>
      </div>

      <div className="w-[75rem] m-auto rounded-br-lg rounded-bl-lg h-10 bg-white shadow-lg "></div>
    </div>
  );
}

export default Danhsachtonghop;
