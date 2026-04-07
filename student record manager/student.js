"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
function addStudent(rollNo, name, grade) {
    if (grade < 0 || grade > 100) {
        throwInvalidGrade(grade);
    }
    students.push([rollNo, name, grade]);
    console.log(`Added: ${name}`);
}
function throwInvalidGrade(grade) {
    throw new Error(`Invalid Grade: ${grade}. Grade must be between 0 and 100.`);
}
function studentList() {
    console.log("---Students List---");
    students.forEach(function (stu) {
        console.log(`Roll: ${stu[0]}, Name: ${stu[1]}, Grade: ${stu[2]}%`);
    });
}
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status["Unactive"] = "UNACTIVE";
})(Status || (Status = {}));
function updateStatus(rollNo, newStatus) {
    console.log(`Student roll ${rollNo} status updated to ${newStatus}`);
}
function processUserInput(input) {
    if (typeof input === "string" && input.startsWith("add:")) {
        let parts = input.split(",");
        let roll = parseInt(parts[0]?.replace("add:", "") ?? "");
        let name = parts[1];
        let grade = parseInt(parts[2] ?? "0");
        if (!isNaN(roll) && name && !isNaN(grade)) {
            addStudent(roll, name, grade);
        }
    }
    else {
        console.log("Invalid input format");
    }
}
addStudent(1, "Ali", 85);
addStudent(2, "Sara", 92);
studentList();
updateStatus(1, Status.Active);
processUserInput("add:3,Fatima,78");
studentList();
//# sourceMappingURL=student.js.map