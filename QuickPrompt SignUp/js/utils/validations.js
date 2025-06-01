/**
 * Validation utilities for user input.
 *
 * @module validations
 */

import { capitalize } from "./helpers.js";

/**
 * Validates start input (1 or 0).
 *
 * @param {string} input - User input.
 * @returns {{ isValid: boolean, error?: string }}
 */
export function validateStartInput(input) {
    if (input !== '1' && input !== '0') {
        return {
            isValid: false,
            error: "Invalid input. Please enter 1 (Yes) or 0 (No)."
        };
    }

    return { isValid: true };
}

/**
 * Validates a name string.
 *
 * @param {string} name - Name to validate.
 * @returns {{ isValid: boolean, error?: string, value?: string }}
 */
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

/**
 * Validates a birth date in DD/MM/YYYY format.
 *
 * @param {string} birthDate - Birth date input.
 * @returns {{ isValid: boolean, error?: string, value?: string }}
 */
export function validateBirthDate(birthDate) {
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
 * Validates an email address.
 *
 * @param {string} email - Email to validate.
 * @returns {{ isValid: boolean, error?: string, value?: string }}
 */
export function validateEmail(email) {
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
