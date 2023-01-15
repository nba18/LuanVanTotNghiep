const userRouter = require("./user.router")
const adminRouter = require("./admin.router")
const quantrivienRouter = require("./quantrivien.router")
const express = require("express");

function router(app){
    // app.use("/admin",adminRouter)
    app.use("/",userRouter)
    app.use("/quantrivien",quantrivienRouter)
    
}
module.exports = router