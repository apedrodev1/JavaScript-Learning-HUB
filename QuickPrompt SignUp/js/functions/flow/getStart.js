import { validateStartInput } from '../../utils/validations.js';

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
