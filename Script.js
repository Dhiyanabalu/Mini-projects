// SIGNUP

function signup() {

    let username = document.getElementById("signupUsername").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    // Store data in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Signup Successful!");

    // Go to signin page
    window.location.href = "signin.html";
}



// SIGNIN

function signin() {

    let username = document.getElementById("signinUsername").value;
    let password = document.getElementById("signinPassword").value;

    // Get stored data
    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    // Check login
    if (username === storedUsername && password === storedPassword) {

        alert("Login Successful!");

        window.location.href = "home.html";

    } else {

        alert("Invalid Username or Password");

    }
}