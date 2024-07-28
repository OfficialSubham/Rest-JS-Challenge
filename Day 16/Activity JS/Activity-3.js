//Task 5

let string = "hello"

function reverseString(string) {
    let stringArray = [];
    let reverseString = '';
    for(let i = 0; i < string.length; i++) {
        stringArray.push(string[i]);
    }
    console.log(stringArray);
    for(let i = (stringArray.length - 1); i >= 0; i--){
        reverseString += stringArray[i];
    }
    console.log(reverseString);
};

reverseString("hello");
reverseString("subham");

//Task 6

function palindromeChecker(string) {
    let stringArray = [];
    let palindromeString = '';
    for(let i = 0; i < string.length; i++) {
        stringArray.push(string[i]);
    }

    for(let i = (stringArray.length - 1); i >= 0; i--){
        palindromeString += stringArray[i];
    }
    if(string == palindromeString) {
        console.log(`${string} is palindrome`);
    }
    else{
        console.log(`${string} is not palindrome`);
    }
};

palindromeChecker("madam");
palindromeChecker("subham");
palindromeChecker("redivider");