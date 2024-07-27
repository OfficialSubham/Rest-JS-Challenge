//Task 7
function add(num) {
    console.log(num + 10);
}

add(100)

function memorizedFun() {
    let cache = {};
    //gives us a function who save the data in the given value of n
    //then if it previously contain in the object then it give the 
    //data or else it gets calculated then the function give us the
    //data
    return (n) => {
        //Checking that is the cache contain n in it
        if (n in cache) {
            console.log("Fetching from Cache");
            console.log(cache[n]);
            //console.log(cache); added this just to know what is happening
        }
        else {
            console.log("Calculating result");
            let result = n + 10;
            cache[n] = result;
            console.log(result);
            //console.log(cache); added this just to know what is happening
        }
    }
}

const newAdd = memorizedFun();

newAdd(10)
newAdd(10)

newAdd(1)
newAdd(1)

//Task 8

function anotherMemoFun() {
    let cache = {};
    return (n) => {
        if(n in cache){
           console.log("Fetchin Data");
           console.log(cache[n]);
        }
        else {
            let num = 1;
            for(let i = 1; i<=n; i++){
                let result = num * i;
                num = result;
            }
            console.log("Calculating Data");
            console.log(num);
            cache[n] = num;
        }
    }
}

const factorial = anotherMemoFun()

factorial(5)
factorial(5)
factorial(12)
factorial(12)