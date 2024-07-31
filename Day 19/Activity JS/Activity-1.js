//Task 1

const regex = /JavaScript/g;
let string = "JavaScript is one of the most usefull CS Language. I love to use JavaScript";

const matches = string.match(regex);
console.log(matches);

//Task 2

const regex2 = /\d/g;
let testString = "123 is a number and 321 is also a number but they are different";
const matches2 = testString.match(regex2)
console.log(matches2);