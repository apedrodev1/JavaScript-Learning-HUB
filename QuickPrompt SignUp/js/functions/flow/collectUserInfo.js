import User from '../../classes/user.js';
import {
    validateName,
    validateEmail,
    validateBirthDate
} from '../../utils/validations.js';

export function collectUserInfo() {
    let firstName;
    while (true) {
        const input = prompt("Enter your first name:");
        const validation = validateName(input);
        if (validation.isValid) {
            firstName = validation.value;
            break;
        }
        alert(validation.error);
    }

    let lastName;
    while (true) {
        const input = prompt("Enter your last name:");
        const validation = validateName(input);
        if (validation.isValid) {
            lastName = validation.value;
            break;
        }
        alert(validation.error);
    }

    let email;
    while (true) {
        const input = prompt("Enter your email:");
        const validation = validateEmail(input);
        if (validation.isValid) {
            email = validation.value;
            break;
        }
        alert(validation.error);
    }

    let birthDate;
    while (true) {
        const input = prompt("Enter your birthdate (DD/MM/YYYY):");
        const validation = validateBirthDate(input);
        if (validation.isValid) {
            birthDate = validation.value;
            break;
        }
        alert(validation.error);
    }

    const fullName = `${firstName} ${lastName}`;
    const user = new User(fullName, email, birthDate);

    if (!user.isAdult()) {
        alert("Only participants aged 18 or older can register.");
        return null;
    }

    return user;
}
