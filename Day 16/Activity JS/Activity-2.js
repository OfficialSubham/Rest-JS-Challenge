//Task 3

function arraySum(array) {
    let total = 0;
    array.forEach((num) => {
        total += num
    });
    console.log(total);
}

const array1 = [1, 2, 3, 4, 5, 5, 6];
const array2 = [9, 6, 4, 32, 14];
arraySum(array1);
arraySum(array2);

//Task 4

function findMax(array) {
    let max = 0;
    array.forEach((number) => {
        if(number > max) {
            max = number;
        }
    })

    console.log(max);
}

const array3 = [12, 34, 67, 98, 34, 55];
const array4 = [34, 56, 87, 90, 23, 22];

findMax(array3);
findMax(array4)