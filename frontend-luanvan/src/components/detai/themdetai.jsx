import React from "react";
import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

function Themdetai() {
    const [hocky, setHocky] = React.useState('');

    const handleChange = event => {
        setHocky(event.target.value)
    };

    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        data.hocky = hocky;
        console.log(data)
    }
    return (
        <div className="">
            <div className="">
                <div className="bg-[#2A84EB] rounded-lg h-10 w-[73rem] p-2 m-auto translate-y-6 shadow-lg shadow-blue-500/50 text-white font-bold text-center" >Thêm đề tài mới</div>
                <div className="w-[75rem] m-auto rounded-lg bg-white h-full shadow-lg mb-5">
                    <div className="pt-12">
                        <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                            <div className="">
                                <TextField {...register('tendetai')}
                                    name="tendetai"
                                    label="Tên đề tài"
                                    type="text"
                                    style={{ width: "700px" }}
                                />
                            </div>
                            <div className="">
                                <Box sx={{ minWidth: 120 }} className="w-[700px] m-auto mt-2">
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Học kỳ</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={hocky}
                                            label="Học kỳ"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={'1'}>Học kỳ 1</MenuItem>
                                            <MenuItem value={'2'}>Học kỳ 2</MenuItem>
                                            <MenuItem value={'hè'}>Học kỳ hè</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <div className="pt-2">
                                <TextField {...register('mota1')}
                                    name="mota1"
                                    label="Yêu cầu kiến thức"
                                    type="text"
                                    multiline
                                    rows={5}
                                    style={{ width: "700px" }}
                                />
                            </div>
                            <div className="pt-2">
                                <TextField {...register('mota2')}
                                    name="mota2"
                                    label="Giới thiệu"
                                    type="text"
                                    multiline
                                    rows={5}
                                    style={{ width: "700px" }}
                                />
                            </div>
                            <div className="pt-2">
                                <TextField {...register('mota3')}
                                    name="mota3"
                                    label="Mục tiêu và yêu cầu chức năng"
                                    type="text"
                                    multiline
                                    rows={5}
                                    style={{ width: "700px" }}
                                />
                            </div>
                            <div className="pt-2">
                                <TextField {...register('mota4')}
                                    name="mota4"
                                    label="Tài liệu tham khảo"
                                    type="text"
                                    multiline
                                    rows={5}
                                    style={{ width: "700px" }}
                                />
                            </div>
                            <div className="pt-2">
                                <TextField {...register('motakhac')}
                                    name="motakhac"
                                    label="Yêu cầu khác"
                                    type="text"
                                    multiline
                                    rows={5}
                                    style={{ width: "700px" }}
                                />
                            </div>
                            
                            <div className="pt-5 pb-5"><Button type='submit' variant="contained" className="w-[500px]" >Thêm</Button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Themdetai;