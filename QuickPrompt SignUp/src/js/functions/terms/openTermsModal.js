/**
 * Opens the terms and conditions modal and waits for user interaction.
 * @returns {Promise<boolean>} - Resolves true if accepted, false if declined.
 */
export function openTermsModal() {
    return new Promise((resolve) => {
        const modal = document.getElementById('termsModal');
        const btnAccept = document.getElementById('acceptTermsBtn');
        const btnDecline = document.getElementById('closeTermsBtnAlt');
        const btnClose = document.getElementById('closeTermsBtnX');

        modal.style.display = 'flex';

        const accept = () => {
            cleanup();
            modal.style.display = 'none';
            resolve(true);
        };

        const decline = () => {
            cleanup();
            modal.style.display = 'none';
            resolve(false);
        };

        const cleanup = () => {
            btnAccept.removeEventListener('click', accept);
            btnDecline.removeEventListener('click', decline);
            btnClose.removeEventListener('click', decline);
        };

        btnAccept.addEventListener('click', accept);
        btnDecline.addEventListener('click', decline);
        btnClose.addEventListener('click', decline);
    });
}
