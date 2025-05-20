import User from '../../classes/user.js';
import {
    validateName,
    validateEmail,
    validateBirthDate
} from '../../utils/validations.js';

import { promptAndValidate } from '../../utils/promptsAndValidations.js';

export function collectUserInfo() {
    const firstName = promptAndValidate("Enter your first name:", validateName);
    if (!firstName) return null;

    const lastName = promptAndValidate("Enter your last name:", validateName);
    if (!lastName) return null;

    const email = promptAndValidate("Enter your email:", validateEmail);
    if (!email) return null;

    const birthDate = promptAndValidate("Enter your birthdate (YYYY-MM-DD):", validateBirthDate);
    if (!birthDate) return null;

    const fullName = `${firstName} ${lastName}`;
    const user = new User(fullName, email, birthDate);

    if (!user.isAdult()) {
        alert("Only participants aged 18 or older can register.");
        return null;
    }

    return user;
}
