//Task 5
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static greeting (){
        console.log(`hello ${this.name} sir`);
    };
    updateAge(newAge) {
        this.age = newAge;
    }   
}

Person.greeting()

//Task 6

class Student extends Person {
    studentId;
    static studentCount = 0;
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        console.log(this.studentId);
        Student.studentCount++;

       
    };
    greeting() {
        console.log(this.studentId);
    }
    getStudentId() {
        console.log(this.studentId);
    }
    static getInstancesCount() {
        console.log(studentCount);
    }
}

const student1 = new Student("subham", 12, 12345);
const student0 = new Student("subham", 12, 1234);
const student3 = new Student("subham", 12, 1235);
const student4 = new Student("subham", 12, 1245);

console.log(Student.studentCount);
