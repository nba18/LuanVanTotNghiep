import React from "react";
import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {hockyAPI} from '../../api/index';

function Hocky() {
    const [hocky, setHocky] = React.useState('');

    const handleChange = event => {
        setHocky(event.target.value)
    };

    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        data.hocky = hocky;
        // console.log(data)
        const temp = await hockyAPI.themhocky(data);
        console.log(temp);
    }
    return (
        <div className="">
            <div className="">
                <div className="bg-[#2A84EB] rounded-lg h-10 w-[73rem] p-2 m-auto translate-y-6 shadow-lg shadow-blue-500/50 text-white font-bold text-center" >Thêm học kỳ mới</div>
                <div className="w-[75rem] m-auto rounded-lg bg-white h-[310px] shadow-lg">
                    <div className="pt-12">
                        <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                            <div className="">
                                <TextField {...register('nambatdau')}
                                    name="nambatdau"
                                    label="Năm bắt đầu"
                                    type="number"
                                    style={{ width: "300px" }}
                                />
                            </div>
                            <div className="pt-2">
                                <TextField {...register('namketthuc')}
                                    name="namketthuc"
                                    label="Năm kết thúc"
                                    type="number"
                                    style={{ width: "300px" }}
                                />
                            </div>
                            <div className="">
                                <Box sx={{ minWidth: 120 }} className="w-[300px] m-auto mt-2">
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
                            <div className="pt-5"><Button type='submit' variant="contained" >Thêm</Button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hocky;