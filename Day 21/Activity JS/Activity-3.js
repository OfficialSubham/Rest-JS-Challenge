//Activity 3

//Task 3

function isPalindrome(number) {
    if(number < 0) {
        console.log("Negative Number are not Consider as Palindrome");
    }
    else {
        let initailNumber = number;
        let palindromeNum = ''//defined as empty string so that the numbers add as string
        while (initailNumber > 0) {
            //until the number became 0 this loops continue
            palindromeNum += (initailNumber % 10);
            initailNumber = (initailNumber / 10).toFixed(0); //eliminates the decimal digits
        }

        if(palindromeNum == number) {
            console.log(`The Number ${palindromeNum} is Palindrome`);
        }
        else {
            console.log(`The Number ${number} is not Palindrome`);
        }
    }
}

isPalindrome(12321) //output : The Number 12321 is Palindrome