//Task 3
let call = 0;
function randomIdGenerator() {
    let id = Math.round(Math.random() * 100000).toFixed(5);
    console.log(id);
    if (id) {
        function idCaller() {
            call++;
        }

        return idCaller()
    }
}

randomIdGenerator();
randomIdGenerator();
randomIdGenerator();
randomIdGenerator();
randomIdGenerator();
randomIdGenerator();

console.log(call);

//Task 4

function userName(name) {
    function greet(name) {
        console.log(`Hello ${name} I hope You are fine`);
    }
    return greet(name);
}

userName("Subham");
userName("Souvik")