//Task 1

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting = ()=>{
        console.log(`hello ${this.name} sir`);
    };
    updateAge(newAge) {
        this.age = newAge;
    }   
}

const person = new Person("subham", 18);
person.greeting();

//Task 2

const newPerson = new Person("Rohan", 18);
newPerson.greeting();
console.log(newPerson.age);
newPerson.updateAge(19)
console.log(newPerson.age);