//Task 3

let form = {

}

document.querySelector("button")
    .addEventListener('click', () => {
        form.name = document.querySelector(".name-input").value
        form.email = document.querySelector(".email-input").value
        localStorage.setItem("form", JSON.stringify(form));

        let data = JSON.parse(localStorage.getItem("form"));
        console.log(data);
    })
 
let data = JSON.parse(localStorage.getItem("form"));
console.log(data);

//Task 4

let newData = localStorage.removeItem("form");
console.log(newData);