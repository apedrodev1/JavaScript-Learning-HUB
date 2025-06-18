/**
 * Collects and validates user information.
 *
 * @module collectUserInfo
 */

import User from '../../classes/user.js';
import {
    validateName,
    validateEmail,
    validateBirthDate
} from '../../utils/validations.js';

/**
 * Prompts user for name, email, and birthdate, validates them,
 * and returns a User object.
 *
 * @returns {User|null} Valid user object or null if underage.
 */
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

            const tempUser = new User(`${firstName} ${lastName}`, email, birthDate);
            const age = tempUser.getAge();

            if (age === null || age > 100) {
                alert(`🤔 Are you really ${age} years old? Please, enter your birthdate again.`);
                continue;
            }

            if (!tempUser.isAdult()) {
                alert("Only participants aged 18 or older can register.");
                return null;
            }

            break;
        }

        alert(validation.error);
    }

    const fullName = `${firstName} ${lastName}`;
    return new User(fullName, email, birthDate);
}

