import { Button, TextField } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import PropTypes from 'prop-types';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { detaiAPI, luanvanAPI, nguoidungAPI } from "../../../api";

CapnhathoidongForm.propTypes = {};

const schema = yup
  .object({
    thutu: yup.number().max(10).min(1).required("Vui lòng nhập thứ tự"),
    ngaybaove: yup.date().required("Vui lòng chọn ngày bảo vệ"),
    chutich: yup.string().required("Vui lòng chọn chủ tịch"),
    uyvien: yup.string().required("Vui lòng chọn ủy viên"),
    thuky: yup.string().required("vui lòng chọn thư ký"),
  })
  .required();

function CapnhathoidongForm(props) {
  const formatdate = (date) => {
    const day = new Date(date);
    return day.getDate() + "/" + (day.getMonth() + 1) + "/" + day.getFullYear();
  };
  const [dsgiangvien, setDsgiangvien] = useState([]);
  const fetchDetai = async () => {
    const List = await nguoidungAPI.laygiangvien();
    setDsgiangvien(List.data);
  };
  useEffect(() => {
    fetchDetai();
  }, []);

  const { enqueueSnackbar } = useSnackbar();
  const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(schema) });
  const { danhsach, close, fetch } = props;

  const onSubmit = async (data) => {
    data.ngaybaove = formatdate(data.ngaybaove);
    let hoidong = [];
    hoidong.push({ giangvien: data.chutich, chucvu: "Chủ tịch" });
    hoidong.push({ giangvien: data.uyvien, chucvu: "Ủy viên" });
    hoidong.push({ giangvien: data.thuky, chucvu: "Thư ký" });
    let thoigianbaove = { ngaybaove: data.ngaybaove, thutu: data.thutu };
    let updatedata = { ...data, hoidong, thoigianbaove };

    console.log(updatedata);
    const temp = luanvanAPI.capnhathoidong(updatedata);
    console.log(temp);
    enqueueSnackbar("Cập nhật thành công", { variant: "success" });
    close();
    fetch();
  };

  return (
    <div>
      <div className="py-10">
        <div className="w-full">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex py-5 w-3/4">
              <label className="font-bold text-left w-1/4"> Tên đề tài:</label>
              <select
                id="detai"
                type="select"
                className="w-3/4"
                {...register("detai")}
              >
                {danhsach.map((item) => {
                  item.tenluanvantiengviet = item.tenluanvantiengviet.replace(/<\/?[^>]+(>|$)/g, "");
                  return (
                    <option key={item._id} value={item._id}>
                      {item.tenluanvantiengviet}
                    </option>
                  );
                })}
              </select>
            </div>
            

            <div className="flex py-5 w-3/4">
              <div className="font-bold text-left w-1/4">Ngày bảo vệ:</div>
              <TextField
                {...register("ngaybaove")}
                id="standard-search"
                type="date"
                variant="standard"
              />
            </div>
            <div className="flex py-5 w-3/4">
              <div className="font-bold text-left w-1/4">Thứ tự bảo vệ</div>
              <input
                {...register(
                  "thutu"
                )}
                min="1"
                max="10"
                id="standard-search"
                label="Thứ tự bảo vệ"
                type="number"
                variant="standard"
                className="border-solid border-b-2 border-black w-[140px]"
                defaultValue={1}
              />
            </div>
            <div className="flex py-5 w-3/4 ">
              <div className="font-bold text-left w-1/4">Hội đồng</div>
              <div className="">
                <label className="mr-2">Chủ tịch:</label>
                <select
                  id="chutich"
                  type="select"
                  className="relative mr-10"
                  {...register("chutich")}
                >
                  {dsgiangvien.map((item) => {
                    return (
                      <option key={item._id} value={item.hoten}>
                        {item.hoten}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="">
                <label className="mr-2">Ủy viên:</label>
                <select
                  id="chutich"
                  type="select"
                  className="relative mr-10"
                  {...register("uyvien")}
                >
                  {dsgiangvien.map((item) => {
                    return (
                      <option key={item._id + 1} value={item.hoten}>
                        {item.hoten}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="">
                <label className="mr-2">Thư ký:</label>
                <select
                  id="chutich"
                  type="select"
                  className="relative mr-10"
                  {...register("thuky")}
                >
                  {dsgiangvien.map((item) => {
                    return (
                      <option key={item._id + 2} value={item.hoten}>
                        {item.hoten}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="w-full text-center mt-5">
              <Button sx={{ width: "400px" }} type="submit" variant="contained">
                Cập nhật
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute right-0 top-0 cursor-pointer">
        <DisabledByDefaultIcon color="error" onClick={close}>
          Thoát
        </DisabledByDefaultIcon>
      </div>
    </div>
  );
}

export default CapnhathoidongForm;
