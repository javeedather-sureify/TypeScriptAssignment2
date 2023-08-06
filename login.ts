
/// <reference path="app.ts" />

import MyRegistration from "./registrationModel.js";

// UserStatus enum
enum UserStatus {
    ACTIVE = "ACTIVE",
    BLOCKED = "BLOCKED",
  }
  
  // UserAccess interface
  interface UserAccess {
    grantAccess(): void;
  }
  
  // Login class implementing UserAccess
  class Login implements UserAccess {
    private userStatus: UserStatus;
  
    constructor(userStatus: UserStatus) {
      this.userStatus = userStatus;
    }
  
    grantAccess(): void {
      if (this.userStatus === UserStatus.BLOCKED) {
        console.log("Access denied. User is blocked.");
        alert("Wrong Details")
      } else {
        window.location.href = `./details.html`;
        console.log("Access granted. Welcome!");
      }
    }
  }
  
  // Main method for testing
  function main() {
    const loginButton: HTMLButtonElement = document.getElementById("login-btn") as HTMLButtonElement;
    const registerButton: HTMLButtonElement = document.getElementById("register-btn") as HTMLButtonElement;

    const submitLoginButton: HTMLButtonElement = document.getElementById("submit-login-btn") as HTMLButtonElement;    
    const submitRegisterButton: HTMLButtonElement = document.getElementById("submit-register-btn") as HTMLButtonElement;   


    const nameField: HTMLElement = document.getElementById("name-field") as HTMLElement;
    const nameInput: HTMLInputElement = document.getElementById("name") as HTMLInputElement;

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
      const emailInput: HTMLInputElement = document.getElementById("email") as HTMLInputElement;
      const passwordInput: HTMLInputElement = document.getElementById("password") as HTMLInputElement;
      const nameInput: HTMLInputElement = document.getElementById("name") as HTMLInputElement;

      const email: string = emailInput.value;
      const password: string = passwordInput.value;
      const name: string = nameInput.value;

      const newOj=new MyRegistration();
      newOj.addRegistration(name,email,password);

      emailInput.value = "";
      passwordInput.value = "";
      nameInput.value = "";

    });




    submitLoginButton.addEventListener("click", () => {
      const emailInput: HTMLInputElement = document.getElementById("email") as HTMLInputElement;
      const passwordInput: HTMLInputElement = document.getElementById("password") as HTMLInputElement;

      const email: string = emailInput.value;
      const password: string = passwordInput.value;

      const newOj=new MyRegistration();
      const data = newOj.getRegistrationByEmail();
  
      if(email == data[1] && password == data[2]){
        console.log("success");
        const activeUser = new Login(UserStatus.ACTIVE);
        activeUser.grantAccess(); // Access granted. Welcome!
      }else {
        const blockedUser = new Login(UserStatus.BLOCKED);
        blockedUser.grantAccess(); // Access denied. User is blocked.
      }

      emailInput.value = "";
      passwordInput.value = "";

    });
  }
  
  main();
  