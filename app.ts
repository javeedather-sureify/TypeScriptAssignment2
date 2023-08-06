import MyRegistration from "./registrationModel.js";

namespace App {
  displayUserDetails();
    // Function to display user details on the UI
   export function displayUserDetails(): void {
    const newOj=new MyRegistration();
    const data = newOj.getRegistrationByEmail();

      const userDetailsDiv:HTMLElement | null = document.getElementById("user-details")!;
      userDetailsDiv.innerHTML = `
        <h2>User Details</h2>
        <p><strong>Name:</strong> ${data[0]}</p>
        <p><strong>Email:</strong> ${data[1]}</p>
      `;
    }
  }
  
export default App;
