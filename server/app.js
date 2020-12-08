const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


app.get('/',(req,res)=>{
    res.send("WElcome to node js")
})

app.listen(5000,()=>{
    console.log("server is running")
})

