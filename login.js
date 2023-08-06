/// <reference path="app.ts" />
import MyRegistration from "./registrationModel.js";
// UserStatus enum
var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "ACTIVE";
    UserStatus["BLOCKED"] = "BLOCKED";
})(UserStatus || (UserStatus = {}));
// Login class implementing UserAccess
class Login {
    constructor(userStatus) {
        this.userStatus = userStatus;
    }
    grantAccess() {
        if (this.userStatus === UserStatus.BLOCKED) {
            console.log("Access denied. User is blocked.");
            alert("Wrong Details");
        }
        else {
            window.location.href = `./details.html`;
            console.log("Access granted. Welcome!");
        }
    }
}
// Main method for testing
function main() {
    const loginButton = document.getElementById("login-btn");
    const registerButton = document.getElementById("register-btn");
    const submitLoginButton = document.getElementById("submit-login-btn");
    const submitRegisterButton = document.getElementById("submit-register-btn");
    const nameField = document.getElementById("name-field");
    const nameInput = document.getElementById("name");
    loginButton.addEventListener("click", () => {
        if (nameField.style.display === "block") {
            // Hide the name field when clicking "Login" again
            nameField.style.display = "none";
            submitRegisterButton.style.display = "none";
            submitLoginButton.style.display = "block";
            // Clear the name input field when hiding it
            nameInput.value = "";
            submitRegisterButton.value = "";
        }
    });
    registerButton.addEventListener("click", () => {
        nameField.style.display = "block";
        submitRegisterButton.style.display = "block";
        submitLoginButton.style.display = "none";
    });
    submitRegisterButton.addEventListener("click", () => {
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const nameInput = document.getElementById("name");
        const email = emailInput.value;
        const password = passwordInput.value;
        const name = nameInput.value;
        const newOj = new MyRegistration();
        newOj.addRegistration(name, email, password);
        emailInput.value = "";
        passwordInput.value = "";
        nameInput.value = "";
    });
    submitLoginButton.addEventListener("click", () => {
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const email = emailInput.value;
        const password = passwordInput.value;
        const newOj = new MyRegistration();
        const data = newOj.getRegistrationByEmail();
        if (email == data[1] && password == data[2]) {
            console.log("success");
            const activeUser = new Login(UserStatus.ACTIVE);
            activeUser.grantAccess(); // Access granted. Welcome!
        }
        else {
            const blockedUser = new Login(UserStatus.BLOCKED);
            blockedUser.grantAccess(); // Access denied. User is blocked.
        }
        emailInput.value = "";
        passwordInput.value = "";
    });
}
main();
