//Task 5

const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
let usNumber = "(123) 456-7890";
let matches1 = usNumber.match(regex)
console.log(matches1);

//Task 6

const regex2 = /(\w+)@(\w+)/;
let tempName = "RyanRenolds@gmail.com";
let matches2 = tempName.match(regex2)
console.log(matches2);