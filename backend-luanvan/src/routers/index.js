// const userRouter = require("./user.router")
const giangvienRouter = require("./giangvien.router")
const quantrivienRouter = require("./quantrivien.router")
const accountRouter = require("./account.router")
const truongkhoaRouter = require("./truongkhoa.router")
const express = require("express");

function router(app){
    app.use("/giangvien",giangvienRouter)
    app.use("/",accountRouter)
    app.use("/quantrivien",quantrivienRouter)
    app.use("/truongkhoa",truongkhoaRouter)
    
}
module.exports = router