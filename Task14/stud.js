const student = [];
 function Student(studentName, studentId, studentMajor, studentCourse) {
    this.studentName = studentName;
    this.studentId = studentId;
    this.studentMajor = studentMajor;
    this.studentCourse = studentCourse;
    this.describe = function () {
        return "Details: " + this.studentName + " | " + this.studentId + " | "
            + this.studentMajor + " | " + this.studentCourse;
    };
 }
 function insert() {
    let studentName = document.getElementById("studentName").value;
    let studentId = document.getElementById("studentId").value;
    let studentMajor = document.getElementById("studentMajor").value;
    let studentCourse = document.getElementById("studentCourse").value;
        let new_student = new Student(studentName, studentId, studentMajor, 
studentCourse);
        student.push(new_student);
 }
 function displayStudentInfo() {
    let info = "";
    for (let s of student) {
        info += s.describe() + "<br>";
    }
    document.getElementById("demo_div").innerHTML = info; 
}
 function clear_input() {
    document.getElementById("studentName").value = "";
    document.getElementById("studentId").value = "";
    document.getElementById("studentMajor").value = "";
    document.getElementById("studentCourse").value = "";
 }
 function clear_display() {
    document.getElementById("demo_div").innerHTML = "";
 }
 function search_student() {
    let search_name = document.getElementById("search_name").value.toLowerCase();
    let resultText = "";
    let found = false;
    student.forEach(s => {
        if (s.studentName.toLowerCase().includes(search_name)) {
            found = true;
            resultText += "<p>" + s.describe() + "</p>";
        }
    });
    if (found) {
        document.getElementById("demo_div").innerHTML = resultText;
    } else {
        document.getElementById("demo_div").innerHTML = "<p>No student found with that name.</p>";
    }
 }