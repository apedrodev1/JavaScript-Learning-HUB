/**
 * User class to represent a participant in the prize draw.
 */
class User {
    constructor(fullName, email, birthDateISO) {
        this.id = this.generateID();
        this.fullName = fullName;
        this.email = email;
        this.birthDate = birthDateISO;
    }

    generateID() {
        return Math.random().toString(36).substring(2, 11);
    }

    getAge() {
        const today = new Date();
        const birth = new Date(this.birthDate);
        if (isNaN(birth.getTime())) return null;

        let age = today.getFullYear() - birth.getFullYear();
        const m = today.getMonth() - birth.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    }

    isAdult() {
        return this.getAge() >= 18;
    }
}

function capitalize(name) {
    return name
        .toLowerCase()
        .split(' ')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');
}

function validateStartInput(input) {
    if (input !== '1' && input !== '0') {
        return { isValid: false, error: "Invalid input. Please enter 1 (Yes) or 0 (No)." };
    }
    return { isValid: true };
}

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
 * Opens a modal and resolves the user's choice.
 * @returns {Promise<boolean>} Resolves true if accepted, false if closed.
 */
function openTermsModal() {
    return new Promise((resolve) => {
        const modal = document.getElementById('termsModal');
        const closeBtn = document.getElementById('closeTermsBtn');
        const acceptBtn = document.getElementById('acceptTermsBtn');

        modal.style.display = 'flex';

        const handleAccept = () => {
            cleanup();
            modal.style.display = 'none';
            resolve(true);
        };

        const handleClose = () => {
            cleanup();
            modal.style.display = 'none';
            resolve(false);
        };

        const cleanup = () => {
            closeBtn.removeEventListener('click', handleClose);
            acceptBtn.removeEventListener('click', handleAccept);
        };

        closeBtn.addEventListener('click', handleClose);
        acceptBtn.addEventListener('click', handleAccept);
    });
}

/**
 * Handles the acceptance of terms and conditions using modal logic.
 * @returns {Promise<boolean>} True if accepted, false otherwise.
 */
async function handleTermsAcceptance() {
    const wantsToView = confirm("Would you like to view the terms and conditions before proceeding?");
    if (wantsToView) {
        const acceptedInModal = await openTermsModal();
        if (acceptedInModal) return true;

        alert("⚠️ You must accept the terms to participate.");
        const agreeAfterClose = confirm("Do you agree with the terms and conditions?");
        if (agreeAfterClose) return true;

        return false;
    }

    const agrees = confirm("Do you agree with the terms and conditions? ❗ Without even reading them?");
    if (agrees) return true;

    const retry = confirm("⚠️ You must accept the terms to participate. Do you accept now?");
    if (retry) return true;

    alert("❌ You must accept the terms to participate.");
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
async function mainFunctionV2() {
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

    let birthDateISO;
    while (true) {
        birthDateISO = promptAndValidate("Enter your birthdate (DD/MM/YYYY):", validateBirthDate);

        const tempUser = new User(`${firstName} ${lastName}`, "", birthDateISO);
        const age = tempUser.getAge();

        if (age === null || age > 100) {
            alert(`🤔 Are you really ${age} years old? Please, enter your birthdate again.`);
            continue;
        }

        if (!tempUser.isAdult()) {
            alert("Only participants aged 18 or older can register.");
            return;
        }

        break;
    }

    const fullName = `${firstName} ${lastName}`;
    const email = promptAndValidate("Enter your email:", validateEmail);
    const user = new User(fullName, email, birthDateISO);

    const accepted = await handleTermsAcceptance();
    if (!accepted) {
        alert("You must accept the terms to participate.");
        return;
    }

    showConfirmation(user);


}

export default mainFunctionV2;
