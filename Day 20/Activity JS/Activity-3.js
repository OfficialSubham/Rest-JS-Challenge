//Task 5

sessionStorage.setItem("hello", "This is Session Storage")

let Value = sessionStorage.getItem("hello");

console.log(Value);

//Task 6

const object = {
    name: "Subham"
}

sessionStorage.setItem("obj", JSON.stringify(object))

let value = JSON.parse(sessionStorage.getItem("obj"));
console.log(value);