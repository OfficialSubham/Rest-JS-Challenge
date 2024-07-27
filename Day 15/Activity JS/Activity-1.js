//Task 1

function returnInnerFun() {
    let num = Math.round(Math.random() * 100);

    function usingScope(num) {
        console.log(num);
    }
    return usingScope(num)
}

returnInnerFun();

//Task 2

let counter = 0;

function closure(whatToDo, value){
    if(whatToDo == "increament") {
        function currentValue(value) {
            counter += value;
            console.log(counter);
        }
        return currentValue(value)
    }
    else if (whatToDo == "decreament") {
        function currentValue(value) {
            counter -= value;
            console.log(counter);
        }
        return currentValue(value);
    }
}

closure("increament", 810);
closure("decreament", 345);

