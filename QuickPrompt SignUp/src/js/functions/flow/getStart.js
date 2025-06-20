/**
 * Handles the initial confirmation prompt from the user.
 *
 * @module getStart
 */

import { validateStartInput } from '../utils/validations.js';

/**
 * Prompts the user to confirm if they want to register.
 *
 * @returns {boolean} True if user wants to register, false otherwise.
 */
export function getStartConfirmation() {
    while (true) {
        const answer = prompt("Hello! Would you like to register for the prize draw? (1 - Yes, 0 - No)");
        const { isValid, error } = validateStartInput(answer);

        if (!isValid) {
            alert(error);
            continue;
        }

        return answer === '1';
    }
}
