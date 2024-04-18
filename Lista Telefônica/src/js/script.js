const contacts = {};

function calculateAge(birthDate) { //nao funciona verificar depois
    const currentDate = new Date();
    const dob = new Date(birthDate);
    let age = currentDate.getFullYear() - dob.getFullYear();
    const monthDiff = currentDate.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < dob.getDate())) {
        age--;
    }
    return age;
}

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

        let birthDate;
        while (true) {
            birthDate = prompt("Now we need to know your birthdate, please (YYYY-MM-DD).");
            if (!birthDate) {
                alert("Your birthdate is required.");
            } else {
                const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
                if (!dateRegex.test(birthDate)) {
                    alert("Please enter a valid date in the format YYYY-MM-DD.");
                    continue;
                }

                const parsedDate = new Date(birthDate);
                if (isNaN(parsedDate.getTime())) {
                    alert("Please enter a valid date.");
                    continue;
                }

                const currentDate = new Date();
                if (parsedDate.getTime() > currentDate.getTime()) {
                    alert("Please enter a date that is not in the future.");
                    continue;
                }

                // fazer mais uma verificacao 18+

                break;
            }
        }


        let phoneNumber;
        while (true) {
            phoneNumber = prompt("Now, please enter your phone number:");
            if (!phoneNumber) {
                alert("Phone number is required!");
            } else if (!phoneNumber.replace(/\s/g, '').match(/^\d{11}$/)) {
                alert("Please enter a valid phone number (11 digits).");
            } else {

                //solicitar ao usuario se o mesmo nao tem mais um telefone

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

        //perguntar endereco

        let contato = {
            ID: contactID,
            fullName: firstName + " " + surName,
            age: age,
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
