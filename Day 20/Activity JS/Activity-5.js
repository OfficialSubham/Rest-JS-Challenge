//Task 9

function useOfBothStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    sessionStorage.setItem(key, JSON.stringify(value));
}

useOfBothStorage("KEY", "This is the value");

console.log(JSON.parse(localStorage.getItem("KEY")));
console.log(JSON.parse(sessionStorage.getItem("KEY")));

//Task 10

function clearBothData(key) {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
}

clearBothData("KEY")

console.log(JSON.parse(localStorage.getItem("KEY")));
console.log(JSON.parse(sessionStorage.getItem("KEY")));