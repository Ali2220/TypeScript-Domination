type GradeCalculator = (marks: number) => string

let calculateGrade: GradeCalculator = (marks) => {
    if (marks >= 90) return 'A'
    if (marks >= 75) return 'B'
    if (marks >= 60) return 'C'
    return 'F'
}


function averageMarks(...marks: number[]): number {
    if (marks.length === 0) return 0
    const sumofMarks = marks.reduce((prev, curr) => prev + curr)
    const average = sumofMarks / marks.length
    return average
}

// function overloading
function getGrade(marks: number): string
function getGrade(marksArray: number[]): string[]
function getGrade(...marks: number[]): string[]

function getGrade(arg1: any, ...rest: number[]): any {
    // Case 1: single number
    if (typeof arg1 === "number" && rest.length === 0) {
        return calculateGrade(arg1)
    }

    // Case 2: array of numbers
    if (Array.isArray(arg1)) {
        return arg1.map((m) => calculateGrade(m))
    }

    // Case 3: multiple arguments (rest)
    const allMarks = [arg1, ...rest];
    return allMarks.map(m => calculateGrade(m));
}

console.log(getGrade(90));
console.log(getGrade([90, 65, 45]));
console.log(getGrade(80, 90, 70));
