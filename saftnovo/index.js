const express = require ("express");
const bodyParser = require("body-parser");
const userRouter= require("./router/userRouter")
const mongoose =require("mongoose")

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/func')

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));


app.use("/user",userRouter())
module.exports=app.listen(8000,()=>console.log("Rodando na rota 8000"));