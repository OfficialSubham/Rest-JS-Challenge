//Task 7

let form = {

}

document.querySelector("button")
    .addEventListener('click', () => {
        form.name = document.querySelector(".name-input").value
        form.email = document.querySelector(".email-input").value
        sessionStorage.setItem("form", JSON.stringify(form));

        let data = JSON.parse(sessionStorage.getItem("form"));
        console.log(data);
    })
 
let data = JSON.parse(sessionStorage.getItem("form"));
console.log(data);

//Task 8

let newData = sessionStorage.removeItem("form");
console.log(newData);