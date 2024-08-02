// Activity 5

//Task 5


let brackets = {
    "(" : ")",
    "{" : "}",
    "[" : "]"
}

//defining Function

function validParentheses(character) {
    //defininig an empty array to get the opening brackets
    let bracketArray = []; 

    for(let char of character) {
        if(char in brackets) {
            bracketArray.push(char);//it add the opening brackets in the array
        }
        else{
            let lastBracket = bracketArray.pop();//it returns the last elemnent from that array
            if(char !== brackets[lastBracket]) {
                return false;
            }
        }
    }

    return bracketArray.length === 0; //it will return true or false if the statement is correct
    //if the array became empty it will return true

}

console.log(validParentheses("[()]")) //output : true

console.log(validParentheses("[)]")) //output : false