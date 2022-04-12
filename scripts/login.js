document.querySelector("form").addEventListener("submit", login);

let loginData = JSON.parse(localStorage.getItem("credentials")) || [];

console.log(loginData);

function login() {
    event.preventDefault();

    let email = document.querySelector("#mail").value;
    let password = document.querySelector("#pass").value;
    let name;
    let valid = false;
    loginData.map(function (elem) {
        if (elem.email === email && elem.password === password) {
            name = elem.name;
            valid = true;
        }
    });
    
    if (valid) {
        alert(`Welcome ${name}`);
        window.location = "index.html";
    } else {
        alert("Invalid Credentials");
    }
}