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

//Using #MAP

function TwoSumHashMap(array, target) {
    let map = {}; // variable : indices

    let indicesArray = []; //this array gives us the indces
    //this loop is just going through the arry one time
    for(let i = 0; i < array.length; i++) {
        if((target - array[i]) in map) {
            //then it is checking that the 
            //value after substracting is in the array so that 
            //then it will push both of the indices to the array
            indicesArray.push(i);
            indicesArray.push(map[target - array[i]]);

        }
        else {
            //if the array does not contain the integer then it will add
            //to the object
            map[array[i]] = i;
        }
    }

    console.log(indicesArray);
}

TwoSumHashMap(array, 5)
