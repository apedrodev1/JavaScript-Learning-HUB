import { openTermsModal } from './openTermsModal.js';

/**
 * Manages user agreement to terms and conditions.
 * Handles logic based on modal interaction or direct prompt.
 *
 * @returns {Promise<boolean>} - True if the user accepts, false otherwise.
 */
export async function handleTermsAcceptance() {
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
