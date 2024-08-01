//Task 1
localStorage.setItem("saver1", "hi i am here");
console.log(localStorage.getItem("saver1"));

//Task 2

let value = "HI I AM THE VALUE"
localStorage.setItem("saver2", JSON.stringify(value));
let data2 = JSON.parse(localStorage.getItem("saver2"))
console.log(data2);
