import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log("Connected Successfully");
}).catch((err) => {console.log("Could Not Connect")});

const app = express();
app.listen(9292 , () => {
    console.log("App Is Running In Port 9292...!")
})