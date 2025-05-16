export function validateName(name) {
    if (!name || typeof name !== 'string') {
        return { isValid: false, error: "Name is required." };
    }

    const trimmed = name.trim();

    if (trimmed.length < 2) {
        return { isValid: false, error: "Name must have at least 2 characters." };
    }

    return { isValid: true, value: trimmed };
}

export function validateEmail(email) {
    if (!email) {
        return { isValid: false, error: "Email is required." };
    }

    const trimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmed)) {
        return { isValid: false, error: "Invalid email format." };
    }

    return { isValid: true, value: trimmed };
}

export function validateBirthDate(birthDate) {
    if (!birthDate) {
        return { isValid: false, error: "Birthdate is required." };
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!dateRegex.test(birthDate)) {
        return { isValid: false, error: "Format must be YYYY-MM-DD." };
    }

    const parsed = new Date(birthDate);
    if (isNaN(parsed.getTime())) {
        return { isValid: false, error: "Invalid date." };
    }

    const now = new Date();
    if (parsed > now) {
        return { isValid: false, error: "Birthdate cannot be in the future." };
    }

    return { isValid: true, value: birthDate };
}