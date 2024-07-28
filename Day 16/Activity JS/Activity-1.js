//Task 1

function factorialCalulator(number) {
    let factorial = 1;
    for(let i = 1; i <= number; i++) {
        let result = i * factorial;
        factorial = result
    }
    return factorial;
}

const testCase = [2, 3, 5, 6]

testCase.forEach((number) => {
    const factorial = factorialCalulator(number);
    console.log(`Factorial of ${number} is ${factorial}`); 
})

//Task 2

function calFibonacci(nthTerm) {
    const fibonacciArray = [0, 1];
    for (let i = 1; i <= nthTerm; i++) {
        mainfiboCal(fibonacciArray)
    }

    console.log(fibonacciArray[nthTerm + 1]);
}

function mainfiboCal(fibonacciArray) {
    let num = 0;
    let secondLastNum = fibonacciArray[fibonacciArray.length - 2];
    fibonacciArray.forEach((number) => {
        num = number;
    })
    const result = num + secondLastNum;
    fibonacciArray.push(result)
}

const secondTestCase = [5, 6, 7, 10];

secondTestCase.forEach((nthTerm) => {
    calFibonacci(nthTerm);
})