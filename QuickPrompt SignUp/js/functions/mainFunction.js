import { getStartConfirmation } from './flow/getStart.js';
import { collectUserInfo } from './flow/collectUserInfo.js';
import { handleTermsAcceptance } from './terms/handleTerms.js';
import { showConfirmation } from './flow/confirmation.js';



export default function main_function() {
    const wantsToRegister = getStartConfirmation();
    if (!wantsToRegister) {
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
