import { Button, Checkbox } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSnackbar } from 'notistack';
// import PropTypes from 'prop-types';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { detaiAPI } from "../../../api";

Capnhatdetaiform.propTypes = {};

const schema = yup
  .object({
    tendetai: yup.string().required("Vui lòng không để trống tên đề tài!"),
    tentienganh: yup.string().required("Vui lòng không để trống tên đề tài!"),
  })
  .required();

function Capnhatdetaiform(props) {
  const { enqueueSnackbar } = useSnackbar();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const { detai, close, fetch} = props;
  detai.tendetai = detai.tendetai.replace(/<\/?[^>]+(>|$)/g, "");
  detai.tentienganh = detai.tentienganh.replace(/<\/?[^>]+(>|$)/g, "");

  const [chon, SetChon] = useState(true);
  const onSubmit = async (data) => {
    let dt = { ...data, check: chon , id:detai._id};
    console.log(dt);
    const temp = detaiAPI.capnhatdetai(dt);
    console.log(temp);
    enqueueSnackbar('Cập nhật thành công', {variant: 'success'});
    close()
    fetch();
    // console.log(detai);
  };
  //   console.log(chon);

  return (
    <div>
      <div className="flex font-bold text-center">
        <div className="p-4 w-2/5">Tên đề tài tiếng Việt</div>
        <div className="p-4 w-2/5">Tên đề tài tiếng Anh</div>
        <div className="p-4 w-1/5">Xác nhận báo cáo</div>
      </div>
      <div>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex">
            <div className="p-4 w-2/5">
              <textarea
                className="block w-full border-solid border-black border-b-2 focus:border-none"
                {...register("tendetai", { required: true })}
                // onChange={setTenta}

                defaultValue={detai.tendetai}
              ></textarea>
              <div className="text-red-500 text-sm">
                {errors.tendetai?.message}
              </div>
            </div>
            <div className="p-4 w-2/5">
              <textarea
                className="block w-full border-solid border-black border-b-2 focus:border-none"
                {...register("tentienganh", { required: true })}
                // onChange={setTenta}

                defaultValue={detai.tentienganh}
              ></textarea>
              <div className="text-red-500 text-sm">
                {errors.tentienganh?.message}
              </div>
            </div>
            <div className="p-4 w-1/5 text-center">
              <Checkbox
                defaultChecked
                onChange={() => SetChon(!chon)}
                inputProps={{ "aria-label": "controlled" }}
              />
            </div>
          </div>
          <div className="text-right">
            <Button color="error" onClick={close}>
              Hủy
            </Button>
            <Button type="submit" variant="contained">
              Cập nhật
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Capnhatdetaiform;
