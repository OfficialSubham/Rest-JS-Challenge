 //Activity 3

//Task 3

let array = [-3, 3, 4, -3, 1, 2] //defining the array

function threeSum(array) {
    //according to bubble sort algorithm
    let tempArray = [];
    let sortedArray = array;

    for(let i = 0; i < sortedArray.length; i++) {
        for(let index = 0; index < sortedArray.length; index++) {
            if(sortedArray[index] > sortedArray[index + 1]) {
                tempArray.push(sortedArray[index])
                sortedArray[index] = sortedArray[index + 1];
                sortedArray[index + 1] = tempArray[0];
                tempArray = [];
            }
        }
    }
    
    let tripletArray = [];//here we get the threesum

    for(let i = 0; i < sortedArray.length; i++) {
        let firstNumber = sortedArray[i];
        let secondNumber;
        let thirdNumber;
        for(let index = 0; index < sortedArray.length; index++) {
        }
    }

}

threeSum(array)
