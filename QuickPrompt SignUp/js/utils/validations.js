import { capitalize } from "./helpers.js";

export function validateStartInput(input) {
    if (input !== '1' && input !== '0') {
        return {
            isValid: false,
            error: "Invalid input. Please enter 1 (Yes) or 0 (No)."
        };
    }

    return { isValid: true };
}


export function validateName(name) {
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

    const capitalized = capitalize(trimmed);

    return { isValid: true, value: capitalized };
}



export function validateBirthDate(birthDate) {
    if (!birthDate || typeof birthDate !== 'string') {
        return { isValid: false, error: "Birthdate is required." };
    }

    // Aceita apenas formato dd/mm/yyyy
    const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = birthDate.match(dateRegex);

    if (!match) {
        return { isValid: false, error: "Format must be DD/MM/YYYY." };
    }

    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10) - 1;
    const year = parseInt(match[3], 10);

    const dateObj = new Date(year, month, day);

    // Valida a existência da data (ex: 30/02 é inválido)
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

    return { isValid: true, value: dateObj.toISOString().split('T')[0] }; // ISO string para padronizar internamente
}



export function validateEmail(email) {
    if (!email || typeof email !== 'string') {
        return { isValid: false, error: "Email is required." };
    }

    const trimmed = email.trim();

    if (trimmed.length < 5 || trimmed.length > 254) {
        return { isValid: false, error: "Email length must be between 5 and 254 characters." };
    }

    // Regex mais completo, ainda leve
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(trimmed)) {
        return { isValid: false, error: "Invalid email format." };
    }

    return { isValid: true, value: trimmed };
}
