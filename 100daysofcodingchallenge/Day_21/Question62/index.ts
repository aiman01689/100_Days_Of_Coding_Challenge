//Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
interface Student {
    name: string,
    age: number,
    classes: string[]
};

let student: Student = {
    name: "Ahsan",
    age: 17,
    classes: ["English", "Science", "Maths"]
};

console.log(student);