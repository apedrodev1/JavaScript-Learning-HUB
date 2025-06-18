/**
 * Main application flow controller.
 * Handles registration flow: start confirmation, user data collection,
 * terms acceptance, and final registration confirmation.
 *
 * @module mainFunction
 */

import { getStartConfirmation } from './flow/getStart.js';
import { collectUserInfo } from './flow/collectUserInfo.js';
import { handleTermsAcceptance } from './terms/handleTerms.js';
import { showConfirmation } from './flow/confirmation.js';

/**
 * Executes the full registration workflow.
 * If user accepts, their information is collected, terms are presented,
 * and a confirmation message is shown.
 */
export default async function main_function() {
    const wantsToRegister = getStartConfirmation();
    if (!wantsToRegister) {
        alert("No problem. Come back whenever you want!");
        return;
    }

    const user = collectUserInfo();
    if (!user) return;

    const accepted = await handleTermsAcceptance();
    if (!accepted) {
        alert("You must accept the terms to participate.");
        return;
    }

    showConfirmation(user);
}