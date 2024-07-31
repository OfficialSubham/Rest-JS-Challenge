//Task 7

let regex = new RegExp(`^hello\\b`);
let string1 = "hello world";
let string2 = "world hello";
let match = string2.match(regex)
let matches = string1.match(regex)
console.log(matches);
console.log(match);

//Task 8

let regex2 = new RegExp(`\\b(hello)$`);

let string3 = "hello world";
let string4 = "world hello";
let match1 = string2.match(regex2)
let matches1 = string1.match(regex2)
console.log(matches1);
console.log(match1);