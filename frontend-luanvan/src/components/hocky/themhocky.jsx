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
        const temp = await hockyAPI.themhocky(data);
        console.log(temp);
    }
    return (
        <div className="">
            
        </div>
    );
}

export default Hocky;