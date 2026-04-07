type studentRecord = [number, string, number]  // tuple

let students: studentRecord[] = []

function addStudent(rollNo: number, name: string, grade: number) {
    if (grade < 0 || grade > 100) {
        throwInvalidGrade(grade)
    }
    students.push([rollNo, name, grade])
    console.log(`Added: ${name}`);
}

function throwInvalidGrade(grade: number): never {
    throw new Error(`Invalid Grade: ${grade}. Grade must be between 0 and 100.`)
}

function studentList(): void {
    console.log("---Students List---");

    students.forEach(function (stu) {
        console.log(`Roll: ${stu[0]}, Name: ${stu[1]}, Grade: ${stu[2]}%`);
    })
}

enum Status {
    Active = "ACTIVE",
    Unactive = "UNACTIVE"
}

function updateStatus(rollNo: number, newStatus: Status): void {
    console.log(`Student roll ${rollNo} status updated to ${newStatus}`);
}

function processUserInput(input: unknown): void {
    if (typeof input === "string" && input.startsWith("add:")) {
        let parts = input.split(",");
        let roll = parseInt(parts[0]?.replace("add:", "") ?? "");
        let name = parts[1];
        let grade = parseInt(parts[2] ?? "0");
        if (!isNaN(roll) && name && !isNaN(grade)) {
            addStudent(roll, name, grade);
        }
    } else {
        console.log("Invalid input format");
    }
}

addStudent(1, "Ali", 85);
addStudent(2, "Sara", 92)
studentList();
updateStatus(1, Status.Active)
processUserInput("add:3,Fatima,78")
studentList();