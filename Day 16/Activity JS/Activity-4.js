//Task 7

const sortedArray = ["subham", "rohan", "sandip", "slok", "kaustav", "dev", "souvik", "biltu"];

function binarySearch(array, findWhat) {
    
    array.forEach((searchItem, index) => {
        if(searchItem == findWhat) {
            console.log(`Index of ${findWhat} is ${index}`);    
        }
    })
}

binarySearch(sortedArray, "biltu");
binarySearch(sortedArray, "rohan");
binarySearch(sortedArray, "slok");

//Task 8

function countOccurence(array, target) {
    let occurence = 0;
    array.forEach((item) => {
        if(target == item){
            occurence++;
        }
    })
    console.log(`${target} occured in the array ${occurence} time`);
}

const array1 = [1, 1, 1, 3, 4, 5, 6, 7];
const array2 = [1, 3, 3, 3, 5, 6, 7, 7, 7, 7, 7, 9];

countOccurence(array1, 1);
countOccurence(array2, 7)