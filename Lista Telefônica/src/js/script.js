const contacts = {};

while (true) {
    let response = prompt("Hey Stranger! Would You like to register with us? (0 - No, 1 - Yes)");

    if (response === '1') {
        const contactID = Math.random().toString(36).substring(2, 11);

        let firstName = prompt("Please enter your first name: ");
        if (!firstName) {
            alert("First name is required!");
            continue;
        }

        let surName = prompt("And what is your last name, " + firstName + "?");

        let phoneNumber;
        while (true) {
            phoneNumber = prompt("Now, please enter your phone number:");
            if (!phoneNumber) {
                alert("Phone number is required!");
            } else if (!phoneNumber.replace(/\s/g, '').match(/^\d{11}$/)) {
                alert("Please enter a valid phone number (11 digits).");
            } else {
                break;
            }
        }

        let emailAdress;
        while (true) {
            emailAdress = prompt("And your e-mail:");
            if (emailAdress && !emailAdress.includes('@')) {
                alert("Please enter a valid email address.");
            } else {
                break;
            }
        }

        let contato = {
            ID: contactID,
            fullName: firstName + " " + surName,
            phoneNumber: phoneNumber,
            emailAdress: emailAdress
        };

        contacts[contactID] = contato;

        alert("Thank you very much, " + firstName + "! Your contact has been registered in our database! Your identification number is: " + contactID);
    } else if (response === '0') {
        alert("Registration canceled.");
        break;
    } else {
        alert("Invalid option. Please enter 0 for No or 1 for Yes.");
    }
}

console.log("Registered contacts:", contacts);
