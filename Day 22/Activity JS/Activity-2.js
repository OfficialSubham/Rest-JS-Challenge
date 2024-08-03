//Activity 2

//Task 2

//Finding longest substring without repeating characters

//Definging the function

function stringCalculator(string) {
    let stringArray = []//defining this array for calculating the length
    for(let i = 0; i < string.length; i++) {
        let isStringThere;
        for(let index = 0; index < stringArray.length; index++) {
            if (stringArray[index] == string[i]) {
                isStringThere = true; //if the string is in the array it return true
            }
        }//this loop through the array to find that is the array contains the 
        //string previously

        if(!isStringThere) {
            stringArray.push(string[i]);
            //if the is string there is false then this statement will work
        }
    }

    console.log(stringArray.length);
}
//test case
stringCalculator("subham");//output : 6
stringCalculator("aaaaa");//output : 1
stringCalculator("hello");//output : 4