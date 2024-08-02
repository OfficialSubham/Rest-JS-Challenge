//Activity 2

//Task 2

function reverseInteger(number) {
    let initailNumber = number;
    let reversedNumber;
    if(number < 0) {
        console.log("The Number is Negative");
        //Handels the edge case of negative number
    }
    else{
        //if the number is not negative
        let reverseNum = '';//create it as a string so that it doesnot added as a number
        while(initailNumber > 0){
            let newNum = initailNumber % 10;//gives the last digit
            reverseNum += newNum;
            initailNumber = (initailNumber / 10).toFixed(0);//eleminates the decimal digits
        }

        reversedNumber = Math.round(reverseNum); 
        //this clears the 0 from the front of the reversed number
    }
    console.log(reversedNumber);
} 

reverseInteger(1234000) //output : 4321