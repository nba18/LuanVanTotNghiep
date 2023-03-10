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
                if (gv.chucvu === "Ch??? t???ch") data[8] = gv.giangvien;
                else if (gv.chucvu === "???y vi??n") data[9] = gv.giangvien;
                else if (gv.chucvu === "Th?? k??") data[10] = gv.giangvien;
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
        "H??? t??n sinh vi??n",
        "T??n ????? t??i b???ng ti???ng vi???t",
        "T??n ????? t??i b???ng ti???ng Anh",
        "Gi???ng vi??n h?????ng d???n",
        "Ng??y b???o v???",
        "Th??? t??? b???o v???",
        "Ch??? t???ch",
        "???y vi??n",
        "Th?? k??",
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
        Danh s??ch ????? t??i
      </div>
      <div className="w-[75rem] m-auto rounded-lg bg-white shadow-lg pt-10">
        <table className="table-auto">
          <thead>
            <tr className="py-2 text-center">
              <th className="p-2">STT</th>
              <th className="p-2">MSSV</th>
              <th className="p-2">H??? t??n sinh vi??n</th>
              <th className="p-2">T??n ????? t??i b???ng ti???ng vi???t</th>
              <th className="p-2">T??n ????? t??i b???ng ti???ng Anh</th>
              <th className="p-2">Gi???ng vi??n h?????ng d???n</th>
              <th className="p-2">Th???i gian b???o v???</th>
              <th className="p-2">H???i ?????ng</th>
              <th className="p-2">Ch???nh s???a</th>
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
          Ghi ch?? vai tr?? c???a c??c th??nh vi??n H???i ?????ng g???m: (1) Ch??? t???ch, (2) ???y
          vi??n, (3) Th?? k??
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
                  Th???ng k??
                </Button>
                <Button
                  onClick={handleClickOpenHD}
                  variant="contained"
                  size="small"
                >
                  C???p nh???t gi??? b???o v??? v?? h???i ?????ng
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
              {"C???p nh???t ????? t??i"}
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
              {"B???ng th???ng k?? s??? l???n tham d??? h???i ?????ng c???a gi???ng vi??n"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description"></DialogContentText>
              <div>
                <table className="">
                  <thead>
                    <tr>
                      <th className="w-1/6">STT</th>
                      <th className="w-1/6">Gi???ng vi??n</th>
                      <th className="w-1/6">S??? h???i ?????ng tham d???</th>
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
              {"C???p nh???t h???i ?????ng v?? th???i gian b???o v???"}
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
