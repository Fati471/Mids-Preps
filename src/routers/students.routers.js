import express from "express";
import {getStudentList, addStudent, getStudentByRollNo, updateStudent, deleteStudent, getHighestPercentage} from "../controllers/students.controllers.js"

const studentRouter=express.Router();

studentRouter.get("/",(req,res)=> {
    const response = getStudentList();
    res.send({data:response})
});

studentRouter.post("/",(req,res)=> {
    const student = req.body
    const response = addStudent(student);
    res.send({data:response});
});

studentRouter.get("/:rollno",(req,res)=>{
    const rollno = req.params.rollno;
    console.log(`Roll no to find ${rollno}`);
    const response = getStudentByRollNo(rollno);
    res.send({data:response});
})

studentRouter.put("/:rollno", (req,res)=>{
    const rollno = req.params.rollno;
    const student = req.body;
    const response = updateStudent(rollno,student);
    res.send({data:response});
})

studentRouter.delete("/:rollno", (req,res)=>{
    const rollno = req.params.rollno;
    const response = deleteStudent(rollno);
    res.send(`Student with ${rollno} is deleted`)
})

studentRouter.get("/highest-percentage", (req,res)=>{
    res.send(getHighestPercentage());
})
export default studentRouter;