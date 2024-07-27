//Task 5

function mainFun () {
    const funArray = []
    for (let i = 0; i < 10; i++) {
        funArray.push(
            function returnValue(i) {
                console.log(i);
            }
        )
        console.log(i);
    }
}

mainFun();