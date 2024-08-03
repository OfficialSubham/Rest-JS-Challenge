 //Activity 3

//Task 3

let array = [-3, 3, 4, -3, 1, 2] //defining the array

function threeSum(array) {
   
    let HashMap = {};
    let tripletsArray = [];
    for (let i = 0; i < array.length; i++) {
        let target = array[i];
        for (let index = (i + 1); index < array.length; index++) {
            if ((target + array[index]) in HashMap) {
                tripletsArray.push(target);
                tripletsArray.push(HashMap[target + array[index]])
                tripletsArray.push(array[index]);
                HashMap[array[index]] = index;
            }
            else {
                HashMap[array[index]] = index;
            }
        }
    }
    console.log(HashMap);
    console.log(tripletsArray);

}

threeSum(array)
