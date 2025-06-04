/**
 * Displays the terms and conditions in an in-page modal using an iframe.
 *
 * @module modalUtils
 */

/**
 * Opens the modal with the embedded terms and waits for it to be closed.
 *
 * @async
 * @function
 * @returns {Promise<void>} Resolves when the modal is closed by the user.
 */
export function openTermsModal() {
    return new Promise((resolve) => {
        const modal = document.getElementById('termsModal');
        const closeBtn = document.getElementById('closeTermsBtn');

        modal.style.display = 'flex';

        const handleClose = () => {
            modal.style.display = 'none';
            closeBtn.removeEventListener('click', handleClose);
            resolve();
        };

        closeBtn.addEventListener('click', handleClose);
    });
}
