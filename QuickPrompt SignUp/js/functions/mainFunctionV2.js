// File: js/functions/main_functionV2.js

import { promptAndValidate } from '../utils/promptsAndValidations.js';
import {
    validateName,
    validateEmail,
    validateBirthDate

} from '../utils/validations.js';
import { handleTermsAcceptance } from './terms/handleTerms.js';
import { User } from '../classes/user.js';
import { showConfirmation } from './confirmation.js';


export default function main_functionV2() {
    const start = prompt("Register for the draw? (1-Yes, 0-No)");
    if (start !== '1') {
        alert("Okay! See you next time.");
        return;
    }

    const firstName = promptAndValidate("Enter your first name:", validateName);
    if (!firstName) return;

    const lastName = promptAndValidate("Enter your last name:", validateName);
    if (!lastName) return;

    const birthDate = promptAndValidate("Enter your birthdate (YYYY-MM-DD):", validateBirthDate);
    if (!birthDate) return;

    const email = promptAndValidate("Enter your email:", validateEmail);
    if (!email) return;

    const user = new User(firstName, lastName, email, birthDate);
    if (!user.isAdult()) {
        alert("You must be 18+ to participate.");
        return;
    }

    const accepted = handleTermsAcceptance();
    if (!accepted) {
        alert("Terms must be accepted to participate.");
        return;
    }

    showConfirmation(user);
}