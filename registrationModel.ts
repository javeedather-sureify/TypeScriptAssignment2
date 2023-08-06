type RegistrationData = [string, string, string]; // Tuple type to store registration data

class MyRegistration { 

  // Create operation
  addRegistration(name: string, email: string, password: string): void {
    const newRegistration: RegistrationData = [name, email, password];
    localStorage.setItem("registrations", JSON.stringify(newRegistration));
  }

  // Read operation
  getRegistrationByEmail(): RegistrationData {
    const usersData = localStorage.getItem("registrations")!;
    return JSON.parse(usersData);
  }
}

export default MyRegistration;
