import express from "express";
import studentRouter from "./routers/students.routers.js";
const app = express();

app.use(express.json());
app.use("/student",studentRouter);

app.get("/",(req,res)=>{
    res.send({"message":"Welcome to my new student API"});
});

app.listen(8000, ()=> {
    console.log("Server is up and rrunning...");
});