import students from "../models/students.models.js"

export function getStudentList(){
    return students;
}

export function addStudent(studentData){
    const newStudent = {
        name:studentData.name,
        rollno:studentData.rollno,
        designation:studentData.designation,
        percentage:studentData.percentage,
    };
    students.push(newStudent);
    return newStudent;
}

export function getStudentByRollNo(rollno){
    let requiredStudent = null;
    students.map((student,index)=>{
        if (student.rollno==rollno){
            requiredStudent = students[index]
        }
    });
    return requiredStudent;
}

export function updateStudent(rollno,student) {
    let updatedStudent = null;
    students.map((std,index)=>{
        if (std.rollno==rollno) {
            students[index].name= student.name,
            students[index].rollno=student.rollno,
            students[index].designation=student.designation,
            students[index].percentage=student.percentage,

            updatedStudent=students[index];
        };
    });
    return updatedStudent;
}

export function deleteStudent(rollno) {
    let studentToDelete = null;
    students.map((student, index)=> {
        if(student.rollno==rollno) {
            studentToDelete = index;
            students.splice(studentToDelete, 1)
        };
    });
    return studentToDelete;
}

export function getHighestPercentage() {
    let topStudents=[];
    let maxPercentage=0;

    students.map((student)=> {
        if(student.percentage>maxPercentage){
            maxPercentage=student.percentage;
        };
    });

    students.map((student) => {
        if(student.percentage==maxPercentage) {
            topStudents.push(student);
        };
    });

    return topStudents;
};