//Task 1 Bubble Sort

let unorderArray = [4, 6, 1, 7, 9, 3, 2, 8, 5];

let tempArray = [];

for(let i = 0; i < unorderArray.length - 1; i++) {
    for(let index = 0; index < unorderArray.length - i; index++) {
        if(unorderArray[index] > unorderArray[index + 1]) {
            tempArray.push(unorderArray[index])
            unorderArray[index] = unorderArray[index + 1];
            unorderArray[index + 1] = tempArray[0];
            tempArray = [];
        }
    }

}

console.log(unorderArray);

//Task 2 Selection Sort

let anotherArray = [4, 6, 1, 7, 9, 3, 2, 8, 5];

for (let i = 0; i < anotherArray.length; i++) {
    let lowestValue = 72318293;
    let indexSwap;
    for(let index = i; index < anotherArray.length; index++){
        if(anotherArray[index] < lowestValue){
            lowestValue = anotherArray[index]
            indexSwap = index;
        }
    }

    anotherArray[indexSwap] = anotherArray[i]
    anotherArray[i] = lowestValue;

}

console.log(anotherArray);

//Task 3 QuickSort

let quickArray = [2, 8, 6, 7, 3, 5, 9, 1, 4]

function partition(array, start, end) {
    let pivot = array[end];
    let pivotIndex = start;

    for(let i = 0; i < end; i++) {
        if(array[i] < pivot) {

        }
    }
}