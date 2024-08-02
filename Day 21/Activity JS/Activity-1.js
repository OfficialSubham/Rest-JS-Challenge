//Activity 1

//Task 1

function twoSum (array, target) {
    //edge case if the target number is not in the array
    let match;
    let index;
    let sum = 0;
    //checking that the target number is in the array or not 
    array.forEach((number, i) => {
        if(number == target) {
            match = 1;
            index = i; //taking the index so that I can add the number upto that index
        }
    })

    if(match) {
        array.forEach((number, i) => {
            if(i <= index) {
                sum += number;//until the index matches it will add the numbers
            }
        })
        console.log(sum);
    }
    else {
        console.log("The target number is not in the array");
         //if the target number is not in the index
    }

   
}

const array1 = [1, 2, 3, 4, 5, 6, 7];

twoSum(array1, 4)//OutPut Expected 10;

