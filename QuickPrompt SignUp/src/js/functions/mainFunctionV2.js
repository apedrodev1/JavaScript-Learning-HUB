/**
 * Abre o modal e retorna a decisão do usuário.
 * @returns {Promise<boolean>} true = aceitou, false = recusou
 */
/**
 * Classe que representa um participante.
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

/**
 * 📍 Validações e utilidades
 */
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
 * ✅ Tela de confirmação
 */
function showConfirmation(user) {
    alert(
        `🎉 Thank you for registering, ${user.fullName}!\n\n` +
        `This is your lucky number: ${user.id}\n\n` +
        `📧 Stay tuned to your email (${user.email}) for draw updates.\n` +
        `Good luck! 🍀`
    );
    window.location.href = './screenConfirmating.html';
}

function openTermsModal() {
    return new Promise((resolve) => {
        const modal = document.getElementById('termsModal');
        const btnAccept = document.getElementById('acceptTermsBtn');
        const btnDecline = document.getElementById('closeTermsBtnAlt');
        const btnClose = document.getElementById('closeTermsBtnX');

        modal.style.display = 'flex';

        const accept = () => {
            cleanup();
            modal.style.display = 'none';
            resolve(true);
        };

        const decline = () => {
            cleanup();
            modal.style.display = 'none';
            resolve(false);
        };

        const cleanup = () => {
            btnAccept.removeEventListener('click', accept);
            btnDecline.removeEventListener('click', decline);
            btnClose.removeEventListener('click', decline);
        };

        btnAccept.addEventListener('click', accept);
        btnDecline.addEventListener('click', decline);
        btnClose.addEventListener('click', decline);
    });
}

/**
 * Fluxo principal de aceitação dos termos com controle de recusas.
 */
async function handleTermsAcceptance() {
    let declinedCount = 0;

    while (true) {
        const decision = await openTermsModal();

        if (decision) {
            return true; // ✅ Aceitou
        } else {
            declinedCount++;

            if (declinedCount === 1) {
                alert('⚠️ Você deve aceitar os termos para participar!');
            } else {
                // ❌ Recusou duas vezes → tela de não participante
                window.location.href = '../../pages/screens/screenNotParticipating.html';
                return false;
            }
        }
    }
}

/**
 * 🚀 Função principal
 */
export default async function mainFunctionV2() {
    while (true) {
        const start = prompt("Hello! Would you like to register for the prize draw? (1 - Yes, 0 - No)");
        const validation = validateStartInput(start);
        if (!validation.isValid) {
            alert(validation.error);
            continue;
        }
        if (start === '0') {
            alert("No problem. Come back whenever you want!");
            window.location.href = './screenNotParticipating.html';
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
            window.location.href = './screenNotParticipating.html';
            return;
        }

        break;
    }

    const fullName = `${firstName} ${lastName}`;
    const email = promptAndValidate("Enter your email:", validateEmail);
    const user = new User(fullName, email, birthDateISO);

    const accepted = await handleTermsAcceptance();
    if (!accepted) {
        return;
    }

    showConfirmation(user);
}

/**
 * Listener para botão voltar
 */
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnGoBack");
    if (btn) {
        btn.addEventListener("click", mainFunctionV2);
    }
});
