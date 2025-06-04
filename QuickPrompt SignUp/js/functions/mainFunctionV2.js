/**
 * User class to represent a participant in the prize draw.
 */
class User {
    /**
     * @param {string} fullName - Full name of the user.
     * @param {string} email - User email.
     * @param {string} birthDateISO - Birthdate in ISO format (YYYY-MM-DD).
     */
    constructor(fullName, email, birthDateISO) {
        this.id = this.generateID();
        this.fullName = fullName;
        this.email = email;
        this.birthDate = birthDateISO;
    }

    /**
     * Generates a unique ID for the user.
     * @returns {string} Random alphanumeric ID.
     */
    generateID() {
        return Math.random().toString(36).substring(2, 11);
    }

    /**
     * Calculates the user's age.
     * @returns {number} Age in years.
     */
    getAge() {
        const today = new Date();
        const birth = new Date(this.birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const m = today.getMonth() - birth.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    }

    /**
     * Checks if the user is 18 or older.
     * @returns {boolean} True if adult, false otherwise.
     */
    isAdult() {
        return this.getAge() >= 18;
    }
}

/**
 * Capitalizes the first letter of each word in a name.
 * @param {string} name - The name to be capitalized.
 * @returns {string} Capitalized name.
 */
function capitalize(name) {
    return name
        .toLowerCase()
        .split(' ')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');
}

/**
 * Validates user input for starting the process.
 * @param {string} input - User input ('1' or '0').
 * @returns {Object} Validation result.
 */
function validateStartInput(input) {
    if (input !== '1' && input !== '0') {
        return { isValid: false, error: "Invalid input. Please enter 1 (Yes) or 0 (No)." };
    }
    return { isValid: true };
}

/**
 * Validates name input.
 * @param {string} name - Name input.
 * @returns {Object} Validation result with capitalized name if valid.
 */
function validateName(name) {
    if (!name || typeof name !== 'string') {
        return { isValid: false, error: "Name is required." };
    }
    const trimmed = name.trim();
    if (trimmed.length < 3) {
        return { isValid: false, error: "Name must have at least 3 characters." };
    }
    const nameRegex = /^[A-Za-zÀ-ÿ\s'-]+$/;
    if (!nameRegex.test(trimmed)) {
        return { isValid: false, error: "Name must contain only letters, spaces, apostrophes, or hyphens." };
    }
    return { isValid: true, value: capitalize(trimmed) };
}

/**
 * Validates birthdate input.
 * @param {string} birthDate - Input date in DD/MM/YYYY format.
 * @returns {Object} Validation result with ISO string if valid.
 */
function validateBirthDate(birthDate) {
    if (!birthDate || typeof birthDate !== 'string') {
        return { isValid: false, error: "Birthdate is required." };
    }
    const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = birthDate.match(dateRegex);
    if (!match) {
        return { isValid: false, error: "Format must be DD/MM/YYYY." };
    }
    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10) - 1;
    const year = parseInt(match[3], 10);
    const dateObj = new Date(year, month, day);
    if (
        dateObj.getFullYear() !== year ||
        dateObj.getMonth() !== month ||
        dateObj.getDate() !== day
    ) {
        return { isValid: false, error: "Invalid date." };
    }
    const now = new Date();
    if (dateObj > now) {
        return { isValid: false, error: "Birthdate cannot be in the future." };
    }
    return { isValid: true, value: dateObj.toISOString().split('T')[0] };
}

/**
 * Validates email input.
 * @param {string} email - Email input.
 * @returns {Object} Validation result with trimmed email if valid.
 */
function validateEmail(email) {
    if (!email || typeof email !== 'string') {
        return { isValid: false, error: "Email is required." };
    }
    const trimmed = email.trim();
    if (trimmed.length < 5 || trimmed.length > 254) {
        return { isValid: false, error: "Email length must be between 5 and 254 characters." };
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmed)) {
        return { isValid: false, error: "Invalid email format." };
    }
    return { isValid: true, value: trimmed };
}

/**
 * Prompts user for input and validates it.
 * @param {string} promptMessage - Message to show in the prompt.
 * @param {function} validationFunction - Function used to validate input.
 * @returns {string} Validated and formatted input.
 */
function promptAndValidate(promptMessage, validationFunction) {
    while (true) {
        const input = prompt(promptMessage);
        const validation = validationFunction(input);
        if (validation.isValid) {
            return validation.value;
        }
        alert(validation.error);
    }
}

/**
 * Handles the acceptance of terms and conditions.
 * @returns {boolean} True if accepted, false otherwise.
 */
function handleTermsAcceptance() {
    const viewTerms = confirm("Would you like to view the terms and conditions before proceeding?\n(Link: termsAndConditions.html)");
    if (viewTerms) {
        window.open('./terms/termsAndConditions.html', '_blank');
    }

    const agree = confirm("Do you agree with the terms and conditions?");
    if (agree) return true;

    const retry = confirm("You must accept the terms to participate.\nDo you accept now?");
    if (retry) {
        return confirm("Do you agree with the terms and conditions?");
    }

    return false;
}

/**
 * Displays a confirmation message to the user.
 * @param {User} user - The registered user.
 */
function showConfirmation(user) {
    alert(
        `Thank you for registering, ${user.fullName}, You're in!!\n` +
        `🎉 This is your lucky number: ${user.id}\n\n` +
        `📧 Stay tuned to your email (${user.email}) for draw updates.\n` +
        `Good luck! 🍀`
    );
}

/**
 * Main function to handle the full registration flow.
 */
function mainFunctionV2() {
    while (true) {
        const start = prompt("Hello! Would you like to register for the prize draw? (1 - Yes, 0 - No)");
        const validation = validateStartInput(start);
        if (!validation.isValid) {
            alert(validation.error);
            continue;
        }
        if (start === '0') {
            alert("No problem. Come back whenever you want!");
            return;
        }
        break;
    }

    const firstName = promptAndValidate("Enter your first name:", validateName);
    const lastName = promptAndValidate("Enter your last name:", validateName);
    const birthDateISO = promptAndValidate("Enter your birthdate (DD/MM/YYYY):", validateBirthDate);

    const fullName = `${firstName} ${lastName}`;
    const tempUser = new User(fullName, "", birthDateISO);

    if (!tempUser.isAdult()) {
        alert("Only participants aged 18 or older can register.");
        return;
    }

    const email = promptAndValidate("Enter your email:", validateEmail);
    const user = new User(fullName, email, birthDateISO);

    const accepted = handleTermsAcceptance();
    if (!accepted) {
        alert("You must accept the terms to participate.");
        return;
    }

    showConfirmation(user);
}

export default mainFunctionV2;
