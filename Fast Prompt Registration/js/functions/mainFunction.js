import User from './classes/User.js';
import {
    validateName,
    validateEmail,
    validateBirthDate
} from '../utils/validations.js';


export default function main_function() {
    const answer = prompt("Hello! Would you like to register for the prize draw? (1 - Yes, 0 - No)");
    if (answer !== '1') {
        alert("No problem. Come back whenever you want!");
        return;
    }

    // First Name
    const firstName = prompt("Please enter your first name:");
    const firstNameValidation = validateName(firstName);
    if (!firstNameValidation.isValid) {
        alert(firstNameValidation.error);
        return;
    }

    // Last Name
    const lastName = prompt("Now enter your last name:");
    const lastNameValidation = validateName(lastName);
    if (!lastNameValidation.isValid) {
        alert(lastNameValidation.error);
        return;
    }

    // Birthdate
    const birthDate = prompt("Enter your birthdate (YYYY-MM-DD):");
    const birthValidation = validateBirthDate(birthDate);
    if (!birthValidation.isValid) {
        alert(birthValidation.error);
        return;
    }

    // Email
    const email = prompt("Please enter your email:");
    const emailValidation = validateEmail(email);
    if (!emailValidation.isValid) {
        alert(emailValidation.error);
        return;
    }

    const fullName = `${firstNameValidation.value} ${lastNameValidation.value}`;
    const user = new User(fullName, emailValidation.value, birthValidation.value);

    if (!user.isAdult()) {
        alert("Only participants aged 18 or older can register.");
        return;
    }

    alert(
        `Thank you for registering!\n` +
        `Name: ${user.fullName}\n` +
        `Email: ${user.email}\n` +
        `Age: ${user.getAge()}`
    );

    const accept = confirm("Do you agree with the terms and conditions?\n(Lorem ipsum dolor sit amet...)");
    if (!accept) {
        alert("You must accept the terms to participate.");
        return;
    }

    alert("You're in! Good luck!");
}