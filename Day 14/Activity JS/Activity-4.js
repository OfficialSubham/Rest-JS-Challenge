//Task 7

class Person {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting() {
        console.log(`Hello ${this.firstName} ${this.lastName}, GoodMorning`);
    }
    setter(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        console.log(`Hello ${this.firstName} ${this.lastName}, GoodMorning`);
    }
}

const person1 = new Person("Subham", "Mondal");

person1.greeting();

//Task 8

const person2 = new Person ();

person2.setter("Souvik", "Maity")

