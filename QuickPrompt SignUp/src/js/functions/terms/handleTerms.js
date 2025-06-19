import { openTermsModal } from './openTermsModal.js';

/**
 * Manages user agreement to terms and conditions with retry logic.
 * If declined twice, redirects to the not participating screen.
 * 
 * @returns {Promise<boolean>} - True if accepted, false if declined twice.
 */
export async function handleTermsAcceptance() {
    let declinedCount = 0;

    while (true) {
        const decision = await openTermsModal();

        if (decision) {
            return true; // ✅ Accepted terms
        } else {
            declinedCount++;

            if (declinedCount === 1) {
                alert('⚠️ You must accept the terms to participate!');
            } else {
                // ❌ Declined twice — redirect
                window.location.href = '../../pages/screens/screenNotParticipating.html';
                return false;
            }
        }
    }
}