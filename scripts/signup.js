document.querySelector("form").addEventListener("submit", userDetails);
let userData = JSON.parse(localStorage.getItem("credentials")) || [];
function userDetails() {
    event.preventDefault();
    let userCreds = {
        name: document.querySelector("#name").value,
        contact: document.querySelector("#contact").value,
        email: document.querySelector("#mail").value,
        password: document.querySelector("#pass").value
    }
    let username = userCreds.name;
    userData.push(userCreds);
    localStorage.setItem("credentials", JSON.stringify(userData));

    alert(`Congrats ${username}. Your Signup is Successfull`);
    window.location = "login.html";
}