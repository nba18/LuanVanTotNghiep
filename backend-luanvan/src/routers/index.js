// const userRouter = require("./user.router")
const giangvienRouter = require("./giangvien.router")
const quantrivienRouter = require("./quantrivien.router")
const express = require("express");

function router(app){
    app.use("/giangvien",giangvienRouter)
    // app.use("/",userRouter)
    app.use("/quantrivien",quantrivienRouter)
    
}
module.exports = router