import MyRegistration from "./registrationModel.js";
var App;
(function (App) {
    displayUserDetails();
    // Function to display user details on the UI
    function displayUserDetails() {
        const newOj = new MyRegistration();
        const data = newOj.getRegistrationByEmail();
        const userDetailsDiv = document.getElementById("user-details");
        userDetailsDiv.innerHTML = `
        <h2>User Details</h2>
        <p><strong>Name:</strong> ${data[0]}</p>
        <p><strong>Email:</strong> ${data[1]}</p>
      `;
    }
    App.displayUserDetails = displayUserDetails;
})(App || (App = {}));
export default App;
