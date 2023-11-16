import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log("Connected Successfully");
}).catch((err) => {console.log("Could Not Connect")});



app.listen(9292 , () => {
    console.log("App Is Running In Port 9292...!")
})


app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);


