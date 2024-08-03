//Activity 1

//Task 1

//TwoSum Problem

function twoSum(array, target) {
    let indicesArray = [];
    for(let i = 0; i < array.length; i++) {
        let firstNumber = array[i]; //defining the firstnumber
        for(let index = (i + 1); index < array.length; index++) {
            if(i !== index) {
                //checking that if I and Index should be different
                //so that the loop doesnot add a number twide

                if((firstNumber + array[index]) == target) {
                    indicesArray.push(i);
                    indicesArray.push(index);
                    //if it satisfies the target then the number
                    //is added to the array
                }
            }
        }
    }

    console.log(indicesArray);
}
//defining array
let array = [1, 2, 3, 4, 5]

twoSum(array, 5);