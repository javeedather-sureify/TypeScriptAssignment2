class MyRegistration {
    // Create operation
    addRegistration(name, email, password) {
        const newRegistration = [name, email, password];
        localStorage.setItem("registrations", JSON.stringify(newRegistration));
    }
    // Read operation
    getRegistrationByEmail() {
        const usersData = localStorage.getItem("registrations");
        return JSON.parse(usersData);
    }
}
export default MyRegistration;
