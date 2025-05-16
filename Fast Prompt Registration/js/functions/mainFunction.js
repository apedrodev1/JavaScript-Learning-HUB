import { collectUserInfo } from './collectUserInfo.js';
import { handleTermsAcceptance } from './terms/handleTerms.js';
import { showConfirmation } from './confirmation.js';

export default function main_function() {
    const answer = prompt("Hello! Would you like to register for the prize draw? (1 - Yes, 0 - No)");
    if (answer !== '1') {
        alert("No problem. Come back whenever you want!");
        return;
    }

    const user = collectUserInfo();
    if (!user) return;

    const accepted = handleTermsAcceptance();
    if (!accepted) {
        alert("You must accept the terms to participate.");
        return;
    }

    showConfirmation(user);
}
