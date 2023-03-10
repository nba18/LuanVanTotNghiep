import React, { useState } from "react";
import { Markup } from 'interweave';
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMatch } from 'react-router-dom';
import { detaiAPI } from "../../api";
// tendetai={detai.tendetai} tengiangien={detai.giangvien.hoten} tentienganh={detai.tentienganh} mota_kienthuc={detai.mota_kienthuc} mota_gioithieu={detai.mota_gioithieu} mota_yeucau={detai.mota_yeucau} mota_tailieu={detai.mota_tailieu} mota_khac={detai.mota_khac} 
function Chitietdetai(props) {
    const { detai } = props;
    const navigate = useNavigate();
    const match = useMatch('/detai/:id')
    const duyet = async() => {
        const temp = await detaiAPI.duyetdetai({id:match.params.id})
        navigate('/duyetdetai')
    }
    const chinhsua = async() => {
        const temp = await detaiAPI.yeucauchinhsua({id:match.params.id})
        navigate('/duyetdetai')
    }
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [hocky, setHocky] = useState('');
    const handleChange = event => {
        setHocky(event.target.value)
    };
    console.log("xin choa", hocky)
    const sodetaiduocchon = 4
    const data = []
    for (let i = 1; i <= sodetaiduocchon; i++) {
        data.push(i)
    }
    const cleanText = detai.tendetai?.replace(/<\/?[^>]+(>|$)/g, "");
    const chondetai = async () => {
        let obj = {
            tendetai: cleanText,
            tengiangvien: detai.giangvien.hoten,
            hocky: detai.hocky._id,
            iddetai: match.params.id,
            thutu: hocky,
        }
        let obj2 = {
            idsinhvien: localStorage.getItem("id")
        }
        let data1 = []
        data1.push(obj)
        data1.push(obj2)
         const temp = await detaiAPI.chondetai(data1)
        //  console.log(temp)
        setOpen(false);
        if(temp.data.a === "thatbai"){
            window.alert("Them that bai")
        }
    }
    console.log(localStorage.getItem("phanquyen"))
    return (
        <div>
            <div className="bg-[#2A84EB] rounded-lg h-10 w-[73rem] p-2 m-auto translate-y-6 shadow-lg shadow-blue-500/50 text-center text-white font-bold" >Chi ti???t ????? t??i</div>
            <div className="w-[75rem] m-auto rounded-lg bg-white shadow-lg pt-5">
                <div className='my-5 ml-10 mr-10 '>
                    <div className='w-1/4 font-bold'>T??n ????? t??i</div>
                    <Markup content={detai.tendetai} />
                </div>
                <div className='my-5 ml-10 mr-10 '>
                    <div className='w-1/4 font-bold'>T??n ????? t??i b???ng ti???ng Anh:</div>
                    <Markup content={detai.tentienganh} />
                </div>
                <div className='my-4 ml-10 mr-10  '>
                    <div className='font-bold'>Sinh vi??n th???c hi???n</div>
                    <div></div>
                </div>
                <div className='my-4 ml-10 mr-10 '>
                    <div className='font-bold'>1. Y??u c???u ki???n th???c</div>
                    <Markup content={detai.mota_kienthuc} />
                </div>
                <div className='my-4 ml-10 mr-10 '>
                    <div className='font-bold'>2. Gi???i thi???u</div>
                    <Markup content={detai.mota_gioithieu} />
                </div>
                <div className='my-4 ml-10 mr-10 '>
                    <div className='font-bold'>3. M???c ti??u v?? y??u c???u ch???c n??ng</div>
                    <Markup content={detai.mota_yeucau} />
                </div>
                <div className='my-4 ml-10 '>
                    <div className='font-bold'>4. T??i li???u tham kh???o</div>
                    <Markup content={detai.mota_tailieu} />
                </div>
                <div className='my-4 ml-10 mr-10 pb-5'>
                    <div className='font-bold'>5. Y??u c???u kh??c</div>
                    <Markup content={detai.mota_khac} />
                </div>
                {localStorage.getItem('phanquyen') == 2 ? <div className="flex justify-center">
                    <div className="mr-3 mb-5"><Button variant="contained" onClick={duyet}>Duy???t</Button></div>
                    <div className="ml-3 mb-5"><Button variant="contained" onClick={chinhsua}>Y??u c???u ch???nh s???a</Button></div>
                </div> : <></>}
                {localStorage.getItem('phanquyen') == 4 ? <div className="flex justify-center">
                    <div className="mr-3 mb-5"><Button variant="contained" onClick={handleClickOpen}>Ch???n ????? t??i</Button></div>
                </div> : <></>}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {`Th??m ????? t??i`}
                    </DialogTitle>
                    <DialogContent >
                        <DialogContentText id="alert-dialog-description" component={'span'} >
                            <Box sx={{ minWidth: 120 }} className="w-[300px] m-auto mt-2" >
                                <FormControl fullWidth component={'span'} >
                                    <InputLabel id="demo-simple-select-label">Th??? t??? ??u ti??n</InputLabel>
                                    <Select component={'span'}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Th??? t??? ??u ti??n"
                                        value={hocky}
                                        onChange={handleChange}
                                    >
                                        {data.map((x, index) => {
                                            return (
                                                <MenuItem value={x} key={index}><span>{index + 1}</span></MenuItem>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
                            </Box>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={chondetai}>Th??m</Button>
                        <Button onClick={handleClose}>????ng</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}
export default Chitietdetai;