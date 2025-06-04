/**
 * Handles user interaction with terms and conditions via in-page modal.
 *
 * @module handleTerms
 */

import { openTermsModal } from './openTermsModal.js';

/**
 * Handles user interaction with terms and conditions via in-page modal.
 *
 * @returns {Promise<boolean>} True if the user accepts the terms, false otherwise.
 */
export async function handleTermsAcceptance() {
    const viewTerms = confirm("Would you like to view the terms and conditions before proceeding?");
    if (viewTerms) {
        await openTermsModal(); // Exibe o iframe com o conteúdo HTML
    }

    const agree = confirm("Do you agree with the terms and conditions?");
    if (agree) return true;

    const retry = confirm("You must accept the terms to participate.\nDo you accept now?");
    if (retry) {
        return confirm("Do you agree with the terms and conditions?");
    }

    return false;
}

