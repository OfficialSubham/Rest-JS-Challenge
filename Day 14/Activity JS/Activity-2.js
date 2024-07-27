//Task 3

class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting (){
        console.log(`hello ${this.name} sir`);
    };
    updateAge(newAge) {
        this.age = newAge;
    }   
}

class Student extends Person {
    studentId;
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    };
    greeting() {
        console.log(this.studentId);
    }
    getStudentId() {
        console.log(this.studentId);
    }
}

const newStudent = new Student("Subham", 18, 12345);


console.log(newStudent.age);
newStudent.getStudentId();

//Task 4

newStudent.greeting();

