const studentList = [];
 function addStudent() {
    let studentName = document.getElementById("studentName").value;
    let studentId = document.getElementById("studentId").value;
    let studentMajor = document.getElementById("studentMajor").value;
    let studentCourse = document.getElementById("studentCourse").value;
    let student = {
        studentName: studentName,
        studentId: studentId,
        studentMajor: studentMajor,
        studentCourse: studentCourse,
        info: function () {
            return "Details: " + this.studentName + " | " + this.studentId + " | " 
+ this.studentMajor + " | " + this.studentCourse;
        }
    };
    studentList.push(student);
    document.getElementById("studentName").value = "";
    document.getElementById("studentId").value = "";
    document.getElementById("studentMajor").value = "";
    document.getElementById("studentCourse").value = "";
 }
 function displayStudentInfo() {
    let info = "";
    for (let student of studentList) {
        info += student.info() + "<br>";
    }
    document.getElementById("infoDiv").innerHTML = info;
 }