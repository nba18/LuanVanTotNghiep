const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose")
const config = require("./src/config/index")
const route = require("./src/routers/index")
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
const path = require("path")
app.use("/files",express.static(path.join(__dirname,'files')))
route(app)

const PORT = config.app.port;
const url = config.DB.url;
mongoose.connect(url).then((res) => {
    console.log(`Ket noi thanh cong`)
}).catch((error) => {
    console.log(`Loi`,error)
})
app.listen(PORT, () => {
    console.log(`Sever is on port ${PORT}`)
})
